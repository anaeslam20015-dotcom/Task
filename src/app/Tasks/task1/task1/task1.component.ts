import { Component } from '@angular/core';
import { Task1Service } from '../../service/task-1/task-1.service';

@Component({
  selector: 'app-task1',
  standalone: true,
  imports: [],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.css',
})
export class Task1Component {
  constructor(private serve: Task1Service) {}
  movies!: any;
  ngOnInit() {
    this.getApi();
  }

  /* get Api */
  getApi() {
    this.serve.get().subscribe({
      next: (data) => {
        this.movies = data;
        this.getMovies = this.movies;
      },
      error: () => {
        alert('No Data');
      },
    });
  }

  /* Search About Movies */
  getMovies!: any;
  Search(value: string) {
    const SearchM = this.movies.filter((movie: any) => {
      return movie.title.toLowerCase().includes(value.toLocaleLowerCase());
    });
    this.getMovies = SearchM;
  }
}
