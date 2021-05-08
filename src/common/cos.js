import {baseUrl,bucketName,regionName} from './global.js'
import axios from 'axios';
import COS from 'cos-js-sdk-v5'
const url='/utils/getCosTmp';

	export const upload=(key,file,callback,index=-1)=>{
		var cos = new COS({
					getAuthorization: getAuthorizations
				});
		// 接下来可以通过 cos 实例调用 COS 请求。
		cos.putObject({
		   Bucket: bucketName, /* 必须 */
		   Region: regionName, /* 存储桶所在地域，必须字段 */
		   Key: key,        /* 必须  图片名称*/
		   StorageClass: 'STANDARD',
		   Body: file, // 上传文件对象
		   onProgress: function(progressData) {
			   console.log("onProgress:"+JSON.stringify(progressData));
		   }
		}, function(err, data) {
			   if (err) {
				   console.log("err"+err);
			   } else {
				   let fileUrl = 'http://' + data.Location
				   console.log("success:"+JSON.stringify(data));
				   if(index!=-1){
					   callback(fileUrl,index);
				   }else{
					  callback(fileUrl);
				  }
			   }
		});
	
	}
	

	var getAuthorizations = function (options, callback) {
		console.log("getAuthorization");
		//console.log("options:"+options+"/callback"+callback);
		//return new Promise((resolve, reject) => {
			axios.get(baseUrl+url)
			.then(res=>{
				//console.log("cos:"+JSON.stringify(res)+"\n\n");
				if(res.data.code==100){
					//console.log("122321312");
					var data=JSON.parse(res.data.data.result);
					//console.log("[data]:"+data+"______________"+JSON.parse(data).credentials);
					var credentials = data && data.credentials;
					if (!data || !credentials) return console.error('credentials invalid');
					  callback({
						  TmpSecretId: credentials.tmpSecretId,
						  TmpSecretKey: credentials.tmpSecretKey,
						  XCosSecurityToken: credentials.sessionToken,
						  // 建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
						  StartTime: data.startTime, // 时间戳，单位秒，如：1580000000
						  ExpiredTime: data.expiredTime, // 时间戳，单位秒，如：1580000900
					  });
					
				}else{
					console.log("error:cos");
				}
			}).catch(err=>{
				console.log("error");
			})
		//});
	}

