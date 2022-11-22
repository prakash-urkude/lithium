//______________________ Import or Require Modules ________________________________

const mongoose = require("mongoose");

//____________________________ Creating Schema _____________________________________

const collegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim : true
    },
    fullName: {
      type: String,
      required: true,
      trim : true
    },
    logoLink: {
      type: String,
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

module.exports = new mongoose.model("College", collegeSchema);