const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carroSchema = new Schema({
  marca: String,
  modelo: String,
  ano: Date,
  fipe: number,
});

module.exports = mongoose.model("Carro", carroSchema)