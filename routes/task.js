import express from "express";
import { Create, DeleteAll, DeleteById, GetAll, UpdateAll, UpdateOnce,FindById } from "../controllers/task.js";


const router = express.Router();

router
.route('/')
.get(GetAll)
.post(Create)
.put(UpdateAll)
.delete(DeleteAll)

router
.route('/:id')
.get(FindById)
.put(UpdateOnce)
.delete(DeleteById)


export default router;
