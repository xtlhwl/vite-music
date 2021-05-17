/** Created by preference on 2021/05/13 AuthorName:Seven Email:xtlhcy@gmail.com **/
<template>
  <div class="player" v-if="playList.length">
    <transition name="normal" v-show="showNormal">
      <div class="normal-player">
        <div class="background">
          <img :src="picUrl" class="backgound_img" width="100%" height="100%" />
        </div>
        <div class="header-top">
          <img src="@/assets/images/down.png" @click="backPut" />
          <div class="header-top-songs">{{ songDetail.name }}</div>
        </div>
        <div class="middle">
          <div class="middle-l">
            <div class="cd-wrapper">
              <div class="cd play">
                <img class="image" :src="picUrl" />
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-btn">
          <div class="like-btn">
            <img src="@/assets/images/like.png" />
          </div>
          <div class="last-btn">
            <img src="@/assets/images/last.png" />
          </div>
          <div class="play_stop-btn" @click="playSong">
            <img v-show="playing" src="@/assets/images/stop.png" />
            <img v-show="!playing" src="@/assets/images/play.png" />
          </div>
          <div class="next-btn">
            <img src="@/assets/images/next.png" />
          </div>
          <div class="song-lists">
            <img src="@/assets/images/songLists.png" />
          </div>
        </div>
      </div>
    </transition>
    <transition name="mini">
      <div class="mini-play" v-show="!showNormal">
        <div class="icon" @click="backPut">
          <img :src="picUrl" class="avtar play" />
        </div>
        <div class="song-mess" @click="backPut">
          <h4>{{ songDetail.name }}</h4>
          <p class="song-singer">{{ singer }}</p>
        </div>
        <div class="play_btn">
          <img src="@/assets/images/play.png" />
          <!-- <img src="@/assets/images/stop.png" /> -->
        </div>
        <div class="control">
          <img src="@/assets/images/songLists.png" />
        </div>
      </div>
    </transition>
    <audio ref="audio" :src="songurl"></audio>
  </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
import { topDetail, songUrl } from '@/api/player.js'
export default defineComponent({
  components: {},
  setup() {
    let songDetail = ref({})
    let picUrl = ref('')
    let singer = ref('')
    let playList = ref([])
    const showNormal = ref(true)
    topDetail().then((res) => {
      if (res.code === 200) {
        songDetail.value = res.songs[0]

        picUrl.value = res.songs[0].al.picUrl
        singer.value = res.songs[0].ar[0].name
        console.log(songDetail, picUrl)
        getSongList()
      }
    })
    //缩放
    const backPut = () => {
      showNormal.value = !showNormal.value
    }
    // 获取歌曲链接
    let songurl = ref('')
    const getSongList = () => {
      songUrl().then((res) => {
        if (res.code == 200) {
          songurl.value = res.data[0].url
        }
      })
    }
    // 播放
    let audio = ref(null)
    let playing = ref(false)
    const playSong = () => {
      playing.value = !playing.value
      if (playing.value) {
        audio.value.play()
      } else {
        audio.value.pause()
      }
    }
    return {
      songDetail,
      singer,
      picUrl,
      backPut,
      showNormal,
      songurl,
      audio,
      playSong,
      playing,
      playList
    }
  }
})
</script>
<style lang='less' scoped >
.player {
  background-color: @color-play-background;
  .normal-player {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    border: 0;
    z-index: 150;
    height: 100%;
    width: 100%;
    background: @color-background;
    .background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.6;
      filter: blur(20px);
      .backgound_img {
        width: 100%;
        height: 100%;
      }
    }
    .middle {
      position: fixed;
      width: 100%;
      top: 10vh;
      bottom: 20vh;
      .middle-l {
        width: 100%;
        height: 45vh;
        display: flex;
        justify-content: center;
        .cd-wrapper {
          width: 80vw;
          height: 80vw;
          .cd {
            width: 100%;
            height: 100%;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border: 10px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;

            &.play {
              animation: rotate 20s linear infinite;
            }

            .image {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
        }
      }
    }
    .bottom-btn {
      width: 100%;
      position: absolute;
      bottom: 50px;
      height: 8vh;
      display: flex;
      justify-content: space-around;
      img {
        width: 12vw;
        height: 12vw;
      }
      .like-btn {
        img {
          margin-top: 3px;
          width: 10vw;
          height: 10vw;
        }
      }
      //   .song-lists {
      //     position: absolute;
      //   }
    }
    .header-top {
      //   height: 5vh;
      display: flex;
      justify-content: center;
      img {
        width: 8vw;
        position: absolute;
        left: 15px;
        top: 1vh;
      }
      .header-top-songs {
        font-size: @font-size-large-x;
        margin-top: 1.5vh;
        color: @color-text-ll;
      }
    }
  }
  .mini-play {
    height: 8vh;
    display: flex;
    align-items: center;
    .icon {
      margin-left: 10px;
      .avtar {
        width: 13vw;
        height: 13vw;
        border-radius: 50%;
        &.play {
          animation: rotate 20s linear infinite;
        }
      }
    }
    .song-mess {
      margin-left: 10px;
      color: @color-text-l;
      .song-singer {
        margin-top: 5px;
        font-size: @font-size-small-s;
      }
    }
    .play_btn {
      width: 10vw;
      height: 10vw;
      position: absolute;
      right: 15vw;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .control {
      width: 10vw;
      height: 10vw;
      position: absolute;
      right: 2vw;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  &.normal-enter-active,
  &.normal-leave-active {
    transition: all 0.4s;
    .header-top,
    .bottom-btn {
      transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
    }
  }
  &.normal-enter,
  &.normal-leave-to {
    opacity: 0;
    .header-top {
      transform: translate3d(0, -100px, 0);
    }
  }
  //   .bottom {
  //     transform: translate3d(0, 100px, 0);
  //   }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>