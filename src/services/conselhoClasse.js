import axios from 'axios';

export default class ConselhoClasseService {
  async getConselhoClasse() {
    const response = await axios.get('/conselho-classe/');
    return response.data;
  }

  async atualizarConselhoClasse(ConselhoClasse) {
    const response = await axios.put(`/conselho-classe/${ConselhoClasse.id}/`, ConselhoClasse);
    return response.data;
  }

  async getConselhoClassePorId(id) {
    const response = await axios.get(`/conselho-classe/${id}/`);
    return response.data;
  }

  async criarConselhoClasse(ConselhoClasse) {
    await axios.post('/conselho-classe/', ConselhoClasse)
}

}
