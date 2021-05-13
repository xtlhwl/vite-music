/** Created by preference on 2021/05/12 AuthorName:Seven Email:xtlhcy@gmail.com **/
<template>
  <div class="suggest">
    <ul>
      <li v-for="(s, i) in searchList.value" :key="i" class="item">{{ s.name }}</li>
    </ul>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, watch, watchEffect } from 'vue'
import { cloudsearch } from '@/api/search'
export default defineComponent({
  components: {},
  props: {
    searchKeyWord: String
  },
  setup(props) {
    let searchList = reactive({
      value: []
    })
    let timer
    watchEffect(() => {
      console.log(props.searchKeyWord, '测试')
      if (props.searchKeyWord) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          cloudsearch({
            keywords: props.searchKeyWord
          }).then((res) => {
            if (res.code === 200) {
              searchList.value = res.result.songs
            }
          })
        }, 200)
      } else {
        searchList.value = []
      }
    })
    return {
      searchList
    }
  }
})
</script>
<style lang='less' scoped >
.suggest {
  .item {
    color: @color-text-d;
    font-size: @font-size-medium-x;
    height: 4vh;
  }
}
</style>