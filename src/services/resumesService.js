import axios from "axios";

export default class resumesService{

    getAll(){

        return axios.get("http://localhost:8080/api/resumes/getAll")
    }
}