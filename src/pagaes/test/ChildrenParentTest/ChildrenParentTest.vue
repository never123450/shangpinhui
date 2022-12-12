<template>
  <div>
    <h2>baba 有存款:{{money}}</h2>
    <button @click="jieQianFromXM(100)">找小明借钱 100</button>
    <button @click="jieQianFromXH(150)">找小红借钱 150</button>
    <button @click="jieQianFromALL(200)">找所有孩子借钱 200</button>
    <br>
    <son ref="xm"/>
    <br>
    <daughter ref="xh"/>
  </div>
</template>

<script>
import Son from './Son.vue'
import Daughter from './Daughter.vue'
export default {
  name:'ChildernParentTest',
  data () {
    return {
      money : 1000
    }
  },
  methods: {
    // 向儿子小明借钱
    jieQianFromXM(money) {
      // 父组件的钱+100
      this.money += money
      // $ref 可以获取到真实 DOM 节点,当然也可以获取子组件标签,操作子组件的数据与方法
      this.$refs.xm.money -= money
    },
    jieQianFromXH(money) {
      // 父组件的钱+150
      this.money += money
      // $ref 可以获取到真实 DOM 节点,当然也可以获取子组件标签,操作子组件的数据与方法
      this.$refs.xh.money -= money
    },
    jieQianFromALL(money) {
       // 父组件的钱+200
      this.money += money
      // 组件实例自身拥有一个属性 $children,可以获取到当前组件中所有的子组件
      this.$children.forEach(item=>{
        item.money -= money
      })
      // 切记别这么写,如果子组件过多,第 0 项可能不是小明
      // this.$children[0].money-=200
    }
  },
  components: {
    Son,
    Daughter
  }
}
</script>

<style>

</style>