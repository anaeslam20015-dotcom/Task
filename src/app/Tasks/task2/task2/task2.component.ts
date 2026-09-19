import { Component } from '@angular/core';
import { Task2Service } from '../../service/task-2/task-2.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.css',
})
export class Task2Component {
  dataEmployees: any[] = [];
  searchName: any[] = [];
  constructor(private serve: Task2Service) {}
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.serve.get().subscribe({
      next: (data) => {
        this.dataEmployees = data;
        this.searchName = this.dataEmployees;
        console.log(this.searchName);
      },
      error: () => {
        alert('NoData');
      },
    });
  }

  Search(value: string) {
    const valueSearch = this.dataEmployees.filter((item:any) => {
      return item.name.toUpperCase().includes(value.toUpperCase())
    });
    this.searchName = valueSearch;
  }
}
