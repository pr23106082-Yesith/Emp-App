import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageEmpComponent } from './page/manage-emp/manage-emp.component';
import { ViewAllEmpComponent } from './page/view-all-emp/view-all-emp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ManageEmpComponent,ViewAllEmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emp-app';
}
