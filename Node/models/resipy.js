import mongoose from 'mongoose'

// כאן יהיה את ההגדרה של המודל - איך הוא יראה בפועל
const articleSchema =new mongoose.Schema({
  name: String,
  difficult_level:Number,
  time:Number,
  Ingredients:[String],
  img:String

})
export default mongoose.model('recipy',articleSchema)