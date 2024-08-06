<template>
  <div>
    <div class="wrapper">
      <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide v-for="item in swiperList" :key="item.id">
          <img :src="item.url" class="swiper-img">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        autoplay: 2000,
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList:[
        {
        "id": "0001",
        "url": "http://localhost:8081/gyt/image/u208.png"
        },
        {
          "id": "0002",
          "url": "http://localhost:8081/gyt/image/u210.png"
        },
        ]
    }
  }
}
</script>

<style lang="stylus" scoped>
/* fix swiper-pagination color */
/* 样式穿透 */
.wrapper >>> .swiper-pagination-bullet
  background: #fff !important
.wrapper
  overflow hidden
  width 100%
  background: #eee;
  .swiper-img
    width 100%
    height 158.5px
</style>
