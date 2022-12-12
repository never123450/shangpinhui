<template>
  <div>
    <h3>儿子小明:有存款{{money}}</h3>
    <button @click="giveMoney(50)">给 baba 钱:50</button>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import myMixin from '@pages/test/ChildrenParentTest/myMixin/myMixin'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name : 'Son',
  mixins:['myMixin'],
  data(){
    return {
      money: 30000
    }
  },
  methods:{
    // 放到 miXin 当中
    // 儿子小明给爸爸的回调函数
    // giveMoney(money){
    //   // 儿子小明减少 50
    //   this.money -= money
    //   // 需要再子组件获取到父组件,爸爸需要加上 50
    //   // 可以通过 this.$parent 获取到父组件
    //   this.$parent.money += money
    // }
  }
}
</script>

<style>

</style>