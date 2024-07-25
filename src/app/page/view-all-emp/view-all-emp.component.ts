import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { HeadersComponent } from '../../pages/headers/headers.component';

@Component({
  selector: 'app-view-all-emp',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule , HeadersComponent],
  templateUrl: './view-all-emp.component.html',
  styleUrl: './view-all-emp.component.css'
})
export class ViewAllEmpComponent {

  public employeeList: any;

  constructor(private http: HttpClient) {
    this.loadAllEmployee();
  }

  loadAllEmployee() {
    this.http.get("http://localhost:8080/emp-controller/get-emp").subscribe(res => {
      this.employeeList = res;
      console.log(res);

    })
  }

  deleteEmployee(employee: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) { 


        this.http.delete(`http://localhost:8080/emp-controller/delete-emp/${employee.id}`, { responseType: 'text' }).subscribe(res => {
          console.log(res);
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });

          this.loadAllEmployee();
    
        })
        console.log(employee);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });


  }
}
