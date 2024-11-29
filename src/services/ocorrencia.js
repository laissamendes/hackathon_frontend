import axios from 'axios';

export default class OcorrenciaService {
  async getNota() {
    const response = await axios.get('/notas/');
    return response.data;
  }

  async atualizarNota(nota) {
    const response = await axios.put(`/notas/${nota.id}/`, nota);
    return response.data;
  }

  async getNotaPorId(id) {
    const response = await axios.get(`/notas/${id}/`);
    return response.data;
  }

}
