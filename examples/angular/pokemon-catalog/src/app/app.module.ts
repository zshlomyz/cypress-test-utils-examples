import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokemonCatalogComponent } from "./components/pokemon-catalog/pokemon-catalog.component";
import { PokemonCatalog } from "./components/pokemon-catalog/pokemon-catalog.container";
import { PokemonImageComponent } from "./components/pokemon-image/pokemon-image.component";

@NgModule({
  declarations: [
    AppComponent,
    PokemonCatalogComponent,
    PokemonCatalog,
    PokemonImageComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
