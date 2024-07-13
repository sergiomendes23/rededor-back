import axios from "axios";

export async function getCepService(CEP) {
    try{
    console.log(`${process.env.API_REDEDOR}${CEP}`)
    const { data } = await axios.get(`${process.env.API_REDEDOR}${CEP}`);

    return data;

    }catch(error){
        console.log(error)
    }
}
