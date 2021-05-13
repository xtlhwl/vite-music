<template>
  <div class="topListView">
    <div ref="wrapper">
      <ul>
        <li class="singer-wrraper" v-for="item in toplist" :key="item.id">
          <div class="singer">
            <img :src="item.coverImgUrl" class="coverimg" />
            <ul class="song_lists">
              <li :key="i" v-for="(v, i) in item.list" class="song">
                <span class="song_name">
                  {{ i + 1 }} {{ v.name }}-{{ v.ar[0].name }}</span
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang='ts'>
import { computed, defineComponent, onMounted, ref, Ref, watch, watchEffect } from 'vue'
import BetterScroll from 'better-scroll'
import BScroll from 'better-scroll'
import Singer from '@/views/singer.vue'
export default defineComponent({
  components: {},
  props: {
    toplist: Array
  },
  setup(props, ctx) {
    const toplist = ref()
    watch(
      () => props.toplist,
      (list) => {
        toplist.value = list
        console.log(list, toplist)
      }
    )
    // const bs: Ref = ref(null)
    // const wrapper = ref()
    // bs.value = new BScroll(wrapper.value, {
    //   probeType: 3,
    //   click: true
    // })
    // bs.value.on('scrollStart', () => {
    //   console.log('scrollStart-')
    // })
    // bs.value.on('scroll', ({ y }) => {
    //   console.log('scrolling-')
    // })
    // bs.value.on('scrollEnd', (pos) => {
    //   console.log(pos)
    // })
    return {
      toplist
    }
  }
})
</script>
<style lang='less' scoped >
.topListView {
  padding: 0 8vw;
  margin-bottom: 5vw;
  .singer-wrraper {
    margin-top: 20px;
    // line-height: 26vw;
  }
  .singer {
    height: 25vw;
    width: 100%;
    margin: 0 auto;
    font-size: 14px;
    display: flex;
    align-items: center;
    background-color: @color-highlight-background;
    border-radius: 3px;
    box-shadow: 0px 0px 1px 2px @color-highlight-background;
    .coverimg {
      width: 26vw;
      height: 26vw;
      border-radius: 3px;
      box-shadow: -1px -1px 10px 2px @color-highlight-background;
    }
    // span {
    //   font-size: 14px;
    //   color: @color-text;
    //   margin-left: 5vw;
    // }
  }
  .song_lists {
    height: 24vw;
    width: 60%;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .song {
      height: 6vw;
    }
    .song_name {
      font-size: 12px;
      color: @color-text-l;
      margin-left: 5vw;
      display: block;
      height: 6vw;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>