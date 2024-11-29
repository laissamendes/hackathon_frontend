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

  // async function getProdutosByCategoria(categoria_id) {
  //   try {
  //     produtos.value = await alunoService.getProdutosByCategoria(categoria_id);
  //   } catch (error) {
  //     console.error('Erro ao buscar produtos por categoria:', error);
  //   }
  // }

  // async function adicionarAluno(aluno) {
  //   try {
  //     const response = await alunoService.createAluno(aluno);
  //     produtos.value.push(response);
  //     await getAluno();
  //   } catch (error) {
  //     console.error('Erro ao adicionar aluno:', error);
  //   }
  // }

  async function atualizarAluno(aluno) {
    try {
      await alunoService.atualizarAluno(aluno);
      await getAluno();
    } catch (error) {
      console.error('Erro ao atualizar aluno:', error);
    }
  }

  // async function excluirAluno(id) {
  //   try {
  //     await alunoService.excluirAluno(id);
  //     await getAluno();
  //   } catch (error) {
  //     console.error('Erro ao excluir aluno:', error);
  //   }
  // }
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
