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
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
          desc: ''
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
          ]
        }
      };
    },
    layout: 'blank',
    methods: {
      submitForm(formName) {
        // let self = this
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     self.$axios.post('/company/submit', {
        //       name: self.ruleForm.name,
        //       num: self.ruleForm.num,
        //       address: self.ruleForm.address,
        //       desc: self.ruleForm.desc
        //     }).then(({status, data}) => {
        //       if (status===200) {
        //         location.href='/'
        //         console.log("success")
        //       }else {
        //         self.error = `服务器出错，错误码:${status}`
        //       }
        //     })
        //   }
        // });
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
