<template>
  <div id="navtop">
    <div class="line"></div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <div style="float: right;text-align: right;">
        <el-submenu index="2" class="right-item">
          <template slot="title">消息</template>
          <el-menu-item index="2-1">未读消息</el-menu-item>
          <el-menu-item index="2-2">任务通知</el-menu-item>
          <el-menu-item index="2-3">系统通知</el-menu-item>
        </el-submenu>
        <el-submenu index="3" class="right-item">
          <template slot="title">我的</template>
          <el-menu-item index="3-1">个人中心</el-menu-item>
          <el-menu-item index="3-2">账号设置</el-menu-item>
          <el-submenu index="3-3">
            <template slot="title">帮助</template>
            <el-menu-item index="3-3-1">文档查看</el-menu-item>
            <el-menu-item index="3-3-2">问题反馈</el-menu-item>
            <el-menu-item index="3-3-3">版本更新</el-menu-item>
          </el-submenu>
          <el-menu-item index="3-4">退出</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex3: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}

</script>
