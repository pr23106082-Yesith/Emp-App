import { Routes } from '@angular/router';
import { ManageEmpComponent } from './page/manage-emp/manage-emp.component';
import { ViewAllEmpComponent } from './page/view-all-emp/view-all-emp.component';

export const routes: Routes = [

    {
        path : "manage-emp",
        component : ManageEmpComponent
    },
    {
        path : "view-all-emp",
        component : ViewAllEmpComponent
    }
];
