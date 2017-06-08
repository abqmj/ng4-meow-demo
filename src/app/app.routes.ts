import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home.component";
import {AboutComponent} from "./components/about.component";
import {PostComponent} from "./components/post.component";
import {NavbarComponent} from "./components/navbar.component";


export const allAppComponents = [HomeComponent, AboutComponent, PostComponent, NavbarComponent];

export const routes: Routes = [
	{path: "post", component: PostComponent},
	{path: "about", component: AboutComponent},
	{path: "", component: HomeComponent},
	{path: "**", redirectTo: ""}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);