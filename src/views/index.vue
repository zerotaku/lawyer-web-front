<template>
  <el-container>
    <el-aside  style="margin-top: 10px;width: 30%;height: 100%">
      <el-container width="100%">
        <el-header height="200px">
          <el-row style="text-align: right;">
              <div class="block" >
                <el-avatar :size="100" :src="squareUrl">
                </el-avatar>
              </div>
          </el-row>
          <el-row style="height: 50px">
            <div class="font-color" style="margin-top: 10px;font-weight: bold;text-align: right">张德明律师个人网站</div>
          </el-row>
          <el-row style="height: 50px">
            <div class="font-color" style="text-align: right">Zhang DeMing Lawyer’s Personal Website</div>
          </el-row>
        </el-header>
        <el-main style="width: 100%;">
          <el-container style="overflow-x:hidden;">
            <el-aside class="menu-fixed">Aside</el-aside>
            <el-main style="overflow-x:hidden;">
              <el-menu :default-active="activeIndex"
                       class="el-menu-vertical-demo"
                       mode="horizontal"
                       @select="handleSelect"
                       background-color="#00000000"
                       text-color="#fff"
                       active-text-color="#ffd04b"
              >
                <el-menu-item index="1">网站首页</el-menu-item>
                <el-menu-item index="2">律师简介</el-menu-item>
                <el-menu-item index="3">专注领域</el-menu-item>
                <el-menu-item index="4">经典案例</el-menu-item>
                <el-menu-item index="5">用户留言</el-menu-item>
                <el-menu-item index="6">联系律师</el-menu-item>
              </el-menu>
            </el-main>
          </el-container>
        </el-main>
        <el-footer>
          <el-row style="text-align: right;">
            <img height="100px" :src="QRCode">
          </el-row>
          <el-row>
            <div class="contact-panel">公司地址</div>
          </el-row>
          <el-row>
            <div class="contact-panel contact-panel-content">四川省自贡市xxxx</div>
          </el-row>
          <el-row>
            <div class="contact-panel">联系方式</div>
          </el-row>
          <el-row>
            <div class="contact-panel">13018186025</div>
          </el-row>
          <el-row>
            <div class="contact-panel">Email</div>
          </el-row>
          <el-row>
            <div class="contact-panel">736395078@qq.com</div>
          </el-row>

        </el-footer>
      </el-container>
    </el-aside>
    <el-container style="background-color: #f0f0f0;width: 70%">
      <el-header>
        <div class="block">
          <span class="demonstration">默认 Hover 指示器触发</span>
          <el-carousel height="300px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">图片 {{item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        activeIndex: '1',
        squareUrl: require('../assets/avatar.jpg'),
        QRCode: require('../assets/QR_code.png'),
      }
    },
    created(){
      document.title = "张德明律师个人网站"
    },
    mounted () {
      handleSelect(key, keyPath)
      {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>

  .font-color {
    color: #f2f2f2;
  }

  .contact-panel {
    color: #f2f2f2;
    width: 100%;
    text-align: right;
    margin-top: 5px;
  }

  .contact-panel-content {
    font-size: small;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


  .el-menu.el-menu--horizontal {
    border-bottom: solid 0px #e6e6e6;
  }

  .menu-fixed{
    /*实现了宽度为父容器宽度减去固定的300像素*/
    width:-webkit-calc(100% - 100px);
    width:-moz-calc(100% - 100px);
    width:calc(100% - 100px);
  }
</style>
