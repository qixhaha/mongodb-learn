<template>
  <section class="m-istyle">
    <dl>
      <dt>有格调</dt>
      <dd :class="{active:kind=='all'}" key="景点">全部</dd>
      <dd :class="{active:kind==='part'}" kind="part" keyword="美食">约会聚餐</dd>
      <dd :class="{active:kind==='spa'}" kind="spa" keyword="丽人">丽人SPA</dd>
      <dd :class="{active:kind==='movie'}" kind="movie" keyword="电影">电影演出</dd>
      <dd :class="{active:kind==='travel'}" kind="travel" keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in cur.children" :key="index">
        <el-card shadow="never">
          <img :src="item.img" alt />
          <ul class="cbody">
            <li class="title">{{item.title}}</li>
            <li class="pos">
              <span>{{ item.pos }}</span>
            </li>
            <li class="price">
              ￥
              <em>{{ item.price }}</em>
              <span>/起</span>
            </li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
    //   cur: [],
      kind: "all",
      list: {
        all: {
          type: "all",
          name: "全部",
          children: [
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            }
          ]
        },
        spa: {
          type: "spa",
          name: "丽人",
          children: [
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            }
          ]
        },
        movie: {
          type: "movie",
          name: "电影",
          children: [
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            }
          ]
        },
        travel: {
          type: "travel",
          name: "旅游",
          children: [
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            },
            {
              title: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              pos: "地铁附属医院站 舒适大窗阳光房 清爽简约",
              img:
                "//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg@214w_120h_1e_1c",
              price: 10
            }
          ]
        }
      }
    };
  },
  computed: {
    cur() {
      return this.list[this.kind];
    }
  }
};
</script>
<style lang="scss">
@import '@/assets/css/index/artistic.scss'
</style>