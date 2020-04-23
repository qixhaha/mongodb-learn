<template>
  <div class="m-menu">
    <!-- 导航部分 -->
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menu" :key="index" @mouseenter="enter">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow" />
      </dd>
    </dl>
    <!-- 显示弹窗部门 -->
    <div class="detail" @mouseenter="sover" @mouseleave="sout" v-if="kind">
      <div v-for="(item,idx) in curdetail.child" :key="idx">
        <h4>{{item.title}}</h4>
        <span v-for="v in item.child" :key="v">{{v}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      curdetail: {},
      kind: "",
      menu: [
        {
          type: "food",
          name: "美食",
          child: [
            {
              title: "美食",
              child: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "takeout",
          name: "外卖",
          child: [
            {
              title: "外卖",
              child: ["美团外卖"]
            }
          ]
        },
        {
          type: "hotel",
          name: "酒店",
          child: [
            {
              title: "酒店星级",
              child: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
            }
          ]
        }
      ]
    };
  },
  watch: {
    kind() {
      this.curdetail = this.menu.filter((item, index) => {
        return item.type == this.kind;
      })[0];
    }
  },
  methods: {
    //   进入菜单
    enter(e) {
      this.kind = e.target.querySelector("i").className;
    //   console.log(this.kind);
	},
	// 鼠标离开
	mouseleave(){
		let self = this;
		self._timer =  setTimeout(()=>{
			self.kind = ''
		})
		// this.kind = ''
	},
	// 鼠标进入
	sover(){
		clearTimeout(this._timer)
	},
	// 鼠标离开
	sout(){
		this.kind = ''
	}
  }
};
</script>
<style lang="scss">
</style>