import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import joi from "joi";

import router from "./src/route/index.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json())
app.use(router);

// get da API com o CEP digitado



// Modelos ou schemas (JOI)

// const cepSchema = joi.string().pattern(/^\d{5}-\d{3}$/).required();

// function validateCEP(cep) {
//     const { error } = cepSchema.validate(cep);
//     if (error) {
//       return `CEP inválido: Fomato de CEP correto '12345-678'`;
//     }
//     return 'CEP válido';
//   }

//   console.log(validateCEP('12345-678')); // CEP válido
//   console.log(validateCEP('12345678'));  // CEP inválido

// Erros possiveis para testes 


app.listen(4000, () => {console.log('listening on port 4000')}); 