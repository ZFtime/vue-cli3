<style lang="less">
@import "../css/common.css";
</style>

<template>
  <div class="about">
         <div class="layout">
        <Layout>
               <myHeader/>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                   <mySlider/>
                </Sider>
                <Layout>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header.vue";
import mySlider from "@/components/slide.vue";
export default {
  name: "about",
  components: {
    myHeader,
    mySlider
  }
};
</script>

