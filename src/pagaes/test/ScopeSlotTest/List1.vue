<template>
  <div>
    <ul>
      <li v-for="(item,index) in todos" :key="index">
      <!-- 作用域插槽 -->
      <slot :todo="item" :$index="index"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'List1',
  props:{
    todos: Array
  }
}
</script>

<style>

</style>