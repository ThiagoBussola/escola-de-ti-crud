const CarroModelo = require ("../Models/Carro");

exports.getAllCarros = async () => {
  return await carroModelo.find();
};


exports.createCarros = async (carro) => {
  return await CarroModelo.create(carro);
};

exports.getCarroById = async (id) => {
  return await CarroModelo.findById(id);
};

exports.updateCarro = async (id, carro) => {
  return await carroModelo.findByIdAndUpdate(id, carro);
};

exports.deleteCarro = async (id) => {
  return await CarroModelo.findByIdAndDelete(id);
};