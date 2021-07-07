import axios from "axios";

export default class jobSeekersService{

    getAll(){
        return axios.get("http://localhost:8080/api/job_seekers/getall")
    }
}