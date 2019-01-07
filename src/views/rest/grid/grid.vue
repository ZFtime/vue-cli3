<style lang="less">
.grid {
  h2 {
    font-size: 2.2rem;
    font-weight: 400;
    margin-bottom: 18px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  .slide {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .wrapper {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .prograam {
    padding-left: 50px;
    padding-right: 50px;
    .left_content {
      width: 100%;
      text-align: left;
      padding: 12px;
      color: #000;
      .light {
        width: 21em;
        font-size: 18px;
        margin: 0 0 24px;
        span {
          color: #c2a661;
        }
      }
      .items-center {
        .btn {
          background: none;
          border: 1px solid #00a862;
          border-radius: 48px;
          box-sizing: border-box;
          color: #00a862;
          display: inline-block;
          font-weight: 500;
          outline: none;
          overflow: hidden;
          padding: 6px 18px;
          margin: 0px 10px;
          transition-duration: 0.1s;
        }
      }
    }
    .right_content {
      width: 100%;
      height: auto;
      vertical-align: middle;
      img {
        height: 72px;
        margin-top: 5rem;
      }
    }
  }
  .tmall {
    padding-top: 36px;
    padding-bottom: 36px;
    background: #f7f7f7;
    p {
      margin: 0px 0px 24px;
      font-size: 15px;
    }
    ul {
      margin-top: 5rem;
      li:hover {
        cursor: pointer;
        //  margin-top: 3px !important;
        transform: translate(0px, -5px);
        transition: 0.3s linear;
        box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
      }
      li {
        width: 22.8%;
        float: left;
        background-color: #ffffff;
        margin: 12px !important;
        img {
          margin-top: -48px;
          height: 72px;
          margin-bottom: -24px;
        }
        p {
          font-size: 1rem;
          word-wrap: break-word;
          word-break: normal;
        }
        .title-1 {
          font-size: 1rem;
          padding-top: 26px;
        }
        .caption {
          font-size: 1rem;
          color: #c2a661;
          font-weight: 400;
          opacity: 0.7;
          text-transform: none;
          display: inline-block;
          margin-bottom: 30px;
        }
        .margin2 {
          margin-bottom: 18px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="grid">
    <Row>
      <div class="slide">
        <Carousel autoplay v-model="value2" loop>
          <CarouselItem>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
              <div class="demo-carousel">
                <img src="../grid/img/banner_1.jpg" alt>
              </div>
            </Col>
          </CarouselItem>
          <CarouselItem>
            <Col :xs="24" :sm="24" :md="24" :lg="24">
              <div class="demo-carousel">
                <img src="../grid/img/banner_2.jpg" alt>
              </div>
            </Col>
          </CarouselItem>
          <!-- <CarouselItem>
              <div class="demo-carousel">3</div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">4</div>
          </CarouselItem>-->
        </Carousel>
      </div>
      <div class="wrapper">
        <ul>
          <li>
            <Col span="8">
              <img src="./img/starbucks-tmall-0102-cn.jpg" alt>
            </Col>
          </li>
          <li>
            <Col span="8">
              <img src="./img/starbucks-design-studio-web-china.jpg" alt>
            </Col>
          </li>
          <li>
            <Col span="8">
              <img src="./img/homepage-career-cn.jpg" alt>
            </Col>
          </li>
        </ul>
      </div>
    </Row>
    <div class="prograam">
      <Row>
        <Col :xs="12" :sm="14" :md="18" :lg="18">
          <div class="left_content">
            <h2>星享俱乐部</h2>
            <p class="light">
              开启您的星享之旅，星星越多、会员等级越高、
              好礼越丰富。
              <span>了解更多 ›</span>
            </p>
            <p class="items-center">
              <span class="login btn">登录</span>
              <span class="register btn">注册</span>
            </p>
          </div>
        </Col>
        <Col :xs="12" :sm="10" :md="6" :lg="6">
          <div class="right_content">
            <img src="./img/logo-msr-new.svg" alt>
          </div>
        </Col>
      </Row>
    </div>
    <Row>
      <div class="tmall">
        <h2>星巴克精选</h2>
        <p>在星巴克天猫旗舰店发现更多咖啡心意</p>
        <ul class="clearfix">
          <li>
            <img src="./img/tmall-card-01.png">
            <p class="title-1">
              <strong>会员星礼包</strong>
            </p>
            <p class="margin2">星享卡新升级
              <br>更多心意好礼
            </p>
            <p class="caption">了解更多 ›</p>
          </li>
          <li>
            <img src="./img/tmall-card-02.png">
            <p class="title-1">
              <strong>会员星礼包</strong>
            </p>
            <p class="margin2">星享卡新升级
              <br>更多心意好礼
            </p>
            <p class="caption">了解更多 ›</p>
          </li>
          <li>
            <img src="./img/tmall-eticket.png">
            <p class="title-1">
              <strong>会员星礼包</strong>
            </p>
            <p class="margin2">星享卡新升级
              <br>更多心意好礼
            </p>
            <p class="caption">了解更多 ›</p>
          </li>
          <li>
            <img src="./img/tmall-reserve.png">
            <p class="title-1">
              <strong>会员星礼包</strong>
            </p>
            <p class="margin2">星享卡新升级
              <br>更多心意好礼
            </p>
            <p class="caption">了解更多 ›</p>
          </li>
        </ul>
      </div>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value2: 0
    };
  }
};
</script>