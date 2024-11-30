import { ref } from 'vue';
import { defineStore } from 'pinia';
import DisciplinaService from '@/services/disciplina';

const disciplinaService = new DisciplinaService();

export const useDisciplinaStore = defineStore('disciplina', () => {
  const disciplina = ref([]);

  async function getDisciplina() {
    try {
      const response = await disciplinaService.getDisciplina();
      disciplina.value = response.results;
    } catch (error) {
      console.error('Erro ao buscar disciplina:', error);
    }
  }

  return {
    disciplina,
    getDisciplina,
  };
});
