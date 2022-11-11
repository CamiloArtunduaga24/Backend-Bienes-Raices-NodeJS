
import express from "express";
import { formularioLogin, formularioRegistro, formularioOlvidePassword } from "../controllers/usuario.controller.js";

const router = express.Router();

router.get('/login', formularioLogin);

router.get('/registro', formularioRegistro);

router.get('/olvide-pass', formularioOlvidePassword);





export default router