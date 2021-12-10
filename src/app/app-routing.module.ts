import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {CollatorComponent} from './pages/collator/collator.component';
import {DateTimeFormatComponent} from './pages/date-time-format/date-time-format.component';
// import {ListFormatComponent} from './pages/list-format/list-format.component';
// import {LocalesComponent} from './pages/locales/locales.component';
// import {NumberFormatComponent} from './pages/number-format/number-format.component';
// import {PluralRulesComponent} from './pages/plural-rules/plural-rules.component';
// import {RelativeTimeFormatComponent} from './pages/relative-time-format/relative-time-format.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'collator', component: CollatorComponent},
    {path: 'date-time-format', component: DateTimeFormatComponent},
    // { path : 'list-format' , component:ListFormatComponent  },
    // { path : 'locales' , component:LocalesComponent  },
    // { path : 'number-format' , component:NumberFormatComponent  },
    // { path : 'plural-rules' , component:PluralRulesComponent  },
    // { path : 'relative-time-format' , component:RelativeTimeFormatComponent  },
    {path: '*', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
