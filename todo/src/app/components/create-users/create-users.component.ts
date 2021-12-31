import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {



  user: Users= {

    nome:'',
    perfil:'',
    telefone:'',
    email:''

  }

  constructor(private router:Router, private service: UsersService) { }

  ngOnInit(): void {

  }

  create(): void{
    /*this.formataData();*/
    this.service.create(this.user).subscribe((resposta)=>{
    this.service.message('Todo Criado com Sucesso');
    this.router.navigate(['/usersAll']);
  }, err =>{
    this.service.message('Todo Criado sem Sucesso - FALHA');
    this.router.navigate(['/usersAll']);
  })
  }

  cancelar():void{
    this.router.navigate([''])
  }

 /* formataData(): void{
    let data = new Date (this.todo.datafinalizar)
    this.todo.datafinalizar = `${data.getDate()}/${data.getMonth() +1 }/${data.getFullYear()}`
  }*/

}
