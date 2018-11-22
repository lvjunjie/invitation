<template>
  <div class="main">
    <transition name="fade" v-if="isShowHome">
      <div class="home" @click.prevent="showHead">
        <a :class="{unfold:isUnfold}"><img src="../../static/img/head2.jpg"/></a>
        <div class="explore">
            <i class="fa fa-angle-double-down" style="font-size: 2rem;color: #fff"  @click="showHome"></i>
        </div>
      </div>
    </transition>
    <div class="work-space">
        <work-space :post = 'isShowHome'></work-space>
    </div>
  </div>

</template>

<script>
import WorkSpace from './workSpace'
export default {
  name: 'home',
  components: {WorkSpace},
  data () {
    return {
      isShowHome: true,
      isUnfold: false,
      memo: 'JUST FOR YOU'
    }
  },
  methods: {
    showHome () {
      this.isShowHome = false
      this.removeUnScroll()
    },
    showHead () {
      this.isUnfold = !this.isUnfold
    },
    unScroll () {
      const top = $(document).scrollTop()
      $(document).on('scroll.unable', function (e) {
        $(document).scrollTop(top)
      })
    },
    removeUnScroll () {
      $(document).unbind('scroll.unable')
    },
    intHome () {
      const LEVELS = 20
      const BLUR = 20
      const LENGTH = 20// %, 50% -
      const ROTDELAY = 0.05// s
      const ROTDUR = 0.3
      const ROT = 180// deg

      for (const elImg of Array.from(document.querySelectorAll('img'))) {
        for (let i = 0; i < LEVELS; i++) {
          const ratio = i / (LEVELS - 1)
          const clone = elImg.cloneNode()
          const length = 50 - LENGTH * ratio
          clone.style.clipPath = `ellipse(${length}% ${length}% at 50% 50%)`
          clone.style.filter = `blur(${(1 - ratio) * BLUR}px)`
          clone.style.transition = `all ${ROTDUR}s ${i * ROTDELAY}s`
          setTimeout(() => {
            clone.style.transform = `rotate(${(1 - ratio) * ROT}deg)`
          }, 10)

          elImg.parentNode.appendChild(clone)
        }
      }

      this.unScroll()
    }
  },
  mounted () {
    this.intHome()
  }
}
</script>

<style scoped>
  .home {
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background:#9e1421;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

  a {
    display:block;
    position:relative;
    width:50vmin;height:50vmin;
  }

  a img {
    display:block;
    position:absolute; top:0; left:0;
    width:100%;
    height:100%;
    -o-object-fit:cover;
    object-fit:cover;
    border-radius:50%;
    -webkit-filter:blur(20px);
    filter:blur(20px);
  }

  a.unfold img{
    transition:all 0.3s !important;
    -webkit-transform:rotate(0) !important;
    transform:rotate(0) !important;
    -webkit-filter:blur(0) !important;
    filter:blur(0) !important;
  }

/*  a:hover img {
    transition:all 0.3s !important;
    -webkit-transform:rotate(0) !important;
    transform:rotate(0) !important;
    -webkit-filter:blur(0) !important;
    filter:blur(0) !important;
  }*/

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .explore {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

</style>
