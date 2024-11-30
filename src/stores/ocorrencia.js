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
      console.error('Erro ao buscar ocorrencia:', error);
    }
  }


  async function atualizarOcorrencia(ocorrencia) {
    try {
      await ocorrenciaService.atualizarOcorrencia(ocorrencia);
      await getOcorrencia();
    } catch (error) {
      console.error('Erro ao atualizar ocorrencia:', error);
    }
  }


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
