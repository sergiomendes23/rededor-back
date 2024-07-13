import app from "./app.js";

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {console.log(`listening on port ${PORT}`)}); 
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


