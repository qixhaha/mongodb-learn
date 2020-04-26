export default{
	dbs:"mongodb://127.0.0.1:27017/student",
	redis:{
		get host(){
			return '127.0.0.1'
		},
		get port(){
			return 6379
		}
	},
	// 邮箱相关配置
	smtp:{
		get host(){
			return 'smtp.qq.com'
		},
		//发件人地址
		get user(){
			return '2432448798@qq.com'
		},
		// 第三方密码
		get pass(){
			return 'emejrbhubszgdjab'
		},
		get code(){
			// 获取验证码
			return ()=>{
				return Math.random().toString(16).slice(2,6).toUpperCase()
			}
		},
		// 获取过期时间
		get expire(){
			return ()=>{
				// 一分钟
				return new Date().getTime()+1000*60
			}
		}
	}
}