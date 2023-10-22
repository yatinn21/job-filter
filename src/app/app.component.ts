import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'job-filter';
  role: any[]=[];
  technology: any[]=[];
  experience: any[]=[];
  roleM: any = '';
  technologyM: any = '';
  experienceM: any = '';
  ctcM: any = '';

  data: any[] = [];
  filteredData: any[] = [];

  constructor( private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getData().subscribe((res:any) => {
      console.log(res.data);
      this.data = res.data;
      this.role = res.role;
      this.technology = res.technology;
      this.experience = res.experience;
      this.filteredData = res.data;
    
    })
  }
  
  ngDoCheck(): void {
    this.applyFilters();

    // if(this.experienceM ){
    //   console.log('expM',this.experienceM)
    //   this.filteredData = this.filteredData.filter( item => item.experience === this.experienceM);
    // }
    // if(this.roleM){
    //   console.log('roleM',this.roleM)
    //   this.filteredData = this.filteredData.filter(item => this.roleM.includes(item.role));
    //   console.log(this.filteredData)
    // }
    // if(this.technologyM){
    //   console.log('techM',this.technologyM);
    //   this.filteredData = this.filteredData.filter(item => this.technologyM.includes(item.technology));
    //   console.log(this.filteredData)
    // }
    // if(this.ctcM){
    //   console.log(this.ctcM)
    //   this.filteredData = this.filteredData.filter( item=> item.ctc === this.ctcM)
    // }
  }

  applyFilters(){
    this.filteredData = this.data;

    if (this.experienceM) {
      this.filteredData = this.filteredData.filter(item => item.experience === this.experienceM);
    }

    if (this.roleM) {
      this.filteredData = this.filteredData.filter(item => this.roleM.includes(item.role));
    }

    if (this.technologyM) {
      this.filteredData = this.filteredData.filter(item => 
        item.technology.some((tech: any) => this.technologyM.includes(tech))
      );
    }

    if (this.ctcM) {
      this.filteredData = this.filteredData.filter(item => item.ctc === this.ctcM);
    }
  };


}
