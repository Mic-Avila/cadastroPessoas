import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from 'src/app/shared/models/pessoa.model';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  pessoas: Pessoa[] = []



 constructor(private pessoaService: PessoaService){ }

 ngOnInit(){

  this.pessoas = this.listarTodos()

 }

 listarTodos(){
  return this.pessoaService.listarTodos()

 }


}
