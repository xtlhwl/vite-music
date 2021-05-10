
<template>
  <div class="mTab">
    <router-link tag="div" class="tab-item" :to="{ name: 'Home' }">
      <span class="tab-btn">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" :to="{ name: 'Singer' }">
      <span class="tab-btn">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" :to="{ name: 'Rank' }">
      <span class="tab-btn">排行榜</span>
    </router-link>
    <router-link tag="div" class="tab-item" :to="{ name: 'Search' }">
      <span class="tab-btn">搜索</span>
    </router-link>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  components: {}
})
</script>
<style lang='less' scoped >
// @import '~/common/style/variable.less';
.mTab {
  display: flex;
  justify-content: space-around;
  line-height: 6vh;
  font-size: @font-size-medium-x;
  background-color: @color-background;
  .tab-btn {
    color: rgba(255, 255, 255, 0.5);
  }
}
.tab-item {
  flex: 1;
  text-align: center;
  &.router-link-active {
    .tab-btn {
      color: @color-theme;
      border-bottom: 2px solid @color-theme;
      padding-bottom: 5px;
    }
  }
}
</style>s