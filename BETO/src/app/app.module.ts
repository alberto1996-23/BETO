import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NavComponent } from "./Nav/Nav.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { InterestsComponent } from "./interests/interests.component";
import { ContactComponent } from "./contact/contact.component";
import { MissionComponent } from "./mission/mission.component";

@NgModule({
    declarations: [AppComponent, NavComponent, AboutMeComponent, InterestsComponent, ContactComponent, MissionComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule]
}) 
export class AppModule {}