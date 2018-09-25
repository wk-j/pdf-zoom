import "reflect-metadata"
import "zone.js/dist/zone"

import { NgModule, enableProdMode } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { LocationStrategy, HashLocationStrategy } from "@angular/common"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { HttpModule, BaseRequestOptions, RequestOptions } from "@angular/http"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent, HomeModule } from "./home/home.component";
import { AppComponent } from "./app.component";

function getRoutes(): Routes {
    return [
        { path: "", redirectTo: "home", pathMatch: "full" },
        { path: "home", component: HomeComponent },
    ];
}

var routes = getRoutes();

enableProdMode()

class CustomRequestOptions extends BaseRequestOptions {
    constructor() {
        super();
    }
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HomeModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: RequestOptions, useClass: CustomRequestOptions }
    ]
})
export class AppModule {
    constructor() {

    }
}

platformBrowserDynamic().bootstrapModule(AppModule)