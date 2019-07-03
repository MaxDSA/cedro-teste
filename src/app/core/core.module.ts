import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        MatToolbarModule
    ],
    exports:[
        HeaderComponent
    ],
    providers: [],
})
export class CoreModule { }
