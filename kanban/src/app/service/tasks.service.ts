import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  // GET
  listar(): Observable<Tasks[]>{
    return this.http.get<Tasks[]>('http://localhost:3000/tasks')
  }

  // POST
  inserir(task: Tasks): Observable<Tasks>{
    return this.http.post<Tasks>('http://localhost:3000/tasks', task);
  }

  // PUT
  atualizar(task: Tasks): Observable<Tasks>{
    return this.http.put<Tasks>(`http://localhost:3000/tasks/${task.id}`, task);
  }

  // DELETE
  excluir(id: number): Observable<any>{
    return this.http.delete(`http://localhost:3000/tasks/${id}`);

  }
}
