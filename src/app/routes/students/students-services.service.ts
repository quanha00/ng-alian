import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student.model';

const baseUrl = `https://620d19b2b573632593a66421.mockapi.io/studen`;

@Injectable({ providedIn: 'root' })
export class StudentServices {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Student[]>(baseUrl);
    }

    getById(id: string) {
        return this.http.get<Student>(`${baseUrl}/${id}`);
    }

    create(params: any) {
        return this.http.post(baseUrl, params);
    }

    update(params: any, id: string) {
        return this.http.put(`${baseUrl}/${id}`, params);
    }

    delete(id: string) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
}