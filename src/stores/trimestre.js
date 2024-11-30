import { ref } from 'vue';
import { defineStore } from 'pinia';
import TrimestreService from '@/services/trimestre';

const trimestreService = new TrimestreService();

export const useTrimestreStore = defineStore('trimestre', () => {
  const trimestres = ref([]);

  async function getTrimestres() {
    try {
      const response = await trimestreService.getTrimestres();
      trimestres.value = response
    } catch (error) {
      console.error('Erro ao buscar trimestres:', error);
    }
  }

  return {
    trimestres,
    getTrimestres,
  };
});
