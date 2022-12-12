<template>
  <div>
    小明的爸爸现在有 {{money}}元
  </div>
  <h2>不使用 sync 修改符</h2>
  <!-- 
    :money 父组件给子组件传递 props
    @update:money 给子组件绑定的自定义事件只不过名字叫做 update:money
    目前现在这种操作,其实和 v-model 相似,可以实现父子组件数据同步
   -->
  <child-1 :money="money" @update:money="money=$event"/>
  
  <h2>使用 sync 修改符</h2>
  <!-- 
    :money.sync 
    1:父组件给字符串传递 props money
    2:给当前子组件绑定了一个自定义事件,而且事件名称即为 update:money
   -->
  <child-2 :money.sync = "money"/>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <br/>
</template>

<script>
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
export default {
  name:'SyncTest',
  data(){
    return{
      money:10000
    }
  },
    components:{
      Child1,
      Child2
    }
}
</script>

<style>

</style>