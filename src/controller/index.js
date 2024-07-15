import { getCepService } from "../service/index.js";
import { redis } from "../app.js";

export async function getCepController(req, res) {

    const {CEP} = req.params
    const cacheEx = 3600;

    try {
        const cachedCEP = await redis.get(CEP);
        if(cachedCEP){
            res.status(200).send(JSON.parse(cachedCEP))
        } else{
            const response = await getCepService(CEP);
            redis.setEx(CEP, cacheEx, JSON.stringify(response));
            res.status(200).send(response);
        }
    } catch (error) {
        res.sendStatus(500)
    }
}