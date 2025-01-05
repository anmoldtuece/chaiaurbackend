class ApiResponse {
    constructor(success, message, data = "Success") {
        this.success = success < 400;
        this.message = message;
        this.data = data;
    }
}

export default ApiResponse;