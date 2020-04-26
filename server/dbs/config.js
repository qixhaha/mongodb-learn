// 数据的配置
export default{
    dbs:'mongodb://127.0.0.1:27017/student',
    redis:{
        host(){
            return '127.0.0.1'
        },
        port(){
            return 6379;
        }
    },
    // 邮箱服务
    smtp:{
        host(){
            return 'smtp.qq.com'
        },
        // 发件人邮箱
        user(){
            return '2432448798@qq.com'
        },
        pass(){
            return 'lgriwoxtbxctebih'
        },
        code(){
            // return ()=>{
                return Math.random().toString(16).slice(2,6).toUpperCase()
            //   }
        },
       expire(){
            // 过期时间1分钟
            // return ()=>{
                return new Date().getTime()+1000*60*60
            // }
        }
    }

}