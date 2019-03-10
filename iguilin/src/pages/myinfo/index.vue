<template>
    <div class="myinfo">
        <div class="header">
            <div class="header-pic">
                <img src="@/assets/img/pic.png">
            </div>
            <div class="header-name">
                <h2>名字</h2>
                <p>请绑定手机></p>
            </div>
        </div>
        <div class="subtitle">
            <van-icon name="volume-o" />
            今天 20/10 北风微风 3级 多云
        </div>
        <div class="myorder">
            <div class="myorder-title">我的订单</div>
            <div class="myorder-content">
                <ul>
                    <li>
                        <img src="//m.360buyimg.com/babel/jfs/t22042/141/552683837/16670/209f4537/5b110133Nf9e34f86.png">
                        <p>全部订单</p>
                    </li>
                    <li>
                         <img src="//m.360buyimg.com/babel/jfs/t22042/141/552683837/16670/209f4537/5b110133Nf9e34f86.png">
                         <p>待付款</p>
                    </li>
                    <li>
                         <img src="//m.360buyimg.com/babel/jfs/t22042/141/552683837/16670/209f4537/5b110133Nf9e34f86.png">
                         <p>待使用</p>
                    </li>
                    <li>
                         <img src="//m.360buyimg.com/babel/jfs/t22042/141/552683837/16670/209f4537/5b110133Nf9e34f86.png">
                         <p>待评价</p>
                    </li>
                    <li>
                         <img src="//m.360buyimg.com/babel/jfs/t22042/141/552683837/16670/209f4537/5b110133Nf9e34f86.png">
                         <p>退款/售后</p>
                    </li>
                </ul>
            </div>
        </div>
        <tabbar :nums="4"></tabbar>
    </div>
</template>

<style lang="less" scoped>
    .myinfo{
        .header{
            background-color: #f44;
            display: flex;
            .header-pic{
                padding-left: 0.6rem;
                 line-height: 2rem;
                img{
                    width: 1rem;
                    height: 1rem;
                    border-radius: 50%;
                }
            }
            .header-name{
                display: flex;
                flex-direction:column;
                justify-content:center;
                padding-left: 0.4rem;
                h2{
                    font-size: 16px;
                    color: #fff;
                    font-weight: 900;
                    line-height: 0.4rem;
                }
                p{
                    font-size: 14px;
                    color: #fff;
                }
            }
        }
        .subtitle{
            font-size: 14px;
            line-height: 0.6rem;
            padding-left: 0.2rem;
            background-color: #eee;
            .van-icon{
                display: inline-block;
                vertical-align: middle;
                font-size: 18px;
            }
        }
        .myorder{
            margin-top: 0.4rem;
            background-color: #eee;
            .myorder-title{
                font-size: 16px;
                font-weight: 700;
                padding-left: 0.2rem;
                line-height: 0.6rem;
                border-bottom: 1px solid #f44;
            }
            .myorder-content{
               ul{
                    display: flex;
                   li{
                       display: flex;
                       flex-direction: column;
                       justify-content: center;
                       align-items: center;
                       padding: 0.2rem 0;
                       img{
                           width: 50%;
                           margin-bottom: 0.2rem;
                       }
                       p{
                           font-size:14px;
                       }
                   }
               }
            }
        }
    }
</style>

