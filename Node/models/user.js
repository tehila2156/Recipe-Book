import mongoose from 'mongoose'

// כאן יהיה את ההגדרה של המודל - איך הוא יראה בפועל
const articleSchema =new mongoose.Schema({
  username: String,
  password:String
 
})
export default mongoose.model('user',articleSchema)