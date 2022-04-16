import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';


import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
 
 filteredOptions: Observable<string[]> | undefined;


  todo: Todo= {

    titulo:'',
    descricao:'',
    datafinalizar:new Date(),
    finalizado:false

  }

  constructor(private router:Router, private service: TodoService) { }

  ngOnInit(): void {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  create(): void{
    this.formataData();
    this.service.create(this.todo).subscribe((resposta)=>{
    this.service.message('Todo Criado com Sucesso');
    this.router.navigate(['']);
  }, err =>{
    this.service.message('Todo Criado sem Sucesso - FALHA');
    this.router.navigate(['']);
  })
  }

  cancelar():void{
    this.router.navigate([''])
  }

  formataData(): void{
    let data = new Date (this.todo.datafinalizar)
    this.todo.datafinalizar = `${data.getDate()}/${data.getMonth() +1 }/${data.getFullYear()}`
  }

}
