import { HeaderComponent } from './header/header.component';
import { MatToolbarModule, MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        MatToolbarModule,
    ],
    exports:[
        HeaderComponent,
    ],
    providers: [],
})
export class CoreModule { }
