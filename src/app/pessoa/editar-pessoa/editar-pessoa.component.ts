import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  @ViewChild("formPessoa") formPessoa!: NgForm
  pessoa!: Pessoa;
  
  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ){ }

  ngOnInit(): void {
    //snapshot.params do activateRoute da acesso aos parametros passados, pecorre o routerstate  ((lib do angular))
    let id = Number(this.route.snapshot.params['id'])

    //apos oberter o id da seleção de tela que o usuario selecionou busca a pessoa pelo id
    const res = this.pessoaService.buscarPorId(id)

    if (res !== undefined){
      this.pessoa = res
    }else{
      throw new Error(`Pessoas não encontrada: id = ${id}`)
    }
    
  }

  atualizar(){
    if(this.formPessoa.form.valid){
      this.pessoaService.atualizar(this.pessoa)
      this.router.navigate(['/pessoas'])
    }
  }

}
