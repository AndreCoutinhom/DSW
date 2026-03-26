import * as repo from '../repository/obraRepository.js';

export async function adicionarObra(obra) {

  if (obra.estoque < 0) {
    throw new Error("O estoque não pode ser negativo");
  }

  return await repo.salvarObra(obra);
}

export async function listarObras() {
  return await repo.listarObras();
}

export async function buscarObraPorId(id) {
  return await repo.buscarObraPorId(id);
}

export async function buscarObraPorAspecto(titulo, autor, estoqueMinimo, publicacaoInicio, publicacaoFim) {
  return await repo.buscarObraPorAspecto(titulo, autor, estoqueMinimo, publicacaoInicio, publicacaoFim);
}

export async function alterarObra(id, obra) {
  return await repo.alterarObra(id, obra);
}

export async function deletarObra(id) {
  return await repo.deletarObra(id);
}