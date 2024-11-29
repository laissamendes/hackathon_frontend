import { ref } from 'vue';
import { defineStore } from 'pinia';
import OcorrenciaService from '@/services/ocorrencia';

const ocorrenciaService = new OcorrenciaService();

export const useOcorrenciaStore = defineStore('ocorrencia', () => {
  const concelhoClasse = ref([]);

  async function getOcorrencia() {
    try {
      const response = await ocorrenciaService.getOcorrencia();
      concelhoClasse.value = response.results;
    } catch (error) {
      console.error('Erro ao buscar concelhoClasse:', error);
    }
  }

  // async function getProdutosByCategoria(categoria_id) {
  //   try {
  //     concelhoClasse.value = await ocorrenciaService.getProdutosByCategoria(categoria_id);
  //   } catch (error) {
  //     console.error('Erro ao buscar concelhoClasse por categoria:', error);
  //   }
  // }

  // async function adicionarAluno(ocorrencia) {
  //   try {
  //     const response = await ocorrenciaService.createAluno(ocorrencia);
  //     concelhoClasse.value.push(response);
  //     await getOcorrencia();
  //   } catch (error) {
  //     console.error('Erro ao adicionar ocorrencia:', error);
  //   }
  // }

  async function atualizarOcorrencia(ocorrencia) {
    try {
      await ocorrenciaService.atualizarOcorrencia(ocorrencia);
      await getOcorrencia();
    } catch (error) {
      console.error('Erro ao atualizar ocorrencia:', error);
    }
  }

  // async function excluirAluno(id) {
  //   try {
  //     await ocorrenciaService.excluirAluno(id);
  //     await getOcorrencia();
  //   } catch (error) {
  //     console.error('Erro ao excluir ocorrencia:', error);
  //   }
  // }
  async function getOcorrenciaPorId(id) {
    try {
      const ocorrencia = await ocorrenciaService.getOcorrenciaPorId(id);
      return ocorrencia;
    } catch (error) {
      console.error('Erro ao buscar ocorrencia por ID:', error);
    }
  }


  return {
    getOcorrencia,
    atualizarOcorrencia,
    getOcorrenciaPorId,
  };
});
