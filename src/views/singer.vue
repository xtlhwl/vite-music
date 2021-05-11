/** Created by preference on 2021/05/10 AuthorName:Seven Email:xtlhcy@gmail.com **/
<template>
  <div class="singer">
    <list-view :singers="singers"></list-view>
  </div>
</template>
<script lang='ts'>
import { getArtist } from '@/api/singer'
import ListView from '@/components/listView.vue'
import { defineComponent, onMounted, ref, Ref } from 'vue'
export default defineComponent({
  components: {
    ListView
  },
  setup() {
    const singers = ref()
    getArtist().then((res) => {
      if (res.code == 200) {
        singers.value = res.list.artists
      }
    })

    return {
      singers
    }
  }
})
</script>
<style lang='less' scoped >
.singer {
}
</style>