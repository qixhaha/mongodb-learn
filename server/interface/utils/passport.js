import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/users'
// 使用passport  策略需要先提前配置
passport.use(new LocalStrategy(async (username,password,done)=>{
    let where = {
        username
    }
    let result = await UserModel.findOne(where)
    if(result != null){
        if(result.password === password){
            return done(null,result)
        }else{
            return done(null,false,'密码错误')
        }
    }else{
        return done(null,false,'用户不存在')
    }
}))
// 序列化  登陆成功以后 将用户信息存在session 以及Redis里面并且以cookie的形式返回给客户端   如果验证成功，将通过用户浏览器中设置的cookie建立并维护会话。
passport.serializeUser((user,done)=>{
    done(null,user)
})
// 反序列化 登陆成功以后 可以获取用户的信息
passport.deserializeUser((user,done)=>{
    return done(null,user)
})

export default passport;