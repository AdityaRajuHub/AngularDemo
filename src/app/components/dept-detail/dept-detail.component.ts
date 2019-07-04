import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { instantiateRootComponent } from '@angular/core/src/render3/instructions';
import { TopicService } from 'src/app/topic.service';

@Component({
  selector: 'app-dept-detail',
  templateUrl: './dept-detail.component.html',
  styleUrls: []
})
export class DeptDetailComponent implements OnInit {
  public id: number;
  prevLinkEnabled: boolean= true;
  nextLinkEnabled: boolean= true;

  constructor(private activeRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id= parseInt(this.activeRoute.snapshot.paramMap.get('id'));
    this.initComponent();
  }

  initComponent() {
    if(this.id==1) {
      this.prevLinkEnabled= false;
      this.nextLinkEnabled= true;
    } else if(this.id==3) {
      this.prevLinkEnabled= true;
      this.nextLinkEnabled= false;
    } else {
      this.prevLinkEnabled= true;
      this.nextLinkEnabled= true;
    }
  }

  prev() {
    let prevId= this.id-1;
    this.id= prevId;
    this.initComponent();
    this.router.navigate(['../', this.id], {relativeTo: this.activeRoute});
  }

  next() {
    let nextId= this.id+1;
    this.id= nextId;
    this.initComponent();
    this.router.navigate(['../', this.id], {relativeTo: this.activeRoute});
  }

  navButtonClick(btn) {
    if(btn==='goBack') {
      //this.router.navigate(['/main/dept', {"id":this.id}])  //params via url
      this.router.navigate(['/main/dept', this.id], {relativeTo: this.activeRoute})
    }
  }

}
