//______________________ Import or Require Modules ________________________________

const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

//____________________________ Creating Schema _____________________________________

const internSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim : true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim : true
    },
    collegeId: {
      type: objectId,
      ref: "College",
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
//______________________ Export the Modules ________________________________

module.exports = new mongoose.model("intern", internSchema);