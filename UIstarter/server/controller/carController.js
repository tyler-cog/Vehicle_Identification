'user strict'
const boom = require('boom');
const carCollection = require('../models/carData');

// get all notes
exports.getAllData = async (_req, _res) => {
  try {
    let allData = await carCollection.find();
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
exports.addNewData = async (req, _res) => {
  try {
    let car = new carCollection(req.body);
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
