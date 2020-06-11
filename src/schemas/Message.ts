import { Schema, model, Document } from 'mongoose'

interface MessageInterface extends Document {
  receiver: string,
  sender: string,
  content: string
}

const MessageSchema = new Schema({
  receiver: {
    type: String,
    required: true
  },
  sender: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export default model<MessageInterface>('Message', MessageSchema)
