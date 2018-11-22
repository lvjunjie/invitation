<template>
    <div class="workSpace">
      <section class="top">
        <ul class="preface" :class="{active: !post}">
          <li>辛苦工作了一周</li>
          <li>你需要给自己放个假~</li>
          <li>我想邀请你一起</li>
          <li>登高远眺</li>
          <li>亦或品茶闲谈</li>
          <li>放松一下身心~</li>
          <li>
            <i style="color: #fff;font-size: 2rem" class="fa fa-coffee"></i>
          </li>
        </ul>

      </section>
      <section class="middle">
        <ul>
          <li v-in-view="'active'">
            <div class="place-pic back-2">

            </div>
            <div class="place-describe">
                <div class="describe">
                    <h4>天平山 (一叶“枫”情)</h4>
                    既可登高，亦可赏枫~~
                </div>
            </div>
          </li>
          <li v-in-view="'active'">
            <div class="place-pic back-3">

            </div>
            <div class="place-describe">
              <div class="describe">
                <h4>平江路</h4>
                漫步古街，体会“偷得浮生半日闲”的意境~
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section class="bottom">
        <div style="text-align: center;margin: 20px 0;color: #fff;font-weight: bold">
          期待中...
        </div>

        <h5>邀请人：吕俊杰</h5>
        <h5>相约时间：11/24 或 11/25</h5>


      </section>
    </div>
</template>

<script>
import { inView } from "../common/direvtive";

export default {
  name: 'workSpace',
  directives: { inView: inView() },
  props: ['post'],
  data () {
    return {

    }
  },
  methods: {
    initPage () {

    }
  },
  mounted () {
    this.initPage ()
  }
}
</script>

<style scoped>
  section {
    padding: 10px;
  }
  section.top {
    height: 100vh;
    background-image: linear-gradient( #243949 0%, #517fa4 100%);
    display: flex;
    align-items: center;
  }

  section.middle {
    background: #fff;
  }

  section.middle li {
    margin-bottom: 20px;
  }

  section.bottom {
    background: #222;
    height: 160px;
  }

  .preface {
    margin: 0 auto;
  }

  .preface li {
    color: #fff !important;
    margin-bottom: 20px;
    opacity: 0;
    text-align: center;
  }

  .describe h4 {
    font-weight: bold;
    color: orange;
    margin-bottom: 20px;
  }

  h5 {
    font-size: 0.8rem;
    text-align: center;
    margin: 10px;
  }

  .back-2 {
    background-image: url('../../static/img/2.jpg');
  }

  .back-3 {
    background-image: url('../../static/img/3.jpg');
  }

  .place-pic {
    position: relative;
    height: 320px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 0;
  }

  .active .place-pic {
    opacity: 1;
    transition: all 0.8s ease-in-out;
  }

  .place-describe {
    padding: 10px;
    background: #ECECEC;
    min-height: 200px;
  }


  .describe {
    font-size: 1rem;
    color: #222;
    opacity: 0;
    transform: translateY(25%);
    padding: 15px;
    text-align: center;
  }

  .active .describe {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.8s 1.2s ease-in-out;
  }

  .active.preface li:nth-child(1) {
    opacity: 1;
    transition: all 0s 0.8s ease-in-out;
  }

  .active.preface li:nth-child(2) {
    opacity: 1;
    transition: all 0.8s 0.8s ease-in-out;
  }

  .active.preface li:nth-child(3) {
    opacity: 1;
    transition: all 1.6s 0.8s ease-in-out;
  }

  .active.preface li:nth-child(4) {
    opacity: 1;
    transition: all 2.4s 0.8s ease-in-out;
  }

  .active.preface li:nth-child(5) {
    opacity: 1;
    transition: all 3.2s 0.8s ease-in-out;
  }
  .active.preface li:nth-child(6) {
    opacity: 1;
    transition: all 4s 0.8s ease-in-out;
  }
  .active.preface li:nth-child(7) {
    opacity: 1;
    transition: all 4.8s 0.8s ease-in-out;
  }
  .active.preface li:nth-child(8) {
    opacity: 1;
    transition: all 5.6s 0.8s ease-in-out;
  }
</style>
