import { ref } from 'vue';
import { defineStore } from 'pinia';
import ConselhoClasseService from '@/services/conselhoClasse';

const conselhoClasseService = new ConselhoClasseService();

export const useConselhoClassseStore = defineStore('conselhoClasse', () => {
  const concelhoClasse = ref([]);

  async function getConcelhoClasse() {
    try {
      const response = await conselhoClasseService.getConcelhoClasse();
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
  //     await getConcelhoClasse();
  //   } catch (error) {
  //     console.error('Erro ao adicionar conselhoClasse:', error);
  //   }
  // }

  async function atualizarConcelhoClasse(conselhoClasse) {
    try {
      await conselhoClasseService.atualizarConcelhoClasse(conselhoClasse);
      await getConcelhoClasse();
    } catch (error) {
      console.error('Erro ao atualizar conselhoClasse:', error);
    }
  }

  // async function excluirAluno(id) {
  //   try {
  //     await conselhoClasseService.excluirAluno(id);
  //     await getConcelhoClasse();
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
    getConcelhoClasse,
    atualizarConcelhoClasse,
    getConselhoClassePorId,
  };
});
