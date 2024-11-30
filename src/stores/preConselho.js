import { ref } from 'vue';
import { defineStore } from 'pinia';
import PreConselhoService from '@/services/preConselho';

const preConselhoService = new PreConselhoService();

export const usePreConselhoStore = defineStore('preConselho', () => {
  const preConselho = ref([]);

  async function getPreConselho() {
    try {
      const response = await preConselhoService.getPreConselho();
      preConselho.value = response.results;
    } catch (error) {
      console.error('Erro ao buscar PreConselho:', error);
    }
  }

  async function atualizarPreConselho(preConselho) {
    try {
      await preConselhoService.atualizarPreConselho(preConselho);
    } catch (error) {
      console.error('Erro ao atualizar preConselho:', error);
    }
  }

  async function adicionarPreConselho(preConselho) {
    await preConselhoService.adicionarPreConselho(preConselho)
}


  return {
    getPreConselho,
    adicionarPreConselho,
    atualizarPreConselho,
  };
});
