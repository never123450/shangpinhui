<template>
  <div>
    <h2>深入 v-model</h2>
    <input type="text" v-model="msg">
    <span>{{msg}}</span>
    <br/>
    <h2>v-model的实现原理(vue2)</h2>
    <!--
      原生 DOM 中是有oninput事件,他经常结合表单元素一起使用.当表单元素文本内容发生变化的时候就好发出一次回调
      vue2:可以通过 value 与 input 事件实现 v-model 的功能
    -->
    <input type="text" :value="msg" @input="msg = $event.target.value">
    <span>{{msg}}</span>


    <!--
      深入学习 v-model:实现父子组件数据同步(父子组件通信)
      @input 并非原生的 input 事件,是自定义事件
    -->
    <custom-input :value="msg" @input="msg = $event"/>
    <!-- 简化成如下 -->
    <custom-input v-model="msg"/>
  </div>
</template>

<script>
import CustomInput from './CustomInput.vue'
export default {
  name:'ModelTest',
  components:{
    CustomInput
  },
  data(){
    return {
      msg : "玩玩玩玩"
    }
  }
}
</script>

<style>

</style>