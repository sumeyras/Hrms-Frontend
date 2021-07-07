import axios from "axios";

export default class employersService{

    getAll(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }
}