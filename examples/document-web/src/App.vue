<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { P5CreateCrowd } from 'p5-ui';
import navTop from './components/navTop.vue'
import leftCtn from './views/leftCtn.vue'



const router = useRouter()
const onHandleClick = (url) => {
  router.replace(url)
}

const show_left = ref(true)

onBeforeMount(() => {
  P5CreateCrowd({ loop: false, resize: true, fixed: true, step: 4 })
})


window.addEventListener('resize', (ev) => {
  if (document.body.clientWidth < 1000) {
    show_left.value = false
  }
  else {
    show_left.value = true
  }
})
window.addEventListener('load', (ev) => {
  if (document.body.clientWidth < 1000) {
    show_left.value = false
  }
  else {
    show_left.value = true
  }
})
</script>

<template>
  <navTop />

  <div class="main-ctn">
    <leftCtn @handleClick="onHandleClick" v-show="show_left" />
    <!-- <p5-divider direction="vertical" style="height: 300px;"></p5-divider> -->
    <div class="right-ctn">
      <router-view></router-view>
    </div>
  </div>

  <p5-backTop style="z-index: 99;" :right="160" :scroll_height="100"></p5-backTop>
</template>

<style>
.intro-bg {
  background-image: url(./assets/images/bg1.png);
  background-size: cover;
}

.onhover {
  position: relative;
  z-index: 1;
}

.onhover::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.onhover:hover::before {
  background: gray;
  animation: skewBg 1s ease-out infinite;
}

@keyframes skewBg {
  0% {
    top: 6%;
    transform: skew(-10deg, -2deg) scale(0.9);
  }

  20% {
    top: 3%;
    transform: skew(35deg, 4deg) scale(0.9);
  }

  40% {
    top: -2%;
    transform: skew(-20deg, -2deg) scale(0.95);
  }

  60% {
    top: -4%;
    transform: skew(20deg, 2deg) scale(1);
  }

  80% {
    top: 3%;
    transform: skew(-25deg, -4deg) scale(0.94);
  }

  100% {
    top: 6%;
    transform: skew(-10deg, -2deg) scale(0.9);
  }
}

.p5-noti-ctn {
  z-index: 99;
}

html,
body {
  padding: 0;
  margin: 0;
  background: url(./assets/images/bg.png);
  background-color: black;

  display: flex;
  justify-content: center;
}

.main-ctn {
  width: 80vw;
  margin-top: 120px;
  display: flex;
  justify-content: space-around;
  padding: 0 0 40px 0;
  position: relative;
}


.right-ctn {
  width: 60vw;
  background: rgb(255, 255, 255, 0.8);
  padding: 20px 20px;
}

.selected_btn {
  display: inline-block;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: white;
}

.title {
  margin-top: 40px;
}


::-webkit-scrollbar {
  background-color: transparent;
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: white;
}

::-webkit-scrollbar-corner {
  display: none;
}
</style>
