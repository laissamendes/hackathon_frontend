import { ref } from 'vue';
import { defineStore } from 'pinia';
import AlunoService from '@/services/aluno';

const alunoService = new AlunoService();

export const useAlunoStore = defineStore('aluno', () => {
  const produtos = ref([]);

  async function getAluno() {
    try {
      const response = await alunoService.getAluno();
      produtos.value = response.results;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  }

  async function atualizarAluno(aluno) {
    try {
      await alunoService.atualizarAluno(aluno);
      await getAluno();
    } catch (error) {
      console.error('Erro ao atualizar aluno:', error);
    }
  }


  async function getAlunoPorId(id) {
    try {
      const aluno = await alunoService.getAlunoPorId(id);
      return aluno;
    } catch (error) {
      console.error('Erro ao buscar aluno por ID:', error);
    }
  }


  return {
    getAluno,
    atualizarAluno,
    getAlunoPorId,
  };
});
