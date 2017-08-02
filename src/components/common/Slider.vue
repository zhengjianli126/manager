<template lang="html">
  <div class="left-slider">
    <div class="logo">
        <img src="../../assets/sjwlogo.png" alt="">
    </div>
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router theme="dark">
          <template v-for="item in items">
              <template v-if="item.subs">
                  <el-submenu :index="item.index">
                      <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                      <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}</el-menu-item>
                  </el-submenu>
              </template>
              <template v-else>
                  <el-menu-item :index="item.index">
                      <i :class="item.icon"></i>{{ item.title }}
                  </el-menu-item>
              </template>
          </template>
      </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
            items: [
                {
                    icon: 'el-icon-setting',
                    index: 'readme',
                    title: '融资产品管理',
                    subs: [
                        {
                            index: 'basetable',
                            title: '产品管理'
                        },
                        {
                            index: 'vuetable',
                            title: '产品审核'
                        }
                    ]
                },
                {
                    icon: 'el-icon-setting',
                    index: '2',
                    title: '融资业务处理',
                    subs: [
                        {
                            index: 'basetable',
                            title: '业务受理'
                        },
                        {
                            index: 'vuetable',
                            title: '项目审核'
                        }
                    ]
                },
                {
                    icon: 'el-icon-setting',
                    index: '3',
                    title: '标的上架管理',
                    subs: [
                        {
                            index: 'baseform',
                            title: '标的上架'
                        },
                        {
                            index: 'vueeditor',
                            title: '上架审核'
                        },
                        {
                            index: 'markdown',
                            title: 'markdown'
                        },
                        {
                            index: 'upload',
                            title: '文件上传'
                        }
                    ]
                },
                {
                    icon: 'el-icon-setting',
                    index: '4',
                    title: '标的管理',
                    subs: [
                      {
                        index: 'basecharts',
                        title: '标的信息'
                      }
                    ]
                },
                {
                    icon: 'el-icon-setting',
                    index: '5',
                    title: '放款管理',
                    subs:[
                      {
                        index: 'drag',
                        title:'放款流程'
                      }
                    ]
                }
            ]
        }
    },
      computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
}
</script>

<style lang="css">
.left-slider{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 0;
        bottom:0;
        background: #E06551;
        padding-top: 70px;
    }
  .left-slider>ul{
    height: 100%;
  }
  .logo{
      position: absolute;
      top: 17px;
      left: 50px;
  }
</style>
