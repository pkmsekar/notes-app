import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "", redirectTo: "/notes", pathMatch: "full" },
  {
    path: "categories",
    loadChildren: "app/categories/categories.module#CategoriesModule"
  },
  {
    path: "notes",
    loadChildren: "app/notes/notes.module#NotesModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
