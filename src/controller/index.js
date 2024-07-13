import { getCepService } from "../service/index.js";

export async function getCepController(req, res) {
    const {CEP} = req.params
    console.log(CEP)
    const response = await getCepService(CEP)
    res.status(200).send(response)
}

