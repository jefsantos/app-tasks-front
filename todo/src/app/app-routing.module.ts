import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { CreateComponent } from './components/create/create.component';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { UpdateUsersComponent } from './components/update-users/update-users.component';

import { UpdateComponent } from './components/update/update.component';
import { UsersAllComponent } from './components/users-all/users-all.component';

const routes: Routes = [
{
path:'',
component: ReadAllComponent

},{
  path:'finalizados',
  component: FinalizadosComponent
},{

  path: 'create',
  component: CreateComponent
},{

  path:'update/:id',
  component: UpdateComponent
},  {

    path:'updateUser/:id',
    component: UpdateUsersComponent


  },

{

path:'kanban',
component: KanbanComponent


},{

path:'usersAll',
component: UsersAllComponent

},


{

  path:'createUsers',
  component: CreateUsersComponent
  
  }
  







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
