import passport from 'koa-passport'
import LocalStragegy from 'passport-local'
import UserModel from '../../dbs/models/users'
//  登录策略 在使用登录策略之前需要进行一些配置 使用passport策略就要 进行一些配置
passport.use(new LocalStragegy(async function(username,password,done){
	// 查询条件
	let where = {
		username
	}
	let result = await UserModel.findOne(where);
	if(result!=null){
		// 如果用户存在
		if(result.password === password){
			return done(null,result)
		}else{
			return done(null,false,'密码错误')
		}
	}else{
		return done(null,false,'用户不存在')
	}
}))