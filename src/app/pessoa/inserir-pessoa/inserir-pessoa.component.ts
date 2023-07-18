import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})



export class InserirPessoaComponent implements OnInit {

  @ViewChild('formPessoa') formPessoa! : NgForm
  pessoa!: Pessoa

  constructor(
    private router: Router,
    private pessoaService: PessoaService,){}

  ngOnInit(): void {
    this.pessoa = new Pessoa()
  }

  inserir(){
    if(this.formPessoa.form.valid){
      this.pessoaService.inserir(this.pessoa)
      this.router.navigate(["/pessoas"])
    }
  }
}
