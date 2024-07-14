import { getCepService } from "../service/index.js";
import { redis } from "../app.js";

// export async function getCepController(req, res) {
//     const {CEP} = req.params
//     const response = await getCepService(CEP)
//     res.status(200).send(response)
// }

export async function getCepController(req, res) {
    const {CEP} = req.params
    const cacheEx = 3600;
    try {
        const cachedCEP = await redis.get(CEP);
        console.log("cache", cachedCEP)
        if(cachedCEP){
            res.send(JSON.parse(cachedCEP))
        } else {
            const response = await getCepService(CEP);
            redis.setEx(CEP, cacheEx, JSON.stringify(response));
            res.send(response);
            console.log("aaaaa", response)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}