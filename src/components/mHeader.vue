/** Created by preference on 2021/05/10 AuthorName:Seven Email:xtlhcy@gmail.com **/
<template>
  <div class="mHeader">
    <div>Seven</div>
    <div class="switch_model" @click="switchFun">
      <img v-show="switchModel" src="@/assets/images/light.png" />
      <img v-show="!switchModel" src="@/assets/images/dark.png" />
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {},
  setup(props) {
    let switchModel = ref(true)
    const switchFun = () => {
      switchModel.value = !switchModel.value
    }
    return {
      switchModel,
      switchFun
    }
  }
})
</script>
<style lang='less' scoped >
.mHeader {
  height: 5vh;
  text-align: center;
  background-color: @color-background;
  line-height: 5vh;
  color: @color-theme;
  font-size: 18px;
  display: flex;
  justify-content: center;
  .switch_model {
    position: absolute;
    right: 20px;
    top: 1vh;
    img {
      width: 25px;
    }
  }
}
</style>