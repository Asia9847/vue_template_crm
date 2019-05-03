<template>
  <div class="navleft" v-bind:style="iscollapse?style1:style2">
    <el-row class="tac">
      <el-col>
        <el-switch class="menu_switch" v-model="iscollapse" active-color="#9EA2A6" inactive-color="#3993EE">
        </el-switch>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="iscollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">用户查询</el-menu-item>
            <el-menu-item index="1-2">信息变更</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span>角色管理</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span>资产管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>流程管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iscollapse: false,
      style1: {
        top:'0',
        width: "64px",
        position: 'relative',
      },
      style2: {
        width: "200px",
        position: 'relative',
      },
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}

</script>

