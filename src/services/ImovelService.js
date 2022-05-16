import api from "./api";

class ImovelService {
    allImoveis(data) {
        return api.post('/imoveis/todos', data)
    }

    singleImovel(id) {
        return api.get(`/imoveis/${id}`)
    }
}



export default new ImovelService()

