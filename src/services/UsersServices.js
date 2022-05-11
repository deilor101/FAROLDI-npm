import api from "./api";

class UsersService {
    register (data) {
        return api.post('/authentication/register', data)
    }

    login (data) {
        return api.post('/authentication/log-in', data)
    }
}



export default new UsersService()

