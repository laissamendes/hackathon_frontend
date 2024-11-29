import axios from 'axios';

export default class ConselhoClasseService {
  async getConselhoClasse() {
    const response = await axios.get('/ConselhosdeClasse/');
    return response.data;
  }

  async atualizarAluno(ConselhoClasse) {
    const response = await axios.put(`/ConselhosdeClasse/${ConselhoClasse.id}/`, ConselhoClasse);
    return response.data;
  }

  async getAlunoPorId(id) {
    const response = await axios.get(`/ConselhosdeClasse/${id}/`);
    return response.data;
  }

}
