import { ref } from 'vue';
import { defineStore } from 'pinia';
import ConselhoClasseService from '@/services/conselhoClasse';

const conselhoClasseService = new ConselhoClasseService();

export const useConselhoClassseStore = defineStore('conselhoClasse', () => {
  const concelhoClasse = ref([]);

  async function getConselhoClasse() {
    try {
      const response = await conselhoClasseService.getConselhoClasse();
      concelhoClasse.value = response.results;
    } catch (error) {
      console.error('Erro ao buscar concelhoClasse:', error);
    }
  }

  async function atualizarConselhoClasse(conselhoClasse) {
    try {
      await conselhoClasseService.atualizarConselhoClasse(conselhoClasse);
      await getConselhoClasse();
    } catch (error) {
      console.error('Erro ao atualizar conselhoClasse:', error);
    }
  }

  async function getConselhoClassePorId(id) {
    try {
      const conselhoClasse = await conselhoClasseService.getConselhoClassePorId(id);
      return conselhoClasse;
    } catch (error) {
      console.error('Erro ao buscar conselhoClasse por ID:', error);
    }
  }


  return {
    getConselhoClasse,
    atualizarConselhoClasse,
    getConselhoClassePorId,
  };
});
