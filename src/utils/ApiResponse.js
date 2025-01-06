class ApiResponse {
    constructor(statuscode, data, message = "sucesss") {
        this.statuscode = statuscode;
        this.data = data;
        this.message = message;
        this.sucess = statuscode < 400;
    }   
}

export default ApiResponse;