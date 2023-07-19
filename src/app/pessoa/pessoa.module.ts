import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaService } from './services/pessoa.service';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InserirPessoaComponent } from './inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { NumericoDirective } from '../shared/directives/numerico.directive';
import { NgxMaskModule, IConfig } from 'ngx-mask'


export const options: Partial<IConfig> | (()=> Partial<IConfig>) = {}

@NgModule({
  declarations: [
    ListarPessoaComponent,
    InserirPessoaComponent,
    EditarPessoaComponent,
    NumericoDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxMaskModule.forRoot()
  ],
  providers:[
    PessoaService
  ]
})
export class PessoaModule { }