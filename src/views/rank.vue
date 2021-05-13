/** Created by preference on 2021/05/10 AuthorName:Seven Email:xtlhcy@gmail.com **/
<template>
  <div class="rank">
    <top-list-view :toplist="toplist"></top-list-view>
  </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
import { topList, playlistDetail } from '@/api/rank'
import TopListView from '@/components/topListView.vue'
export default defineComponent({
  name: 'Rank',
  components: {
    TopListView
  },
  mounted() {
    console.log('触发222')
  },
  setup() {
    let toplist = ref()
    onMounted(() => {
      console.log('触发222222')
      topList().then(function (res: {}) {
        if (res.code === 200) {
          let index = 0
          for (let i = 0; i < res.list.length; i++) {
            const r = res.list[i]
            playlistDetail({
              id: r.id
            }).then((k) => {
              if (k.code == 200) {
                // 歌曲列表
                r.list = k.playlist.tracks.splice(0, 3)
                index++
                if (index == res.list.length) {
                  toplist.value = res.list
                }
              }
            })
          }

          //   res.list.forEach(function (r, i) {})
        }
      })
    })
    return {
      toplist
    }
  }
})
</script>
<style lang='less' scoped >
.rank {
}
.rank::-webkit-scrollbar {
  display: none;
}
</style>