const CarroService = require("../Services/CarroService");

exports.getAllCarro = async (req, res) => {
  try {
    const carros = await CarroService.getAllCarros();
    res.json({data: carro, status: "sucesso"});
  } catch {
    res.status(500).json({error: err.message});
  }
};

exports.createCarro = async (req, res) => {
  try {
    const carro = await CarroService.createCarro(req.body);
    res.json({data: carro, status : "sucesso"});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};

exports.getCarroById = async (req, res) => {
  try {
    const bcarrolog = await CarroService.getCarroById(req.params.id);
    res.json({data : carro, status : "sucesso"});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};

exports.updateCarro = async (req, res) => {
  try {
    const carro = await CarroService.updateCarro(req.params.id, req.body);
    res.json({data: carro, status: "sucesso"});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};

exports.deleteCarro = async (req, res) => {
  try {
    const carro =await CarroService.deleteCarro(req.params.id);
    res.json({data: carro, status: "sucesso"});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};