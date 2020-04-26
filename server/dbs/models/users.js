// 定义用户模型
import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	username:{
		tyep:String,
		unique:true,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	}
})
export default mongoose.model('User',UserSchema)