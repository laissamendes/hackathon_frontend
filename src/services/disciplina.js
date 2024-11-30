import axios from 'axios';

export default class DisciplinaService {
  async getDisciplina() {
    const response = await axios.get('/disciplinas/');
    return response.data;
  }
}
