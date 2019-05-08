<template>
  <div class="main">
    <title-divider title="发布职位" />
    <div class="form-wrapper">
      <div class="form">
        <el-form
          ref="form"
          :model="form"
          label-width="80px">
          <el-form-item label="职位名称">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="工作地点">
            <el-input v-model="form.locate" />
          </el-form-item>
          <el-form-item label="工作薪酬">
            <el-input v-model="form.salary" />
          </el-form-item>
          <el-form-item label="截止时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date"
                style="width: 100%;" />
            </el-col>
          </el-form-item>
          <el-form-item label="置顶">
            <el-switch v-model="form.delivery" />
          </el-form-item>
          <el-form-item label="工作福利">
            <el-checkbox-group v-model="form.type">
              <el-checkbox
                label="五险一金"
                name="type" />
              <el-checkbox
                label="周末双休"
                name="type" />
              <el-checkbox
                label="扁平化管理"
                name="type" />
              <el-checkbox
                label="团建活动"
                name="type" />
              <el-checkbox
                label="带薪年假"
                name="type" />
              <el-checkbox
                label="包吃包住"
                name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="职位要求">
            <el-input
              type="textarea"
              placeholder="请输入职位要求"
              v-model="form.desc"
              maxlength="150"
              autosize />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit">发布职位</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import { setJobMessage } from '~/server/api';
  import TitleDivider from './title-divider';
  import axios from 'axios';
  import Http from '~/server/http';
  export default {
    components: {
      TitleDivider
    },
    data() {
      return {
        form: {
          name: '',
          locate: '',
          salary: '',
          date: '',
          delivery: false,
          type: [],
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.form);
        setJobMessage({
          name: this.form.name,
          place: this.form.locate,
          salary: this.form.salary,
          date: this.form.date,
          top: Number(this.form.delivery),
          workfare: this.form.type.join('-'),
          req: this.form.desc
        }).then(res => {
          console.log('提交成功:',res)
        }).catch(e => {
          console.log('提交职位信息失败', e);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    margin-top: 50px;
    min-width: 800px;
    background-color: #fff;


    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      .form {
        margin-top: 45px;
        max-width: 600px;
      }
    }
  }
</style>
