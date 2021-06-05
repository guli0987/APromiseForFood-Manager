<template>
	<div class="row">
	  <div class="col-12">
	    <card class="card-plain" :title="table2.title" :sub-title="table2.subTitle">
	      <div class="table-full-width table-responsive">
	        <paper-table type="hover"  :data="table2.data" @click-seq="getSeqInfo"
	                     :columns="table2.columns" :colAlias="table2.colAlias">
	
	        </paper-table>
	      </div>
	    </card>
	   </div>
	</div>
</template>

<script>
	import { PaperTable } from "@/components";
	const tableAlias = ["序号","商品码", "商品名称", "商品概述", "商品展示图", "商品定价","补充说明"];
	const tableColumns = ["num","id", "title", "desc", "img", "price","extra"];
	const tableData = [
	  {
	    num: 1,
	    id:1234,
	    title: "红烧牛肉面",
	    desc: "好吃劲道实在",
	    img: "点击查看详情",
			price:10.0,
			extra:"暂未添加"
	  },
		{
		  num: 2,
		  id:1235,
		  title: "脆皮鸡拌饭",
		  desc: "脆皮带劲，嚼嘛嘛香",
		  img: "点击查看详情",
			price:12.0,
			extra:"测试"
		},
		{
		  num: 3,
		  id:1236,
		  title: "盖浇饭 青椒肉丝",
		  desc: "辣和爽",
		  img: "点击查看详情",
			price:7.0,
			extra:"辣椒太辣"
		},
		{
		  num: 4,
		  id:1237,
		  title: "水饺",
		  desc: "肉馅和菜馅",
		  img: "点击查看详情",
			price:8.0,
			extra:"暂未添加"
		},
		{
		  num: 5,
		  id:1238,
		  title: "米线",
		  desc: "吸溜吸溜再盛碗汤，太实在了",
		  img: "点击查看详情",
			price:11.0,
			extra:"暂未添加"
		}
		];
	export default {
	  components: {
	    PaperTable
	  },
	  data() {
	    return {
		  pageCount:1,
	      table2: {
	        title: "店铺商品清单",
	        subTitle: "有疑惑？点击查看帮助",
	        columns: [...tableColumns],
			colAlias:[...tableAlias],
	        data: [...tableData]
	      }
	    };
	  },
	  created(){
	  	  console.log("created");
	  	  this.getShopGoodsInfo(this.pageCount);
	  },
	  methods:{
		  getSeqInfo(index){
			  if(index==3){//商品概述
			  	console.log("商品概述");
			  }else if(index==4){//商品展示图
			  	console.log("商品展示图");
			  }else if(index==6){//	补充说明
			  	console.log("补充说明");
			  }
		  },
		async getShopGoodsInfo(pageCount){
			const res =await this.$requestGet('shopShow/getShopShowListLimitNumber',{id:1,pageNum:pageCount,pageSize:10});
			if (res.code === 100) {//请求成功
				console.log("success"+JSON.stringify(res));
					
			}else{
				console.log("请求失败 error:" + JSON.stringify(res));
			}
		}
	  }
	};
</script>

<style>
</style>
