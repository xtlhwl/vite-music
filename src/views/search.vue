/** Created by preference on 2021/05/10 AuthorName:Seven Email:xtlhcy@gmail.com **/
<template>
  <div class="search">
    <div class="search-input-warrper">
      <search-box></search-box>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import SearchBox from '@/components/searchbox.vue'
export default defineComponent({
  name: 'Search',
  components: {
    SearchBox
  }
})
</script>
<style lang='less' scoped >
.search {
}
</style>