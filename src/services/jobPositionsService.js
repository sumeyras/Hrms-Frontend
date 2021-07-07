import axios from "axios";


export default class jobPositionsService{

    getAll(){

        return axios.get("http://localhost:8080/api/job_positions/getall")
    }
}