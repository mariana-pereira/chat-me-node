import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  name: string,
  email: string,
  password: string,
  avatar: string
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: Schema.Types.ObjectId,
    ref: 'File'
  }
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)
