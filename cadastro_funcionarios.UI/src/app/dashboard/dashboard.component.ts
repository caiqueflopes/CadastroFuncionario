import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CadFunc } from 'app/models/cadastro-func';
import { CadastroFuncService } from 'app/services/cadastro-func.service';
import * as Chartist from 'chartist';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
//***********CFLOPES-INICIO
  title = 'cadastro_funcionarios.UI';
  funcionarios:CadFunc[]=[];
  funcionarioToEdit?:CadFunc;
  showMyContainer: boolean = false;
  showMyMainContainer: boolean = true;
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
  //***********CFLOPES-END
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  
}
