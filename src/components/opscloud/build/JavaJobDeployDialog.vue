<template>
  <el-dialog :title="title" :visible.sync="formStatus.visible" width="60%" @before-close="closeDialog">
    <el-tabs v-model="activeName">
      <el-tab-pane label="执行部署" name="deploy">
        <!--        <el-divider></el-divider>-->
        <el-form :model="cdJob">
          <el-form-item label="任务名称" :label-width="labelWidth">
            <el-input v-model="cdJob.name" disabled></el-input>
          </el-form-item>
          <el-form-item label="选择构件" :label-width="labelWidth" required>
            <el-select v-model.trim="buildId" placeholder="选择类型" :loading="loadArtifacts">
              <el-option
                v-for="item in artifactOptions"
                :key="item.id"
                :label="item.versionName"
                :value="item.id"
                :disabled="item.noArtifact">
                <span style="float: left">{{item.versionName}}</span>
                <span
                  style="float: right; color: #8492a6; font-size: 13px; margin-left: 10px">#{{ item.jobBuildNumber}} {{ item.endTime }}({{ item.ago }})</span>
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="主机分组" :label-width="labelWidth" required>
            <el-select v-model.trim="hostPattern" placeholder="选择类型" @change="handlerSelHostPattern">
              <el-option
                v-for="item in hostPatternOptions"
                :key="item.hostPattern"
                :label="item.hostPattern"
                :value="item.hostPattern">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="主机详情" :label-width="labelWidth">
            <el-card shadow="never">
              <div v-for="server in servers" :key="server.id">
                <el-tag style="margin-left: 5px" type="primary">{{ server.name }}-{{ server.serialNumber}} - {{
                  server.privateIp}}
                </el-tag>
                <el-tag style="margin-left: 2px" type="success" effect="dark">{{ server.deployVersion === null ? '首次发布':
                  server.deployVersion.versionName}}
                </el-tag>
              </div>
            </el-card>
          </el-form-item>
          <el-form-item label="并发控制" :label-width="labelWidth">
            <el-slider style="margin-left: 10px; width: 50%;" v-model="concurrent" mini :min="1" :max="8" :step="1"
                       show-stops></el-slider>
          </el-form-item>
        </el-form>
        <div style="width:100%;text-align:center">
          <el-button size="mini" type="primary" @click="handlerBuild" icon="fa fa-play" :loading="building"
                     :disabled="building">执行任务
          </el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="构建详情" name="details">
        <el-button size="mini" type="primary" @click="fetchData">刷新</el-button>
        <el-table :data="tableData" style="width: 100%" v-loading="loading">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="table-expand">
                <el-form-item label="工作引擎">{{props.row.jobEngine.jenkinsInstance.name}}</el-form-item>
                <el-form-item label="引擎构建编号">{{props.row.engineBuildNumber}}</el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column prop="jobBuildNumber" label="构建编号" width="100px">
          </el-table-column>
          <el-table-column prop="branch" label="构建分支" width="150px" v-if="false">
            <template slot-scope="scope">
              <build-branch :branch="scope.row.branch"></build-branch>
            </template>
          </el-table-column>
          <el-table-column label="状态" width="100px">
            <template slot-scope="scope">
              <build-status :build="scope.row"></build-status>
            </template>
          </el-table-column>
          <el-table-column label="详情">
            <template slot-scope="scope">
              <build-user :user="scope.row.user" :ago="scope.row.ago"></build-user>
              <build-times :buildTime="scope.row.buildTime" :startTime="scope.row.startTime"
                           :endTime="scope.row.endTime"></build-times>
              <!--              主机分组-->
              <build-host-pattern :hostPattern="scope.row.hostPattern"></build-host-pattern>
              <!--              部署服务器-->
              <build-servers :servers="scope.row.servers"></build-servers>
              <!--              产出物详情-->
              <build-artifacts :artifacts="scope.row.artifacts"></build-artifacts>
              <!--              工作节点-->
              <build-executors :executors="scope.row.executors"></build-executors>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="180">
            <template slot-scope="scope">
              <build-operation :build="scope.row"></build-operation>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination background @current-change="paginationCurrentChange"
                       layout="prev, pager, next" :total="pagination.total"
                       :current-page="pagination.currentPage"
                       :page-size="pagination.pageSize">
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
    <el-divider></el-divider>
    <div slot="footer" class="dialog-footer">
      <el-button size="mini" @click="closeDialog">关闭</el-button>
    </div>
  </el-dialog>
</template>

<script>

  // Component
  import BuildUser from '@/components/opscloud/build/summary/BuildUser'
  import BuildTimes from '@/components/opscloud/build/summary/BuildTimes'
  import BuildArtifacts from '@/components/opscloud/build/summary/BuildArtifacts'
  import BuildExecutors from '@/components/opscloud/build/summary/BuildExecutors'
  import BuildChanges from '@/components/opscloud/build/summary/BuildChanges'
  import BuildHostPattern from '@/components/opscloud/build/summary/BuildHostPattern'
  import BuildServers from '@/components/opscloud/build/summary/BuildServers'
  import BuildStatus from '@/components/opscloud/build/summary/BuildStatus'
  import BuildOperation from '@/components/opscloud/build/operation/BuildOperation'
  import BuildBranch from '@/components/opscloud/build/summary/BuildBranch'

  import {
    queryCdJobBuildPage,
    buildCdJob,
    queryCiJobBuildArtifact,
    queryCdJobHostPatternByJobId
  } from '@api/build/job.build.js'

  export default {
    data () {
      return {
        title: 'Java发布任务',
        activeName: 'deploy',
        application: '',
        cdJob: '',
        labelWidth: '150px',
        options: {
          stripe: true
        },
        queryParam: {
          queryName: ''
        },
        buildParam: {
          versionName: '',
          versionDesc: '',
          paramMap: {}
        },
        loadArtifacts: false,
        artifactOptions: [],
        buildId: '',
        concurrent: 1, // 并发
        hostPattern: '',
        hostPatternOptions: [],
        servers: [],
        tableData: [],
        loading: false,
        pagination: {
          currentPage: 1,
          pageSize: 5,
          total: 0
        },
        building: false,
        timer: null // 查询定时器
      }
    },
    name: 'JavaJobDeployDialog',
    props: ['formStatus'],
    components: {
      BuildUser,
      BuildTimes,
      BuildArtifacts,
      BuildExecutors,
      BuildChanges,
      BuildHostPattern,
      BuildServers,
      BuildOperation,
      BuildStatus,
      BuildBranch
    },
    filters: {
    },
    computed: {},
    mounted () {
    },
    beforeDestroy () {
      clearInterval(this.timer) // 销毁定时器
    },
    methods: {
      closeDialog () {
        clearInterval(this.timer) // 销毁定时器
        this.formStatus.visible = false
        this.$emit('closeDialog')
      },
      setTimer () {
        if (this.timer !== null) return
        this.timer = setInterval(() => {
          if (!this.formStatus.visible) return
          this.fetchData()
          // console.log('开始定时...每10秒执行一次')
        }, 5000)
      },
      getBuildArtifact () {
        this.loadArtifacts = true
        let requestBody = {
          'ciJobId': this.cdJob.ciJobId,
          'size': 10
        }
        queryCiJobBuildArtifact(requestBody)
          .then(res => {
            this.artifactOptions = res.body
            if (this.artifactOptions !== null && this.artifactOptions.length > 0) {
              // 选中最新构件
              this.buildId = this.artifactOptions[0].id
            }
            this.loadArtifacts = false
          })
      },
      getHostPattern () {
        queryCdJobHostPatternByJobId(this.cdJob.id)
          .then(res => {
            if (res.success) {
              this.hostPatternOptions = res.body
              this.handlerSelHostPattern()
            }
          })
      },
      initData (application, cdJob) {
        this.activeName = 'deploy'
        this.buildId = ''
        this.application = application
        this.cdJob = cdJob
        this.hostPatternOptions = []
        this.servers = []
        this.server = ''
        this.hostPattern = ''
        // 初始化参数
        if (cdJob.parameters.hostPattern !== null) {
          this.hostPattern = cdJob.parameters.hostPattern
        }
        this.setTimer()
        this.fetchData()
        this.getBuildArtifact()
        this.getHostPattern()
      },
      handlerSelHostPattern () {
        this.servers = []
        for (let hostPattern of this.hostPatternOptions) {
          if (hostPattern.hostPattern === this.hostPattern) {
            this.servers = hostPattern.servers
            break
          }
        }
      },
      handlerBuild () {
        if (this.buildId === '') {
          this.$message({
            message: '未选中部署构建',
            type: 'warning'
          })
        }
        if (this.hostPattern === '') {
          this.$message({
            message: '未选中主机分组',
            type: 'warning'
          })
        }
        this.building = true
        this.buildParam.paramMap.hostPattern = this.hostPattern // 服务器分组
        this.buildParam.paramMap.concurrent = this.concurrent // 并发控制
        let requestBody = {
          'cdJobId': this.cdJob.id,
          'ciBuildId': this.buildId,
          'versionName': this.buildParam.versionName,
          'versionDesc': this.buildParam.versionDesc,
          'concurrent': this.buildParam.concurrent,
          'paramMap': this.buildParam.paramMap
        }
        buildCdJob(requestBody)
          .then(res => {
            if (res.success) {
              this.$message({
                type: 'success',
                message: '任务执行中!'
              })
            } else {
              this.$message.error(res.msg)
            }
            this.building = false
          })
      },
      paginationCurrentChange (currentPage) {
        this.pagination.currentPage = currentPage
        this.fetchData()
      },
      fetchData () {
        if (this.tableData.length === 0) {
          this.loading = true
        }
        let requestBody = {
          'cdJobId': this.cdJob.id,
          'queryName': this.queryParam.queryName,
          'extend': 1,
          'page': this.pagination.currentPage,
          'length': this.pagination.pageSize
        }
        queryCdJobBuildPage(requestBody)
          .then(res => {
            this.tableData = res.body.data
            this.pagination.total = res.body.totalNum
            this.loading = false
          })
      }
    }
  }
</script>

<style>
  .el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 10px 0;
  }

</style>
