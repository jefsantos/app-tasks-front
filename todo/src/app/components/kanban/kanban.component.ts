import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardKanban } from 'src/app/models/BoardKanban';
import { Colunas } from 'src/app/models/Colunas';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

  closed = 0 ;
  list: Todo[]=[];
  listFinish: Todo[]=[];
  listCount: any;

  ngOnInit(): void {

    this.findAll();
  }


  constructor(private service:TodoService, private usersService: UsersService,private router: Router) { }

 

  eventPredicate(item:CdkDrag<string>){
    
    return item.data=="teste";
    
   
  }

  voltarReadAll():void{
    this.router.navigate(['']);
  }

  voltarUsersAll():void{
    this.router.navigate(['/usersAll']);
  }

  delete(id: any):void{
    this.service.delete(id).subscribe((resposta)=>{
      if(resposta===null){
        this.service.message('Tarefa deletada com sucesso')

        this.list = this.list.filter(todo=>todo.id !==id);
      }
    })

  }

  finalizar(item: Todo):void{
    item.finalizado= true
    this.service.update(item).subscribe(()=>{
      this.list = this.list.filter(todo=>todo.id !==item.id);
        this.closed++;
  
    })
  
  }

  findAll():void{

    this.service.findAll().subscribe((resposta)=>{
      resposta.forEach(todo=>{
        if(todo.finalizado){
          this.listFinish.push(todo);
        }else{
          this.list.push(todo);
        }

      })
      this.closed= this.listFinish.length
    
    })

  }

}
