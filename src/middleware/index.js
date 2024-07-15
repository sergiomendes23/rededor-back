import { cepSchema } from "../schema/index.js";

export function validadeCEPMiddleware(req, res, next){
    
    const {CEP} = req.params;
    const {error} = cepSchema.validate({CEP})
    
    if(error){
        const erro = error.details.map(erro => erro.message)
        return res.status(422).send(erro)
    }

    next()
}