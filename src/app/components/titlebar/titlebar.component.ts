import { Component} from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-titlebar',
    templateUrl: './titlebar.component.html',
    styleUrls: ['./titlebar.component.css']
})

export class TitlebarComponent {
    catalogueNav = 'Pokemon Catalogue'
    trainerNav = 'Trainer Profile'

    constructor(private _router: Router) {}

    consoleLog = (value:string) => {
        console.log(value)
    }

    navigate(path:string){
        this._router.navigate([path]);
    }

    logOut(): void {
        localStorage.clear()
        this._router.navigate(['login'])
    }

    currentRoute() {
        let route = this._router.url;
        if(route === "/trainer"){
            return true
        }
        else if(route === "/catalogue"){
            return false
        }
        else return true
    }

}