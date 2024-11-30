import axios from 'axios';

export default class TurmaService {
  async getTurmas() {
    const response = await axios.get('/turmas/');
    return response.data;
  }
}
