const mongoose = require('mongoose');
const { Schema } = mongoose;

// this schema uses the info from the db that is based off the changed variable
// takes off a big portion of the junk data

const carDataSchema = new Schema(
  {
    tracker_id: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
    id: {
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

module.exports = mongoose.model('changedposition', carDataSchema);
