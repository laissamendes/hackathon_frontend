import axios from 'axios';

export default class TrimestreService {
  async getTrimestres() {
    const response = await axios.get('/trimestres/');
    return response.data;
  }
}
