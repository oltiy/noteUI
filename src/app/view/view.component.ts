import { Component } from "@angular/core";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"],
})
export class ViewComponent {
  notes = [
    { id: 0, title: "Note Title", text: "" },
    { id: 1, title: "Note2", text: "Text exists" },
    { id: 2, title: "Note3", text: "" },
  ];
  placeholderText = "Enter Title Here";

  updateNote(updatedNote) {
    this.notes.forEach((note) => {
      if (note.id === updatedNote.id) {
        note.title = updatedNote.title;
        note.text = updatedNote.text;
      }
    });
  }
  noteToRemove(noteId) {
    this.notes.forEach((note, idx) => {
      if (note.id === noteId) {
        this.notes.splice(idx, 1);
      }
    });
  }
}
