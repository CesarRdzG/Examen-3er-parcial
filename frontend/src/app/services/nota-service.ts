import { inject, Service, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../interfaces/note.interface';

@Service()
export class NotaService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8082/api/notes';

    private _notes: WritableSignal<Note[]> = signal([]);

    public notes = this._notes.asReadonly();

    fetchUser(): void {
        this.http.get<Note[]>(this.apiUrl).subscribe({
            next: (response: Note[]) => {
                console.log(response);
                this._notes.set(response);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => { }
        })
    }

    createNote(note: Note): void {
        this.http.post<{ ok: boolean; msg: string }>(this.apiUrl, note).subscribe({
            next: (response) => {
                console.log(response);
                this._notes.update((notes) => [...notes, note]);
            },
            error: (error) => {
                console.error(error);
            }
        });
    }
}
