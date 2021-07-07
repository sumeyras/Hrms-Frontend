import axios from "axios";

export default class jobAdvertisementsService{

    getAllByDateAsc(){

        return axios.get("http://localhost:8080/api/job_advertisements/getAllByDateAsc")
    }

    
    getAllByDateDesc(){

        return axios.get("http://localhost:8080/api/job_advertisements/getAllByDateDesc")

    }

    getByIsActiveTrue(){

        return axios.get("http://localhost:8080/api/job_advertisements/getByIsActiveTrue")
    }
    

}