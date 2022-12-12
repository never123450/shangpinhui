export default{
  // 对外暴露的对象,可以防止组件的重复 js 业务
  methods:{
    // 女儿小明给爸爸的回调函数
    giveMoney(money){
      // 女儿小明减少 50
      this.money -= money
      // 需要再子组件获取到父组件,爸爸需要加上 50
      // 可以通过 this.$parent 获取到父组件
      this.$parent.money += money
    }
  }
}