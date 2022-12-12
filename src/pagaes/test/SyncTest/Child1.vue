<template>
    <div style="background:#ccc;height:50px;">
      <span>小明每次花 100 元</span>
      <button @click="$emit('update:money',money-100)">花钱</button>
      爸爸还剩{{money}}
    </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Child1',
  props:['money']
}
</script>

<style>

</style>