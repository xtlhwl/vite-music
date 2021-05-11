/** Created by preference on 2021/05/11 AuthorName:Seven Email:xtlhcy@gmail.com **/
<template>
  <div class="listView">
    <div ref="wrapper">
      <ul>
        <li v-for="item in singers" :key="item.id">
          <div class="singer">
            <img :src="item.picUrl" alt="" srcset="" />
            <span>{{ item.name }}</span>
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
    singers: Array
  },
  mounted() {
    console.log(this.singers)
  },
  setup(props, ctx) {
    const singers = ref()

    watch(
      () => props.singers,
      (singer) => {
        singers.value = singer
        console.log(singer, singers)
      }
    )
    const bs: Ref = ref(null)
    const wrapper = ref()
    bs.value = new BScroll(wrapper.value, {
      probeType: 3,
      click: true
    })
    bs.value.on('scrollStart', () => {
      console.log('scrollStart-')
    })
    bs.value.on('scroll', ({ y }) => {
      console.log('scrolling-')
    })
    bs.value.on('scrollEnd', (pos) => {
      console.log(pos)
    })
    return {
      singers
    }
  }
})
</script>
<style lang='less' scoped >
.listView {
  padding: 0 8vw;
  .singer {
    height: 20vw;
    font-size: 14px;
    line-height: 20vw;
    display: flex;
    align-items: center;
    img {
      width: 14vw;
      height: 14vw;
      border-radius: 50%;
    }
    span {
      font-size: 14px;
      color: @color-text;
      margin-left: 5vw;
    }
  }
}
</style>