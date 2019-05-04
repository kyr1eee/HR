<template>
  <div class="company">
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
        label="公司经营注册号"
        prop="num">
        <el-input v-model="ruleForm.num">1</el-input>
      </el-form-item>
      <el-form-item
        label="公司地址"
        prop="address">
        <el-input v-model="ruleForm.address">1</el-input>
      </el-form-item>
      <el-form-item
        label="公司简介"
        prop="desc">
        <el-input
          type="textarea"
          v-model="ruleForm.desc">1</el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')">保存</el-button>
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
          desc: [
            { required: true, message: '请填写公司简介', trigger: 'blur' }
          ]
        }
      };
    },
    layout: 'blank',
    methods: {
      submitForm(formName) {
        let self = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            self.$axios.post('/company/submit', {
              name: self.ruleForm.name,
              num: self.ruleForm.num,
              address: self.ruleForm.address,
              desc: self.ruleForm.desc
            }).then(({status, data}) => {
              if (status===200) {
                location.href='/'
                console.log("success")
              }else {
                self.error = `服务器出错，错误码:${status}`
              }
            })
          }
        });
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
    margin: 0 auto;
    top: 200px;
    width: 300px;
  }
</style>
