import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcryptjs'

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
    required: true,
    select: false
  },
  avatar: {
    type: Schema.Types.ObjectId,
    ref: 'File'
  }
}, {
  timestamps: true
})

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  next()
})

export default model<UserInterface>('User', UserSchema)
