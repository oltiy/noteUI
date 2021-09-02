import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoteComponent } from "./note/note.component";
import { ViewComponent } from "./view/view.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [AppComponent, NoteComponent, ViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
