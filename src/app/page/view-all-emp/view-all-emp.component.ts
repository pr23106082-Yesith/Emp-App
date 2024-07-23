import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all-emp',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-all-emp.component.html',
  styleUrl: './view-all-emp.component.css'
})
export class ViewAllEmpComponent {

public employeeList :any;

constructor(private http : HttpClient){
  this.loadAllEmployee();
}

  loadAllEmployee(){
    this.http.get("http://localhost:8080/emp-controller/get-emp").subscribe(res => {
      this.employeeList = res;
      console.log(res);
      
    })
  }
}
