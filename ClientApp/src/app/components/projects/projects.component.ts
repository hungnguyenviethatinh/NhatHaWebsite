import { Component, OnInit } from '@angular/core';
import TypeProjects from 'src/app/models/TypeProjects';
import Projects from 'src/app/models/Projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // listTypeProject :TypeProjects[]=[];
  // listProject: Projects[]=[];

  constructor() {
    // this.listProject.push(new Projects("Nhà Máy Gang Thép Formosa – Hà Tĩnh",
    // "Cung cấp Dịch vụ đo và đánh giá tình trạng (PD Online) cho Busway Trung thế",
    // ""));
    // this.listProject.push(new Projects("","",""))
  }

  ngOnInit() {
  }

}
