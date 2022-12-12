<template>
  <div>
    <h3>女儿小红:有存款{{money}}</h3>
    <button @click="giveMoney(100)">给 baba 钱: 150</button>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import myMixin from '@pages/test/ChildrenParentTest/myMixin/myMixin'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name : 'Daughter',
  mixins:['myMixin'],
  data(){
    return {
      money: 30000
    }
  },
}
</script>

<style>

</style>