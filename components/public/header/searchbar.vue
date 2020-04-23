<template>
  <!-- 搜索组件 -->
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <!-- 搜索框 -->
        <div class="wrapper">
          <el-input v-model="search" placeholder="搜索商家或者地点" @input="input" @focus="focus" @blur="blur"/>
          <button class="el-button el-button--primary">
            <i class="el-icon-search" />
          </button>
		  <!-- 热门搜索  点击搜索框的时候为热门搜索-->
		<dl class="hotPlace" v-if="isHotPlace">
			<dt>热门搜索</dt>
			<dd v-for="(item,index) in hotPlace" :key="index">
				<a href="">{{item.name}}</a>
			</dd>
		</dl>
		<!-- 点击搜索框输入文字的时候为搜索结果 -->
		<dl class="searchList" v-if="isSearchList">
			<dd v-for="(item,index) in searchList" :key="index">
				<a href="">{{item.name}}</a>
			</dd>
		</dl>
        </div>
		<!-- 建议 -->
		<p class="suggest">
			<a href="" v-for="(item,index) in hotPlace" :key="index">
				{{item.name}}
			</a>
		</p>
        <!-- 导航 -->
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund" />
            <p class="txt">随时退</p>
          </li>
          <li>
            <i class="single" />
            <p class="txt">不满意免单</p>
          </li>
          <li>
            <i class="overdue" />
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
	data(){
		return {
			// 是否正在聚焦
			isFocus:false,
			search:'',
			hotPlace:[{
				name:'火锅'
			},{
				name:'火锅'
			},{
				name:'火锅'
			}],
			searchList:[{
				name:'火锅'
			},{
				name:'火锅'
			},{
				name:'火锅'
			}]
		}
	},
	computed:{
		isHotPlace(){
			return this.isFocus && !this.search
		},
		isSearchList(){
			return this.isFocus && this.search
		}
	},
	methods:{
		input(e){
			console.log('输入内容',this.search)
		},
		focus(){
			this.isFocus = true;
		},
		blur(){
			// this.isFocus = false;
			let self = this;
			setTimeout(()=>{
				self.isFocus = false
			},200)
		}
	}
};
</script>
<style lang="scss">
</style>