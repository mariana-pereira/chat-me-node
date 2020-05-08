import { Schema, model, Document } from 'mongoose'

interface FileInterface extends Document {
  name: string,
  path: string
}

const FileSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
})

export default model<FileInterface>('File', FileSchema)
