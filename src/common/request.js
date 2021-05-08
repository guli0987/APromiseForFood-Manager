import axios from 'axios';

const baseUrl='http://localhost:8080/apff_ssm_war_exploded/';//http://localhost:8080/apff_ssm_war_exploded/将localhost换为本地ip，不然实机调试报错

export const requestGet = (url = '',para={})=>{
	return new Promise((resolve, reject) => {
		axios.get(
			baseUrl+url,
			{
				params:para
				/* headers:{
						"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
				} */
			},
			
		)
		.then(res=>{
		   console.log("【result】:"+JSON.stringify(res.data));
		   resolve(res.data);
	   })
	   .catch(err=>{
		   console.log("error");
		   reject(err);
	   })
		
	});
}
export const requestPost = (url = '',para={})=>{
	return new Promise((resolve, reject) => {
		axios.post(
			baseUrl+url,
			para
		)
		.then(res=>{
		   console.log("result:"+JSON.stringify(res.data));
		   resolve(result);
	   })
	   .catch(err=>{
		   console.log("error");
		   reject(err);
	   })
		
	});
}