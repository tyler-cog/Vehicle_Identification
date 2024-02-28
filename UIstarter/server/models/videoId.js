const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoIDSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    time: {
        type: String,
        required: true,
      },
    // date: {
    //   type: Date
    // },
  },
  // {
  //   timestamps: true,
  // }
);

module.exports = mongoose.model('videoid', videoIDSchema);
