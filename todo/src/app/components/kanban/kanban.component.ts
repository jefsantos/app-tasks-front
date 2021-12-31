import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardKanban } from 'src/app/models/BoardKanban';
import { Colunas } from 'src/app/models/Colunas';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

  boardKanban : BoardKanban = new BoardKanban('teste Classe', [

    new Colunas('orcado', [
      "teste_Ideias",
      "this test is ideia",
      "jhjhsjhjhsj"
    ]),

    new Colunas('comprado',[
      "teste Doing1",
      "foo",
      "teste3_Doing3"
    ]),


     new Colunas('entregue', [

      "teste Done1",
      "Teste Done 2",
      "teste Done 3"

     ]),

     new Colunas('notaFiscal', [

      "NOTA Done1",
      "NOTA Done 2",
      "NOTA Done 3"

     ])




  ]);

  ngOnInit(): void {
  }

  orcado = [
    'Orçado1',
    'Orçado2',
    'Orçado3',
    'Orçado4'
  ];


  comprado = [
    'Comprado1',
    'Comprado2',
    'Comprado3',
    'Comprado4'
  ];

  entregue=[
    'Entregue1',
    'Entregue1',
    'Entregue1',
    'Entregue1'
  ];


  notaFiscal=[
    'Nota',
    'Nota1',
    'Nota2',
    'Nota3'
  ];


  drop(event: CdkDragDrop<string[]>){
    console.log('from +' + event.previousContainer.id + ' to: '
    + event.container.id);

    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex,
        event.currentIndex);
    }else{
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  constructor(private router: Router) { }

 

  eventPredicate(item:CdkDrag<string>){
    
    return item.data=="teste";
    
   
  }

  voltarReadAll():void{
    this.router.navigate(['']);
  }

  voltarUsersAll():void{
    this.router.navigate(['/usersAll']);
  }

}
