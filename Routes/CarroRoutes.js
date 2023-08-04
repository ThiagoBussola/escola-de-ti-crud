const express = require("express");

const{
  getAllCarros,
  createCarro,
  getCarroById,
  updateCarro,
  deleteCarro,
} = require("../Controllers/CarroController");

const router = express.Router();

router.route("/").get(getAllCarros).post(createCarro);
router.route("/:id").get(getCarroById).put(updateCarro).delete(deleteCarro);

module.exports = router;