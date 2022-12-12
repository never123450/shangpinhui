<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div>自定义带 Hover 提示的按钮</div>
  <!-- 
    当用户在使用我们封装的按钮的时候,需要想 HintButton 组件传递相应的参数 
    @click,底下这里代表的是自定义事件
  -->
  <hint-button type="success" icon="el-icon-delete" size="mini" title="提示按钮" @click="handler"><hint-button/>
</template>

<script>
import HintButton from './HintButton.vue'
export default {
  name:'AttrsListenersTest',
  methods:{
    handler(){
      alert(666)
    }
  },
  components:{
    HintButton
  }
}
</script>
