import mongoose from "mongoose";
const { Schema } = mongoose;

const NFTschema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    maxlength: 3,
  },
  mint: {
    type: Boolean,
    required: true,
  },
});

//const nft = mongoose.model("NFT") || mongoose.model("NFT", NFTschema);

module.exports = mongoose.models.NFT || mongoose.model("NFT", NFTschema);
