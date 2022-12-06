<template>
    <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel) in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name : 'Carsousel',
  props : ['list'],
  watch:{
    list:{
      // 立即监听:不管你暑假有没有变化,上来立即监听一次
      // 为什么 watch 监听不了 list,因为这个数据从来没有发生变化
      immediate:true,
      handler(){
        console.log('立即监听')
        // 只能监听到暑假已经有了,但是 v-for 动态渲染结构我们还没办法确定,因此还是需要 nextTick
        this.$nextTick(()=>{
          //第一次书写swiper的时候：在mounted当中书写是不可以的，但是为什么现在这里可以啦！
          //第一次书写轮播图的时候，是在当前组件内部发请求、动态渲染解构【前台至少服务器数据需要回来】，因此当年的写法在这里不行
          //现在的这种写法为什么可以：因为请求是父组件发的，父组件通过props传递过来的，而且结构都已经有了的情况下执行mounted
          new Swiper(this.$refs.cur, {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true, //点击小球的时候也切换图片
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          })
        })
      }
    }
  }
}
</script>

<style scoped>

</style>