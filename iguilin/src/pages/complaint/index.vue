<template>
  <div class="complaint">
    <van-tabs v-model="active">
      <van-tab title="客服消息">
          <van-button size="large">进入客服回话</van-button>
      </van-tab>
      <van-tab title="系统消息">
          <ul>
              <li v-for="item in list" :key="item.id">
                  <div class="title">
                      <p>{{item.title}}</p>
                      <p>{{item.time}}</p>
                  </div>
                  <div class="subtitle">类型:{{item.subtitle}}</div>
                  <div class="content">{{item.content}}</div>
              </li>
          </ul>
      </van-tab>
    </van-tabs>
    <tabbar :nums="1"></tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      list:[
          {
              id:1,
              title:'降温预警',
              time:'9月12日17:09',
              subtitle:"天气预报",
              content:'由于我市气象部门发布报道哦,今日我市西南以及市中心等地气温普遍高于39度,请市民及游客做好防晒防暑等工作,紧急电话40-566-7866'
          },
           {
              id:2,
              title:'降温预警',
              time:'9月12日17:09',
              subtitle:"天气预报",
              content:'由于我市气象部门发布报道哦,今日我市西南以及市中心等地气温普遍高于39度,请市民及游客做好防晒防暑等工作,紧急电话40-566-7866'
          },
           {
              id:3,
              title:'降温预警',
              time:'9月12日17:09',
              subtitle:"天气预报",
              content:'由于我市气象部门发布报道哦,今日我市西南以及市中心等地气温普遍高于39度,请市民及游客做好防晒防暑等工作,紧急电话40-566-7866'
          },
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.complaint {
  .van-tabs{
      .van-tabs__content{
          .van-tab__pane{
              padding: 0.4rem;
              .van-button{
                  width: 90%;
                  border-radius: 0.3rem;
                  background-color: #f44;
                  color: white;
                  position: fixed;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%,-50%);
              }
              ul{
                  li{
                      background-color: #eee;
                      padding: 0.2rem;
                      margin-bottom: 0.2rem;
                      .title{
                          display: flex;
                          justify-content: space-between;
                          line-height: 0.6rem;
                          p:first-child{
                              font-size: 16px
                          }
                          p:last-child{
                              font-size: 14px;
                              color: #bbb;
                          }
                      }
                      .subtitle{
                          font-size: 16px;
                          line-height: 0.6rem;
                      }
                      .content{
                          font-size: 14px;
                          color: #666;
                          line-height: 0.4rem;
                      }
                  }
              }
          }
      }
  }
}
</style>
