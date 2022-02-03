import { Component} from "@angular/core";
import { getUserFromAPI } from "src/app/services/trainerAPI/trainerAPI";



@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

    userName:string = ''

    public handleUser = async (userName:string) => {
        const [error, user] = await getUserFromAPI(userName)
        console.log("ERR", error)
        console.log("USER", user)
    }

    public handleClick = () => {
        this.handleUser(this.userName)
    }
    
}
