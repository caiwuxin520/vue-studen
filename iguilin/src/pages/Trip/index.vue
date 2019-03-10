<template>
    <div class="trip">
        <div class="header">i游桂林官方投诉平台,为您的旅游提供品质保障</div>
        <div class="content">
            <img src="@/assets/img/timg.jpg">
            <h2>电话投诉</h2>
            <p class="content-one">一键拨打,官方为您服务</p>
            <p class="content-two">投诉热线: <span>0773-2800315</span></p>
        </div>
        <tabbar :nums="3"></tabbar>
    </div>
</template>

<style lang="less" scoped>
    .trip{
        .header{
            line-height: 0.8rem;
            font-size: 16px;
            padding-left: 0.2rem;
            background-color: #eee;
        }
        .content{
            text-align: center;
            position: fixed;
            left: 50%;
            top:50%;
            transform: translate(-50%,-50%);
            img{
                width: 50%;
            }
            h2{
                font-size: 22px;
                line-height: 0.8rem;
            }
            .content-one{
                font-size: 16px;
                color: #111;
                line-height: 0.4rem;
            }
            .content-two{
                line-height: 0.4rem;
                font-size: 18px;
                color: #ccc;
                span{
                    color: #f44;
                }
            }
        }
    }
</style>

