import { Component} from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    content = 'Trainer App'
    contributors = ["@JuliusHuttunen", "@bfg122 (Sasu Korhonen)"]
}