import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { HeadersComponent } from '../../pages/headers/headers.component';

@Component({
  selector: 'app-manage-emp',
  standalone: true,
  imports: [FormsModule , CommonModule , HttpClientModule ,HeadersComponent],
  templateUrl: './manage-emp.component.html',
  styleUrl: './manage-emp.component.css'
})
export class ManageEmpComponent {

public employeeOb={
   firstName : "",
   lastName : "",
   email : "",
   departmentId : "",
   roleId : ""
}

constructor(private http : HttpClient){}

  addemployee(){
   this.http.post("http://localhost:8080/emp-controller/add-employee",this.employeeOb).subscribe
   (
    (data)=> {
      Swal.fire({
        title: "Employee Added!",
        text: "You clicked the button!",
        icon: "success"
      });
    }

   ) 
  }

}
