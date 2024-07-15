import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() item: any;
  @Output() itemSelected = new EventEmitter<any>();
  @Output() itemDeleted = new EventEmitter<number>();

  selectItem() {
    this.itemSelected.emit(this.item);
  }

  deleteItem() {
    this.itemDeleted.emit(this.item.id);
  }
}
