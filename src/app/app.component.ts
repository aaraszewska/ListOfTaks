import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTask: string;
  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  add() {
    this.tasksList.push(this.newTask);
    this.newTask = '';
    console.log(this.tasksList);
  }
  remove(tasks: string) {
    this.tasksList = this.tasksList.filter( e => e !== tasks);
  }

  done(tasks: string) {
    this.tasksDone.push(tasks);
    this.remove(tasks);
 }
  }

 


  


  

  
