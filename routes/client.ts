import express from "express";
import {
  getClients,
  getClientsNamesAndIds,
  getClient,
  createClient,
  deleteClient,
  updateClient,
} from "../controllers/clientController";

const router = express.Router();

// require auth for all client routes
//router.use(requireAuth)

//GET all clients
router.get("/", getClients);

// GET all clients names and ids
router.get("/names-and-ids", getClientsNamesAndIds);

//GET single client
router.get("/:id", getClient);

//POST new client
router.post("/", createClient);

//DELETE client
router.delete("/:id", deleteClient);

//UPDATE client
router.patch("/:id", updateClient);

module.exports = router;
