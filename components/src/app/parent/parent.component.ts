import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,FormsModule,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  filteredItems = this.items;
  filterText = '';
  sortDirection = 'asc';

  onItemSelected(item: any) {
    console.log('Item selected:', item);
  }

  onItemDeleted(itemId: number) {
    this.items = this.items.filter(item => item.id !== itemId);
    this.applyFilterAndSort();
  }

  applyFilterAndSort() {
    let tempItems = [...this.items];
    if (this.filterText) {
      tempItems = tempItems.filter(item =>
        item.name.toLowerCase().includes(this.filterText.toLowerCase())
      );
    }
    tempItems.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return this.sortDirection === 'asc' ? comparison : -comparison;
    });
    this.filteredItems = tempItems;
  }
}
