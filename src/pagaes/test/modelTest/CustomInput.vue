<template>
  <div style="background:#ccc;height:50px;"></div>
  <h2>input 包装组件</h2>
  <!-- 
    :vakue 动态属性
    @input 给原生 DOM 绑定原生 DOM 事件
   -->
  <!--  eslint-disable-next-line vue/no-multiple-template-root -->
  <input type="text" :value="value" @input="$emit('input',$event.target.value)">
</template>

<script type="text/ecmascript-6">
export default {
  name:'CustomInput',
  props:['value']
}
</script>

<style>

</style>