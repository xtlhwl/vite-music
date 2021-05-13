/** Created by preference on 2021/05/10 AuthorName:Seven Email:xtlhcy@gmail.com **/
<template>
  <div class="search">
    <div class="search-input-warrper">
      <search-box @query="searchEvent"></search-box>
      <div class="hot-title" v-show="!searchKeyWord.value">
        <div>
          <h4>热门搜索</h4>
          <ul class="hot-keys">
            <li class="hot-key" v-for="(item, index) in hotKeyList" :key="index">
              {{ item.searchWord }}
            </li>
          </ul>
        </div>
      </div>
      <div class="search-result">
        <suggest :searchKeyWord="searchKeyWord.value"></suggest>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
import SearchBox from '@/components/searchbox.vue'
import Suggest from '@/components/suggest.vue'
import { hotDetail } from '@/api/search.js'
export default defineComponent({
  name: 'Search',
  components: {
    SearchBox,
    Suggest
  },
  setup() {
    const hotKeyList = ref()
    hotDetail().then((res) => {
      if (res.code == 200) {
        hotKeyList.value = res.data
      }
    })
    let searchKeyWord = reactive({
      value: ''
    })

    const searchEvent = (keyWord: '') => {
      searchKeyWord.value = keyWord
    }
    return {
      hotKeyList,
      searchEvent,
      searchKeyWord
    }
  }
})
</script>
<style lang='less' scoped >
.search {
  .search-input-warrper {
    width: 90%;
    margin: 0 auto;
    .hot-title {
      margin-top: 3vh;
      color: @color-text-d;
    }
    .search-result {
      position: inherit;
      width: 100%;
      margin-top: 20px;
      bottom: 0;
    }
    .hot-keys {
      margin-top: 10px;
      .hot-key {
        display: inline-block;
        padding: 5px 10px;
        margin: 0 20px 10px 0;
        border-radius: 6px;
        background: @color-highlight-background;
        font-size: @font-size-medium;
        color: @color-text-d;
      }
    }
  }
}
</style>