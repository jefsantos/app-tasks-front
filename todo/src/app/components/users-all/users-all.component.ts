import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { TodoService } from 'src/app/services/todo.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-all',
  templateUrl: './users-all.component.html',
  styleUrls: ['./users-all.component.css']
})
export class UsersAllComponent implements OnInit {

  list: Users[]=[];

  constructor(private service: UsersService, serviceRead: TodoService, private router: Router) { }

  ngOnInit(): void {

    this.findAll();

  }

  findAll() {
    this.service.findAll().subscribe(data => {
      this.list = data;

      if(data.length==1){
        this.service.message(data.length +'Usuario(s) Cadastrado(s)');
      }else if(data.length< 1){
        alert('não há users cadastrados');
      }

    });


  }


  delete(id: any):void{
    this.service.delete(id).subscribe((resposta)=>{
      if(resposta===null){
        this.service.message('Tarefa deletada com sucesso')

        this.list = this.list.filter(users=>users.id !==id);
      }
    })

  }






  
  telaCadastro():void{
    this.router.navigate(['createUsers'])

  }





}