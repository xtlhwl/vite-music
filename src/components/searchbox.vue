/** Created by preference on 2021/05/11 AuthorName:Seven Email:xtlhcy@gmail.com **/
<template>
  <div class="searchbox">
    <div class="search-context">
      <input type="text" placeholder="搜索歌曲、歌手" v-model="searchKey.value" />
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, watchEffect, watch } from 'vue'
export default defineComponent({
  components: {},
  setup(props, { attrs, slots, emit }) {
    let searchKey = reactive({
      value: ''
    })
    watch(searchKey, (newValue, oldValue) => {
      console.log(newValue, oldValue)
      emit('query', searchKey.value)
    })
    return {
      searchKey
    }
  }
})
</script>
<style lang='less' scoped >
.searchbox {
  display: flex;
  justify-content: center;

  .search-context {
    width: 100%;

    background-color: @color-highlight-background;
    height: 10vw;
    display: flex;
    justify-self: center;
    align-items: center;
    margin-top: 1vh;
    border-radius: 6px;
    input {
      width: 80%;
      height: 6vw;
      margin: 0 auto;
      background-color: @color-highlight-background;
      border: 1px solid @color-highlight-background;
      color: #fff;
    }
  }
}
</style>