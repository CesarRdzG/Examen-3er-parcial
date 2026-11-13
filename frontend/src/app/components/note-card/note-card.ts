import { Component, input } from '@angular/core';
import { Note } from '../../interfaces/note.interface';

@Component({
  imports: [],
  selector: 'app-note-card',
  styleUrl: './note-card.css',
  templateUrl: './note-card.html',
})
export class NoteCard {
  note = input.required<Note>();
}
