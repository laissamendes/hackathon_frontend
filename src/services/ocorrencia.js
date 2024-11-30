import axios from 'axios';

export default class OcorrenciaService {
  async getOcorrencia() {
    const response = await axios.get('/ocorrencias/');
    return response.data;
  }

  async atualizarOcorrencia(ocorrencia) {
    const response = await axios.put(`/ocorrencias/${ocorrencia.id}/`, ocorrencia);
    return response.data;
  }

  async getOcorrenciaPorId(id) {
    const response = await axios.get(`/ocorrencias/${id}/`);
    return response.data;
  }

}
