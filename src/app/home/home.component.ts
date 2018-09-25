import { Component, Input, NgZone, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { PdfViewerComponent } from "ng2-pdf-viewer";

@Component({
    template: require("./home.component.html"),
    styles: [
        require("./home.component.css")
    ]
})
export class HomeComponent {
    @Input()
    private source: string = "pdf/Python.pdf";

    @Input()
    private page: number = 1;

    @Input()
    private zoom: number = 1.5;

    @Input()
    private showAll: true;

    private zoomOut() {
        this.zoom = this.zoom - 0.25;
    }

    private zoomIn() {
        this.zoom = this.zoom + 0.25;
    }
}

@NgModule({
    declarations: [HomeComponent, PdfViewerComponent],
    imports: [BrowserModule, CommonModule, FormsModule]
})
export class HomeModule {
}