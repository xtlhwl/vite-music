/** Created by preference on 2021/05/07 AuthorName:Seven Email:xtlhcy@gmail.com **/
<template>
  <div class="home">
    <div class="home-content">
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item
          v-for="(item, index) in userInfo"
          autoplay="“5000”"
          :key="index"
        >
          <img :src="item.imageUrl" alt="" srcset="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="home-list-content">
      <div class="home-content-title">精选歌曲</div>
      <div class="home-content-ist">
        <ul>
          <li v-for="(item, index) in songList" :key="index">
            <img :src="item.picUrl" :alt="item.name" v-lazy="item.picUrl" />
            <div>
              <span class="name">{{ item.name }}</span>
              <!-- <span class="desc">{{ item.description }}</span> -->
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from 'vue'
import { getBanner, getPlaylist } from '@/api/home.js'
export default defineComponent({
  name: 'Home',
  create() {},
  mounted() {
    console.log('触发1')
  },
  setup(props) {
    // 轮播图内容获取
    const userInfo: Ref = ref(null)
    const songList: Ref = ref({})
    onMounted(() => {
      getBanner().then((res: Object) => {
        if (res.code == 200) {
          userInfo.value = res.banners
          console.log(userInfo, res.banners)
        }
      })

      getPlaylist().then((res: {}) => {
        if (res.code == 200) {
          songList.value = res.result
          console.log(songList)
        }
      })
    })
    return {
      userInfo,
      songList
    }
  }
})
</script>
<style lang="less" scoped>
.home {
  //   position: fixed;
  //   width: 100%;
  //   top: 100%;
  //   bottom: 0;
  .home-content {
    // height: 100%;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 10px;
    width: 95%;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    // line-height: 150px;
    text-align: center;
    // background-color: #39a9ed;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .home-list-content {
    height: 100%;
    width: 100%;
    .home-content-title {
      height: 16vw;
      line-height: 16vw;
      text-align: center;
      font-size: 14px;
      color: #ffcd32;
    }
    .home-content-ist {
      width: 90%;
      margin: 0 auto;
      display: flex;

      img {
        width: 20vw;
        height: 20vw;
        border-radius: 3px;
        margin-right: 10px;
      }
      li {
        margin-top: 2vh;
        display: flex;
        .name {
          color: @color-text;
          width: 70vw;
          word-break: break-all;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        // .desc {
        //   color: @color-text-l;
        //   width: 70vw;
        // }
      }
    }
  }
}
</style>
