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

  // async function getProdutosByCategoria(categoria_id) {
  //   try {
  //     concelhoClasse.value = await conselhoClasseService.getProdutosByCategoria(categoria_id);
  //   } catch (error) {
  //     console.error('Erro ao buscar concelhoClasse por categoria:', error);
  //   }
  // }

  // async function adicionarAluno(conselhoClasse) {
  //   try {
  //     const response = await conselhoClasseService.createAluno(conselhoClasse);
  //     concelhoClasse.value.push(response);
  //     await getConselhoClasse();
  //   } catch (error) {
  //     console.error('Erro ao adicionar conselhoClasse:', error);
  //   }
  // }

  async function atualizarConselhoClasse(conselhoClasse) {
    try {
      await conselhoClasseService.atualizarConselhoClasse(conselhoClasse);
      await getConselhoClasse();
    } catch (error) {
      console.error('Erro ao atualizar conselhoClasse:', error);
    }
  }

  // async function excluirAluno(id) {
  //   try {
  //     await conselhoClasseService.excluirAluno(id);
  //     await getConselhoClasse();
  //   } catch (error) {
  //     console.error('Erro ao excluir conselhoClasse:', error);
  //   }
  // }
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
