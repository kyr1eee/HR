<template>
  <div class="company">
    <h1><i class="el-icon-office-building" />  公司认证:</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm">
      <el-form-item
        label="公司名称"
        prop="name">
        <el-input v-model="ruleForm.name">1</el-input>
      </el-form-item>
      <el-form-item
        label="经营注册号"
        prop="num">
        <el-input v-model="ruleForm.num">1</el-input>
      </el-form-item>
      <el-form-item
        label="公司地址"
        prop="address">
        <el-input v-model="ruleForm.address">1</el-input>
      </el-form-item>
      <el-form-item
        label="公司业务"
        prop="bussiness">
        <el-input v-model="ruleForm.bussiness">1</el-input>
      </el-form-item>
      <el-form-item
        label="公司性质"
        prop="type">
        <el-input v-model="ruleForm.type">1</el-input>
      </el-form-item>
      <el-form-item
        label="公司人数"
        prop="staff">
        <el-input v-model="ruleForm.staff">1</el-input>
      </el-form-item>
      <el-form-item
        label="公司简介"
        prop="desc">
        <el-input
          type="textarea"
          v-model="ruleForm.desc"
          autosize>1</el-input>
      </el-form-item>
      <el-form-item
        label="邮件地址"
        prop="email">
        <el-input v-model="ruleForm.email">1</el-input>
      </el-form-item>
      <el-form-item
        label="用户密码"
        prop="pwd"
        show-password>
        <el-input v-model="ruleForm.pwd">1</el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm">提交</el-button>
        <el-button @click="resetForm">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { setCompanyMessage } from '~/server/api';
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          num: '',
          address: '',
          bussiness: '',
          type: '',
          staff: '',
          desc: '',
          pwd: '',
          email: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入公司名称', trigger: 'blur' }
          ],
          num: [
            { required: true, message: '请填写公司经营注册号', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请填写公司地址', trigger: 'blur' }
          ],
          bussiness: [
            { required: true, message: '请填写公司业务', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请填写公司性质', trigger: 'blur'}
          ],
          staff: [
            { required: true, message: '请填写公司人数', trigger: 'blur'}
          ],
          desc: [
            { required: true, message: '请填写公司简介', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请邮件地址', trigger: 'blur' }
          ]
        }
      };
    },
    layout: 'blank',
    methods: {
      submitForm() {
        setCompanyMessage({
          name: this.ruleForm.name,
          regNum: this.ruleForm.num,
          address: this.ruleForm.address,
          business: this.ruleForm.bussiness,
          property: this.ruleForm.type,
          people: this.ruleForm.staff,
          info: this.ruleForm.desc,
          password: this.ruleForm.pwd,
          email: this.ruleForm.email
        }).then(res => {
          this.$notify({
            title: '提交认证成功',
            message: '还需要管理员审核哦',
            position: 'top-left',
            duration: 1000,
          });
          setTimeout(() => {
            window.location.href = "http://stuer.ericwu.cn/discuss";
          }, 500);
          console.log('公司认证提交',res);
        }).catch(e => {
          console.log('公司认证提交失败',e);
          this.$notify({
            title: '提交认证失败',
            message: '即将退出',
            position: 'top-left',
            duration: 1000,
          });
          setTimeout(() => {
            window.location.href = "http://stuer.ericwu.cn/discuss";
          }, 500);
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  body {
    text-align: center
  }
  .company {
    margin: 100px auto;
    width: 600px;
  }
</style>
