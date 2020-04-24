import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodeMailer'
import User from '../dbs/models/users'
import Passport from './utils/passport'
import Email from '../dbs/config'
import axios from './utils/axios'

let router = new Router({
    prefix:'/users'
})
let store = new Redis().client

router.post('/signup',async(ctx)=>{
    const {username,password,email,code} = ctx.request.body;
    // 如果验证码code存在
    if(code){
        // 获取Redis里面的 username以及以及过期时间 
        const saveCode = await Store.hget(`nodemail:${username}`,'code');
        const saveExpire = await Store.hget(`nodemail:${username},'expire`);
        // 如果验证码和redis里面一样 
        if(code === saveCode){
            // 如果过期了
            if(new Date().getTime() -saveExpire > 0){
                ctx.body = {
                    code:-1,
                    msg:'验证码已过期,请重新尝试'
                }
                return false
            }else{
                // 如果没有过期  判断 当前用户是否存在
                let user = await User.find({
                    username
                })
                if(user.length){
                    ctx.body = {
                        code:-1,
                        msg:'已被注册'
                    }
                    return ;
                }else{
                    let nuser = await User.create({
                        username,
                        passport,
                        email
                    })
                    if(nuser){
                        let res = await axios.post('/users/sigin',{username,password});
                        // console.log('注册',res)
                        if(res.data && res.data.code === 0){
                            ctx.body = {
                                code:0,
                                msg:'注册成功',
                                user:res.data.user
                            }
                        }else{
                            ctx.body = {
                                code:-1,
                                msg:'error'
                            }
                        }
                    }else{
                        ctx.body = {
                            code:-1,
                            msg:'注册失败'
                        }
                    }
                }
            }
        // 如果验证码不正确 
        }else{
            ctx.body = {
                code:-1,
                msg:'请填写正确的验证码'
            }
            return 
        }
    }else{
        ctx.body = {
            code:-1,
            msg:"请填写验证码"
        }
        return 
    }
})
// 登录
router.post('/signup',async(ctx,next)=>{
    return Passport.authenticate('local',(err,user,info,status)=>{
        if(err){
            ctx.body = {
                code:-1,
                msg:err
            }
        }else{
            if(user){
                ctx.body = {
                    code:0,
                    msg:"登陆成功",
                    user
                }
               return ctx.login(user)
            }else{
                ctx.body = {
                    code:1,
                    msg:info
                }
            }
        }
    })(ctx,next)
})

// 获取邮箱验证码
router.post('/verify',async (ctx,next)=>{
    let username = ctx.request.body.username;
    const saveExpire = await Store.hget(`nodemail:${username}`,'expire');
    if(saveExpire && new Date().getTime() - saveExpire < 0){
        ctx.body = {
            code:-1,
            msg:'验证码请求过于频繁，请一分钟内一次'
        }
        return false
    }
    let transporter = nodeMailer.createTransport({
        service:'qq',
        auth:{
            user:Email.smtp,user,
            pass:Email.smtp.pass
        }
    })
    let ko = {
        code:Email.smtp.code(),
        expire:Email.smtp.expire(),
        email:ctx.request.body.email,
        user:ctx.request.body.username
    }
    let mailOptions = {
        from:`认证邮箱<${Email.smtp.user}>`,
        to:ko.email,
        subject:'<綦旭发送的验证为>',
        html:`您在《慕课网高仿美团网全栈实战》课程中注册，您的邀请码是${ko.code}`
    }
    await transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            return console.log(error)
        }else{
            Store.hset(`nodemail:${ko.user}`,'code',ko.code,'expire',ko.expire,'email',ko.email)
        }
    })
    ctx.body = {
        code:0,
        msg:'验证码已发送，可能会有延迟，有效期为一分钟'
    }
})

router.get('/exit',async(ctx,next)=>{
    await ctx.logout();
    if(!ctx.isAuthenticated()){
        ctx.body = {
            code:0
        }
    }else{
        ctx.body = {
            code:-1
        }
    }
})

router.get('/getUser',async (ctx)=>{
    if(ctx.isAuthenticated()){
        const {username,email} = ctx.session.passport.user;
        ctx.body = {
            user:username,
            email
        }
    }else{
        ctx.body = {
            user:'',
            email:''
        }
    }
})
export default router;