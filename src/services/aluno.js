import axios from 'axios';

export default class AlunoService {
  async getAluno() {
    const response = await axios.get('/alunos/');
    return response.data;
  }

  async atualizarAluno(aluno) {
    const response = await axios.put(`/alunos/${aluno.id}/`, aluno);
    return response.data;
  }

  async getAlunoPorId(id) {
    const response = await axios.get(`/alunos/${id}/`);
    return response.data;
  }
  
}
