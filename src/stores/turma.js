import { ref } from 'vue';
import { defineStore } from 'pinia';
import TurmaService from '@/services/turma';

const turmaService = new TurmaService();

export const useTurmaStore = defineStore('turma', () => {
  const turmas = ref([]);

  async function getTurmas() {
    try {
      const response = await turmaService.getTurmas();
      turmas.value = response.results;
    } catch (error) {
      console.error('Erro ao buscar turmas:', error);
    }
  }

  return {
    turmas,
    getTurmas,
  };
});
