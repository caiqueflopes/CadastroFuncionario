import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CadFunc } from '../models/cadastro-func';
import { CadastroFuncService } from '../services/cadastro-func.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  @Input() funcionario ?: CadFunc;
  @Output() funcionarioUpdated = new EventEmitter<CadFunc[]>();
  showEsteContainer: boolean = true;
  showMainContainer: boolean = false;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  cpfFormControl = new FormControl('', [Validators.required]);
  
  
  constructor(private cadastroFuncService: CadastroFuncService) { }

  ngOnInit(): void {}
  
  createFuncionario(funcionario:CadFunc)
  {
    this.cadastroFuncService
    .createFuncionario(funcionario)
    .subscribe((funcionarios:CadFunc[])=>this.funcionarioUpdated.emit(funcionarios))
    
    setTimeout(function(){
      window.location.reload();
    }, 100);
    
  }
  updateFuncionario(funcionario:CadFunc)
  {
    this.cadastroFuncService
    .updateFuncionario(funcionario)
    .subscribe((funcionarios:CadFunc[])=>this.funcionarioUpdated.emit(funcionarios))
   
    setTimeout(function(){
      window.location.reload();
    }, 100);
    
  }
  deleteFuncionario(funcionario:CadFunc)
  {
    this.cadastroFuncService
    .deleteFuncionario(funcionario)
    .subscribe((funcionarios:CadFunc[])=>this.funcionarioUpdated.emit(funcionarios))
    
    setTimeout(function(){
      window.location.reload();
    }, 100);
    
  }

  isValidCPF(cpf) {
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true
}
}
