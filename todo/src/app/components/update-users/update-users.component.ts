import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { Users } from 'src/app/models/users';
import { TodoService } from 'src/app/services/todo.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {

  


  users: Users= {

    nome:'',
    senha:'',
    perfil:'',
    email:'',
    telefone:'',

  }

  constructor(private router:Router, private service: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.users.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  
  }


findById(): void{
  this.service.findById(this.users.id).subscribe((resposta)=>{
this.users = resposta;

  })

}


update():void{

  this.service.update(this.users).subscribe((resposta)=>{
 this.service.message('Informações atualizadas com sucesso')
 this.router.navigate([''])


  },err =>{
    this.service.message('FALHA NA ATUALIZAÇÃO')
    this.router.navigate([''])

  })
}

  cancelar():void{
    this.router.navigate([''])
  }



}

