<template>
  <div>
    <!-- 可以巧妙的利用 a 标签实现按钮带有提示功能 -->
    <a :title="title"></a>
    <!-- 下面的写法必须用 v-bind ,不能用 : ,v-on不能用 @ 替换-->
    <el-button v-bind="$attrs" v-on="$listeners"></el-button>
  </div>
</template>

<script>
export default {
  name:'HintButton',
  props:['title'],
  mounted(){
    // $attrs属于组件的属性.可以获取到父组件传递过来的 props 属性
    // 对于子组件而言,父组件的数据可以利用 props 接受,但是需要注意,如果子组件通过 props 结束的属性,再 $attrs 属性当中是获取不动的
    console.log(this.$attrs)
    // $listeners,他也是祖先实例自身的一个属性,她可以获取到父组件给子组件传递自定义事件
    console.log(this.$listeners)
  }
}
</script>

<style>

</style>