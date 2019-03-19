<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100vh;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.ivu-menu-item {
  color: #515a6e;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff',height:'100vh',overflow:'auto'}">
          <Menu :active-name="activeMenuName" theme="light" width="auto" :open-names="openMenuArr">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>音基
              </template>
              <router-link to="/">
                <MenuItem name="1-1">直播间配置</MenuItem>
              </router-link>
              <!-- <router-link to="/AppointTimeConfig">
                <MenuItem name="AppointTimeConfig">预约时间配置</MenuItem>
              </router-link>
              <router-link to="/ProductManage">
                <MenuItem name="ProductManage">商品管理</MenuItem>
              </router-link>
              <Submenu name="GameBank">
                <template slot="title">游戏</template>
                <router-link to="/GameBank/GameConfig">
                  <MenuItem name="GameConfig">游戏素材库配置</MenuItem>
                </router-link>
                <router-link to="/GameBank/CourseGame">
                  <MenuItem name="CourseGame">课程游戏配置</MenuItem>
                </router-link>
                <router-link to="/GameBank/LittleGame">
                  <MenuItem name="LittleGame">小游戏配置</MenuItem>
                </router-link>
              </Submenu>
              <Submenu name="QuestionBank">
                <template slot="title">题库</template>
                <router-link to="/QuestionBank/QuestionSelect">
                  <MenuItem name="QuestionSelect">选择题</MenuItem>
                </router-link>
                <router-link to="/QuestionBank/DragNoteLine">
                  <MenuItem name="DragNoteLine">拖拽小节线</MenuItem>
                </router-link>
                <router-link to="/QuestionBank/KnockBeat">
                  <MenuItem name="KnockBeat">敲击单位拍</MenuItem>
                </router-link>
                <router-link to="/QuestionBank/SightSing">
                  <MenuItem name="SightSing">视唱</MenuItem>
                </router-link>
                <router-link to="/QuestionBank/QuestionTests">
                  <MenuItem name="QuestionTests">模拟试题库</MenuItem>
                </router-link>
              </Submenu> -->
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px 24px',height:'calc(100vh - 60px)'}">
          <!-- <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>-->
          <Content
            :style="{marginTop:'20px',padding: '24px', minHeight: '280px', background: '#fff',overflow:'auto'}"
          >
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import {
  Row,
  Submenu,
  Col,
  Icon,
  MenuItem,
  Menu,
  Sider,
  Layout,
  Breadcrumb,
  BreadcrumbItem,
  Card
} from "iview";
export default {
  data() {
    return {
      theme2: "light",
      activeMenuName:"",
      openMenuArr:['1']
    };
  },
  created(){
      this.activeMenuName = this.$route.name;
      this.openMenuArr.push(this.$route.meta.parentMenu);
  },
  mounted(){
  }
};
</script>
