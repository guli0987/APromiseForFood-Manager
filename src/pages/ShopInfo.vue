<template>
  <card class="card" title="编辑店铺资料">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="店铺编号"
                      :disabled="true"
                      placeholder="10000"
                      v-model="shop.shopId">
            </fg-input>
          </div>
          <div class="col-md-3">

            <fg-input type="text"
                      label="店铺名称"
                      placeholder="请输入店铺名名"
                      v-model="shop.shopName">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="是否热门"
					  :disabled="true"
                      placeholder="查询中"
                      v-model="shop.shopIsHot">
            </fg-input>
          </div>
        </div>
		<div>店铺头像设置</div>
		<div class="row">
			<div class="col-md-12">
				<card class="card-user">
				  <div slot="image">
					<img :src="shop.shopAvatar" alt="...">
				  </div>
				</card>
				<div class="apff-upload-btn-box">
				  <input ref="fileSelect" type="file" class="upload-file" accept="image/*" @change="getFile"/>
				  <p-button type="info"
				            block
				            @click.native.prevent="upLoadImage">
				    更换店铺头像
				  </p-button>
				</div>
			</div>
		</div>
		<br>
		<div>店铺商品实物展示图
				<button class="addShopShowBtn" @click.prevent="clickShopShowImg(Object.keys(shop.shopImg).length+1,true)">添加图片</button>
		</div>
		<div class="row">
			  <div v-if="Object.keys(shop.shopImg).length!=0"  class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 shopShowImgCard" v-for="(img,index_img) in shop.shopImg" :key="index_img">
				  <card class="card-user">
					<div slot="image" class="shopShowImg">
						<img class="shopImg"  :src="img.url"/>
					</div>
				  </card>
				  <div class="text-center shopImgUpd" @click.prevent="clickShopShowImg(index_img+1,false)">
					<i class="ti-reload">更换图片</i> 
				  </div>
				  <input :ref="'show'+(index_img+1)" type="file" class="upload-file" accept="image/*" @change="getFileImg(index_img+1)"/>
				  <br>
			  </div>
			<div v-if="Object.keys(shop.shopImg).length==0" class="apff-add-btn-box col-md-12">
				还没有图片哦
			</div>
			<div class="shopShowImgCard">
				<input ref="showAdd" type="file" class="upload-file" accept="image/*" @change="getFileImg(Object.keys(shop.shopImg).length+1)"/>
			</div>
		</div>
        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label="详细地址"
                      placeholder="详细地址"
					  :disabled="true"
                      v-model="shop.shopAreaAddress">
            </fg-input>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="所属地区"
                      placeholder="所属地区"
                      v-model="user.city">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="所属城市"
                      placeholder="所属城市"
                      v-model="user.country">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="所属省份"
                      placeholder="所属省份"
                      v-model="user.postalCode">
            </fg-input>
          </div>
        </div> -->

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>店铺额外信息</label>
              <textarea rows="5" class="form-control border-input"
                        placeholder="你的简要描述"
                        v-model="shop.shopExtra">

              </textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <p-button type="success"
                    round
                    @click.native.prevent="updateShopInfo">
            更新信息
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import {upload} from '../common/cos.js'
import { StatsCard} from "@/components/index";
export default {
  components: {
	  StatsCard
	  },
  data() {
    return {
		statsCards: [
		  {
		    type: "warning",
		    icon: "ti-server",
		    title: "容量",
		    value: "105GB",
		    footerText: "现在更新",
		    footerIcon: "ti-reload"
		  }],
		isAddShopShowImg:true,
		shop:{
				shopId:"",
				shopAvatar:"",
				shopName:"",
				shopIsHot:"未知",
				shopIsHotNum:0,
				shopImg:[],
				shopExtra:"",
				shopAreaCode:0,
				shopAreaAddress:""
			},
		user: {
			company: "Paper Dashboard",
			username: "michael23",
			email: "",
			firstName: "Chet",
			lastName: "Faker",
			address: "Melbourne, Australia",
			city: "Melbourne",
			postalCode: "",
			aboutMe: `We must accept finite disappointment, but hold on to infinite hope.`
		  }
    };
  },
  created(){
	  console.log("created");
	  this.getShopInfo();
  },
  methods: {
	upLoadImage(){
			//console.log("123");
		  this.$refs.fileSelect.dispatchEvent(new MouseEvent('click')) ;
	  },
	getImgSuffix(name){
		let lastIndex=name.lastIndexOf('.');
		return name.substring(lastIndex+1);
	},
	getFile(){
		//console.log("321");
		var _this=this;
		const inputFile = this.$refs.fileSelect.files[0];
		if(inputFile){
			if(inputFile.type !== 'image/jpeg' && inputFile.type !== 'image/png' && inputFile.type !== 'image/gif'){
				alert('不是有效的图片文件！');
				return;
			}
			//console.log(inputFile.type+"/"+inputFile.name+"/"+this.getImgSuffix(inputFile.name));
			let shopHeadName="shop/"+"shop"+this.shop.shopId+"head"+"."+this.getImgSuffix(inputFile.name);
			//console.log(shopHeadName);
			
			upload(shopHeadName,inputFile,this.updateImg,-1);
		} else {
			return;
		}
	},
	updateImg(url){
		this.shop.shopAvatar=url;
		console.log("callback");
		this.$notify({
		  message:"图片上传成功。注意，需要更新信息方可生效。",
		  icon: "ti-bell",
		  horizontalAlign: 'center',
		  verticalAlign: 'top',
		  type: 'info',
		  timeout:2000
		});
	},
	clickShopShowImg(index,flag){
		if(flag){
			this.isAddShopShowImg=true;
			this.$refs.showAdd.dispatchEvent(new MouseEvent('click'));
		}else{
			this.isAddShopShowImg=false;
			this.$refs["show"+index][0].dispatchEvent(new MouseEvent('click'));
		}
		console.log(index+"点击");
		//this.$refs["show"+index][0].dispatchEvent(new MouseEvent('click'));
		//this.$refs.show1.dispatchEvent(new MouseEvent('click'));
		/* let get='show'+index;
		this.$refs[get][0].dispatchEvent(new MouseEvent('click')) ; */
		/* console.log("测试："+JSON.stringify(this.shop.shopImg));
		this.shop.shopImg[2].url="111111111111111";
		console.log("测试2："+JSON.stringify(this.shop.shopImg)); */
	},
	getFileImg(index){
		let inputFile;
		if(this.isAddShopShowImg){
			inputFile = this.$refs.showAdd.files[0];
		}else{
			inputFile = this.$refs["show"+index][0].files[0];
		}
		//let inputFile = this.$refs["show"+index][0].files[0];
		console.log("test:"+inputFile.name);
		if(inputFile){
			if(inputFile.type !== 'image/jpeg' && inputFile.type !== 'image/png' && inputFile.type !== 'image/gif'){
				alert('不是有效的图片文件！');
				return;
			}
			
			//console.log(inputFile.type+"/"+inputFile.name+"/"+this.getImgSuffix(inputFile.name));
			let shopHeadName="shop/"+"shop"+this.shop.shopId+"show"+index+"."+this.getImgSuffix(inputFile.name);
			console.log(shopHeadName);
			
			upload(shopHeadName,inputFile,this.updateShopShowImg,index-1);
		} else {
			return;
		}
	},
	updateShopShowImg(url,index){
		if(this.isAddShopShowImg){//如果是添加
			let newShopShowObj={url:url}
			this.shop.shopImg.push(newShopShowObj);
			console.log("测试新增数据"+JSON.stringify(this.shop.shopImg));
		}else{
			this.shop.shopImg[index].url=url;
		}
		//this.shop.shopImgLength=Object.keys(this.shop.shopImg).length;
		console.log("callback:updateShopShowImg");
		this.$notify({
		  message:"展示图片上传成功",
		  icon: "ti-bell",
		  horizontalAlign: 'center',
		  verticalAlign: 'top',
		  type: 'info',
		  timeout:2000
		});
	},
	async updateShopInfo(){
		console.log("shopImg:"+JSON.stringify(this.shop.shopImg));
		const res =await this.$requestGet('shop/modifyShopInfo',
		{
			id:this.shop.shopId,
			avatar:this.shop.shopAvatar,
			name:this.shop.shopName,
			hot:this.shop.shopIsHotNum,
			img:encodeURI(JSON.stringify(this.shop.shopImg)),
			extra:this.shop.shopExtra
			//areaCode://还没添加
		});
		if(res.code === 100&&res.data.result==1){
			console.log("修改资料成功:"+JSON.stringify(res));
			this.$notify({
			  message:"资料修改成功",
			  icon: "ti-bell",
			  horizontalAlign: 'center',
			  verticalAlign: 'top',
			  type: 'success',
			  timeout:3000
			  /* component:NotificationTemplate */
			});
		}else{
			console.log("修改资料失败");
			this.$notify({
			  message:"资料修改失败",
			  icon: "ti-bell",
			  horizontalAlign: 'center',
			  verticalAlign: 'top',
			  type: 'danger',
			  timeout:3000
			});
		}
		
	},
	async getShopInfo(){
		const res =await this.$requestGet('shop/getShopAndAreaInfo',{id:14});
		if (res.code === 100) {//请求成功
			//console.log(JSON.stringify(res.data.result));//JSON.parse(res.data.result)[0].productShopId
			let shopObj=JSON.parse(res.data.result);
			//console.log("【】"+JSON.stringify(shopObj));
			//店铺码
			this.shop.shopId=shopObj.productShopId;
			//店铺头像
			this.shop.shopAvatar=shopObj.productShopAvatar;
			//是否热门
			this.shop.shopIsHotNum=shopObj.productShopHot;
			if(shopObj.productShopHot == 0){
				this.shop.shopIsHot="否";
			}else if(shopObj.productShopHot==1){
				this.shop.shopIsHot="是";
			}else{
				this.shop.shopIsHot="未知";
			}
			//店铺名
			this.shop.shopName=shopObj.productShopName;
			//额外信息
			this.shop.shopExtra=shopObj.productShopExtra;
			//店铺区域码
			this.shop.shopAreaCode=shopObj.areaCode;
			//店铺区域信息
			this.shop.shopAreaAddress=shopObj.areaName;
			//店铺展示图列表
			//this.shop.shopImg=shopObj.productShopImg;
			this.parseShopShowImgList(shopObj.productShopImg);
			//console.log("shopObj.productShopImg"+shopObj.productShopImg);
			
			
		}else{
			console.log("请求失败 error:" + JSON.stringify(res));
		}
	},
	parseShopShowImgList(shopImg){
		if(shopImg==''||shopImg==null){
			console.log("空");
			//初始化"[{url:'https://public-1301701929.cos.ap-shanghai.myqcloud.com/shop/null.png'}]"
			this.shop.shopImg=[];
			//this.shop.shopImgLength=Object.keys(this.shop.shopImg).length;
			//console.log(Object.keys(this.shop.shopImg).length==0);
			//console.log(JSON.stringify(this.shop.shopImg)=='{}');
			
		}else{
			console.log("非空");
			//[{\"url\":\"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-mix-mall-admin/e18fa44d-b256-48d7-9eb8-047e0e4e5483.png\"},]
			//console.log("imgList:"+JSON.stringify(shopImg)+"testObj:"+JSON.parse(shopImg)[0].url);
			this.shop.shopImg=JSON.parse(shopImg);
		}
		
	}
	
  }
};
</script>
<style lang="scss">
	.addShopShowBtn{
		height: 40rpx;
		border-radius: 20px;
		background-color: #68b3c8;
		font-size: 8px;
		border: #ffffff 1px solid;
	}
	.apff-add-btn-box{
		text-align: center;
	}
	.apff-upload-btn-box {
		input[type=file] {
			display: none;
		}
	}
.shopShowImg{
	 /* position:relative;
　   width:100px;
	 height:100px; */
	 overflow:hidden;
	 
	.shopImg{
		position: absolute;
		top: 50%;
		left: 50%;
		display: block;
		min-width: 100%;
		min-height: 100%;
		transform:translate(-50%,-50%);
	}
}
.shopImgUpd{
	
}
.shopShowImgCard{
	input[type=file] {
				display: none;
			}
}
</style>
