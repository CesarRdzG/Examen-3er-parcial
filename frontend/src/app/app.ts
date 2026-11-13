import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NotaService } from './services/nota-service';
import { NoteCard } from './components/note-card/note-card';

@Component({
  imports: [RouterOutlet, NoteCard, ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');

  private notaService = inject(NotaService);
  public notas = this.notaService.notes;

  public noteForm = new FormGroup({
    titulo: new FormControl('', { nonNullable: true }),
    contenido: new FormControl('', { nonNullable: true }),
  });

  ngOnInit(): void {
    this.notaService.fetchUser();
  }

  onSubmit(): void {
    this.notaService.createNote(this.noteForm.getRawValue());
    this.noteForm.reset();
  }
}
