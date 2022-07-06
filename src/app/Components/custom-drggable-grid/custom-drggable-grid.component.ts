import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-drggable-grid',
  templateUrl: './custom-drggable-grid.component.html',
  styleUrls: ['./custom-drggable-grid.component.scss']
})
export class CustomDrggableGridComponent implements OnInit {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  periods = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail'];
  Subjects = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail'];
  Days = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail'];

  lists = [this.todo, this.periods, this.Days]

  constructor() { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log("🚀 ~ file: custom-drggable-grid.component.ts ~ line 16 ~ CustomDrggableGridComponent ~ drop ~ event", event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
