import axios, { AxiosResponse } from "axios";
import MakesForVehicleDto from "../utils/MakesForVehicleDto";

export default async function GetMakesForVehicle() {

    return await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}vehicles/GetMakesForVehicleType/car?format=json`)
    .then((response: AxiosResponse<MakesForVehicleDto>) => response.data)

}
