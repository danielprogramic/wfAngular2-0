//import for use in core angular.
import {Component} from '@angular/core';

// create metadata decor
@Component({
    selector: 'pm-app',
   template: `
    <div><h1>{{pageTitle}}</h1>
        <pm-products> </pm-products>
    </div>
    `
})

//define your class
export class AppComponent{
    pageTitle: string = 'Meu Primeiro componente.';

}