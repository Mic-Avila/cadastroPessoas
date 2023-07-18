import { Pessoa } from './../../shared/models/pessoa.model';
import { Injectable } from '@angular/core';



const LS_CHAVE: string = "pessoas"


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listarTodos(){
    const pessoas = localStorage[LS_CHAVE];
    return pessoas ? JSON.parse(pessoas) : []
  }

  inserir(pessoa: Pessoa){
    //Obtem a lista completa de pessoa
    const pessoas = this.listarTodos()
    
    //seta o id com base do time da data em segundos
    pessoa.id = new Date().getTime()

    //adiciona no final da lista a pessoa que veio como parametro
    pessoas.push(pessoa)

    //armazena novamente o valor para denntro do localstorage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas)
  }

  buscarPorId(id: number): Pessoa | undefined{
    //busca todas as pessoas armazenadas no localstorage
    const pessoas: Pessoa[] = this.listarTodos()

    //retorna a pessoa tem tem o mesmo id, que o id passado como parametro.
    return pessoas.find(pessoa => pessoa.id === id)

  }


  atualizar(pessoa: Pessoa){
    const pessoas: Pessoa[] = this.listarTodos()
  
    //pecorre a lista de pessoas
    //Quando encontra a pessoa com mesmo id, altera a lista na posição que o item foi encontrado

    pessoas.forEach((objAtual, index, listaDePessoas) => {
      if (pessoa.id  === objAtual.id){
        listaDePessoas[index] = pessoa
      }
    })
    //salva novamente no localStorage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas)
  }


  remover(id: Number){
    let pessoas: Pessoa[] = this.listarTodos()

    //retorno para pessoas tudo que foir diferente do id filtrado. Excluindo do novo array o id
    pessoas = pessoas.filter(pessoa => pessoa.id !== id)

    localStorage[LS_CHAVE] = JSON.stringify(pessoas)
  }

}
