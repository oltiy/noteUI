import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.css"],
})
export class NoteComponent {
  @Input() note;
  @Input() placeholderText;
  @Output() removeNote = new EventEmitter();
  @Output() updateNote = new EventEmitter();
  btnVisible: boolean = false;

  editNote(note) {
    this.updateNote.emit(note);
  }
  deleteNote(note) {
    this.removeNote.emit(note.id);
  }
}
