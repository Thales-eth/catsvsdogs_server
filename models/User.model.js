const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    points: {
      type: Number,
      default: 0
    },
    rankedPoints: {
      type: Number,
      default: 0
    },
    league: {
      type: String,
      enum: ["BRONZE", "GOLD", "DIAMOND"],
      default: "BRONZE"
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
