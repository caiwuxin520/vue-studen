<template>
  <div class="tabbar">
    <van-tabbar v-model="active" fixed>
      <van-tabbar-item icon="home-o" to="/home" replace>首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o" to="/complaint" replace>咨询</van-tabbar-item>
      <van-tabbar-item icon="location-o" to="/consultation" replace>行程规划</van-tabbar-item>
      <van-tabbar-item icon="phone-o" info="官方" to="/trip" replace>投诉</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/myinfo" replace>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>

export default {
  data() {
    return {
      active: ""
    };
  },
  props:["nums"],
  created(){
    this.num()
  },
  methods:{
    num(){
      this.active = this.nums
    }
  }

};
</script>

<style lang="less">
.tabbar {
  .van-tabbar-item {
    .van-tabbar-item__icon {
      .van-info {
        width: 0.64rem;
        right: -0.20rem;
      }
    }
  }
}
</style>
