import { Component} from '@angular/core';
import { CadFunc } from './models/cadastro-func';
import { CadastroFuncService } from './services/cadastro-func.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro_funcionarios.UI';
  funcionarios:CadFunc[]=[];
  funcionarioToEdit?:CadFunc;
  
  constructor(private cadastroFuncionarioService:CadastroFuncService){}
  
  ngOnInit():void{
    this.cadastroFuncionarioService
    .getFuncionarios()
    .subscribe((result:CadFunc[])=>(this.funcionarios=result));
  }

  updateFuncionarioList(funcionarios:CadFunc[])
  {
    this.funcionarios=funcionarios;
  }

  initNewFuncionario(){
    this.funcionarioToEdit=new CadFunc();
  }

  editFuncioanrio(funcionario:CadFunc){
    this.funcionarioToEdit = funcionario;
  }
  
}