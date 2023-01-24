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
    },
    avatar: {
      type: String,
      default: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80"
    },
    favoriteAnimal: {
      type: String,
      default: 'dog',
      enum: ['dog, cat']
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
