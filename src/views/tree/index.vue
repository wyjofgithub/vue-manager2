<template>
  <div class="app-container">
    <el-row>
      <el-col :span="6">
        sdds
      </el-col>
      <el-col :span="18">右侧</el-col>
    </el-row>

  </div>
</template>

<script>

export default {
  data() {
    
    return {
      
      dialogVisible:false,
      name:'',
      treeForm:{
        id:'',
        pid:'',
        name:'',
        parentNum:'',
        childrenNum:''
      },
      rules:{}
    };
  },
  watch: {},

  methods: {
    modalElement(name){
      this.name==''?'场景':name
      this.dialogVisible=true;
    }
  }
};
</script>

<style scoped>
.addcj {
  width: 120px;
}
</style>