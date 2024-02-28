'user strict'
const boom = require('boom');
const vidCollection = require('../models/videoId');

// get all notes
exports.getAllVidData = async (_req, _res) => {
  try {
    let allData = await vidCollection.find();
    return allData;
  } catch (e) {
    throw boom.boomify(e);
  }
};

// // get single notes by id
// exports.getSingleNote = async (req, _res) => {
//   try {
//     const id = req.params.id;
//     let singleNote = await Notes.findById(id);
//     return singleNote;
//   } catch (e) {
//     throw boom.boomify(e);
//   }
// };

// // add single notes
exports.addNewVidData = async (req, _res) => {
  try {
    let car = new vidCollection(req.body);
    let carAdded = await car.save();
    return carAdded;
  } catch (e) {
    throw boom.boomify(e);
  }
};

// // update single notes by id
// exports.updateNote = async (req, _res) => {
//   try {
//     const id = req.params.id;
//     let noteUpdated = await Notes.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     return noteUpdated;
//   } catch (e) {
//     throw boom.boomify(e);
//   }
// };

// // delete single notes by id
// exports.deletePost = async (req, _res) => {
//   try {
//     const id = req.params.id;
//     let noteDeleted = await Notes.findByIdAndDelete(id);
//     return { noteDeleted };
//   } catch (e) {
//     throw boom.boomify(e);
//   }
// };
