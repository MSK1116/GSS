import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("Message", messageSchema);
export default Message;
