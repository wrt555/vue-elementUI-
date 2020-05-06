<template>
  <el-container>
    <el-header>
      <div class="head">我是头部</div>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse?'64px':'150px'">
        <div class="collapse" @click="toggle">|||</div>
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#007aff"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
        >
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>导航一</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航一</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>导航二</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="4">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航二</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>导航三</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="6">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航三</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    toggle () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.el-container{
    .el-header{
        text-align-last: right;
    }
    .el-container{
        .el-aside{
            .collapse{
                text-align: center;
                color: white;
                background-color: #6d6f71;
                padding: 10px 0;
            }
        }
    }
}
</style>
