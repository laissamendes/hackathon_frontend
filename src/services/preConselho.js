import axios from 'axios';

export default class PreConselhoService {
  async atualizarPreConselho(PreConselho) {
    const response = await axios.put(`/pre-conselho/`, PreConselho);
    return response.data;
  }

  async adicionarPreConselho(PreConselho) {
    await axios.post('/pre-conselho/', PreConselho)
}
}
