import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //students:any[]=[];
  weather:any[]=[];
  
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.GetWeatherData().subscribe(
      (data)=>{
        this.weather = data.weather;
      }
    )
    // this.service.GetStudentData().subscribe(
    //   (data)=>{
    //     this.students = data.students;
    //     console.log(this.students);
    //   }
    // );
  }
}
