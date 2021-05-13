<template>
  <div class="main">
    <m-header class="header-all"></m-header>
    <m-tab class="tab-all"></m-tab>
    <keep-alive>
      <router-view
        class="contetn-all"
        v-if="$route.meta.keepAlive"
        v-slot="{ Component }"
      >
        <component :is="Component" />
      </router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MHeader from '@/components/mHeader.vue'
import MTab from '@/components/mTab.vue'
import Player from '@/components/player.vue'
export default defineComponent({
  name: 'App',
  components: {
    MHeader,
    MTab,
    Player
  },
  setup(props) {}
})
</script>

<style lang='less' >
#app {
  //   text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background-color: @color-background;
  height: 100vh;

  .my-enter,
  .my-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }

  .my-enter-top,
  .my-leave {
    opacity: 1;
    transform: translateX(0px);
  }

  .my-enter-active,
  .my-leave-active {
    transform: all 3s ease;
  }
}

.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .header-all {
    width: 100%;
    height: 6vh;
  }
  .tab-all {
    width: 100%;
    height: 6vh;
  }
  .contetn-all {
    flex-grow: 1;
    overflow-y: auto;
    height: 100%;
  }
}

// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.2s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
</style>
