<template>
  <div class="company">
    <h1><i class="el-icon-office-building" />  填写简历:</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm">
      <el-form-item
        label="名字"
        prop="name">
        <el-input v-model="ruleForm.name">1</el-input>
      </el-form-item>
      <el-form-item
        label="电话号码"
        prop="phone">
        <el-input v-model="ruleForm.phone">1</el-input>
      </el-form-item>
      <el-form-item
        label="邮件地址"
        prop="email">
        <el-input v-model="ruleForm.email">1</el-input>
      </el-form-item>
      <el-form-item
        label="专业"
        prop="major">
        <el-input v-model="ruleForm.major">1</el-input>
      </el-form-item>
      <el-form-item
        label="毕业年份"
        prop="graduate">
        <el-date-picker
          v-model="ruleForm.graduate"
          type="year"
          placeholder="选择年"
          value-format="yyyy届">1
        </el-date-picker>
      </el-form-item>
      <el-form-item
        label="意向职位"
        prop="like">
        <el-input v-model="ruleForm.like">1</el-input>
      </el-form-item>
      <el-form-item
        label="个人技能"
        prop="skill">
        <el-input
          v-model="ruleForm.skill"
          type="textarea"
          autosize>1</el-input>
      </el-form-item>
      <el-form-item
        label="项目经历"
        prop="item">
        <el-input
          type="textarea"
          v-model="ruleForm.item"
          autosize>1</el-input>
      </el-form-item>
      <el-form-item
        label="实习经历"
        prop="work">
        <el-input
          v-model="ruleForm.work"
          type="textarea"
          autosize>1</el-input>
      </el-form-item>
      <el-form-item
        label="个人介绍"
        prop="email">
        <el-input
          v-model="ruleForm.intro"
          type="textarea"
          autosize>1</el-input>
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
  import { setResumesMessage } from '~/server/api';
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          phone: '',
          graduate: '',
          major: '',
          skill: '',
          intro: '',
          like: '',
          work: '',
          email: '',
          item: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入个人名字', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入联系号码', trigger: 'blur' }
          ],
          graduate: [
            { required: true, message: '请输入毕业年份', trigger: 'blur' }
          ],
          major: [
            { required: true, message: '请输入专业', trigger: 'blur' }
          ],
          skill: [
            { required: true, message: '请输入个人技能', trigger: 'blur'}
          ],
          like: [
            { required: true, message: '请输入意向职位', trigger: 'blur'}
          ],
          intro: [
            { required: true, message: '请输入个人介绍', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮件地址‘', trigger: 'blur' }
          ]
        }
      };
    },
    layout: 'blank',
    methods: {
      submitForm() {
        console.log(this.ruleForm);
        this.setResumes();
      },
      resetForm(formName) {
        this.$message({
          message: '有缘再会',
          type: 'warning'
        });
        setTimeout(() => {
          window.location.href="http://stuer.ericwu.cn/discuss";
        },500)
      },
      setResumes() {
        setResumesMessage({
          userId: 134,
          name: this.ruleForm.name,
          phone: this.ruleForm.phone,
          email: this.ruleForm.email,
          major: this.ruleForm.major,
          graduate: this.ruleForm.graduate,
          like: this.ruleForm.like,
          skill: this.ruleForm.skill,
          work: this.ruleForm.work,
          item: this.ruleForm.item,
          intro: this.ruleForm.intro
        }).then(res => {
          console.log('提交简历成功', res);
          this.$message({
            message: '提交简历成功，请静候佳音',
            type: 'success'
          });
          setTimeout(() => {
            window.location.href="http://stuer.ericwu.cn/discuss";
          },500);

        }).catch(e => {
          console.error('提交简历失败', e);
        })
      },
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
