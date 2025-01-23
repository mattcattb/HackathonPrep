import mongoose from 'mongoose'

const basicItemSchema = new mongoose.Schema({
  name: {
    type: string, 
    required: true,

  },
  description: {
    type: string
  }
})

const BasicItem = mongoose.model('Item', basicItemSchema);

export default BasicItem;