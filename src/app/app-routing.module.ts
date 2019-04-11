import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";


const appRoutes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item', component: ItemComponent },
    // { path: '**', component: PageNotFoundComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

//Se utiliza useHash para poner un # antes de la ruta en el navegador
//cuando no se tiene acceso al .htaccess para que lo cargue el index
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{ }