import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit, OnChanges {
  
  selId: string;
  tabContent: string= '';
  depts=[
    { "id": 1, "name": "Software"},
    { "id": 2, "name": "Human Resources"},
    { "id": 3, "name": "Financial"}
  ];

  deptsMore=[
    { "id": 1, "desc": "Software: Lorem ipsum dolor sit amet consectetur adipisicing elit. At dignissimos velit ex sapiente cumque, voluptatibus, deleniti soluta unde corporis commodi illum iure doloribus necessitatibus assumenda, fugiat rem ipsa ut fuga?"},
    { "id": 2, "desc": "Human Resources: Lorem ipsum dolor sit amet consectetur adipisicing elit. At dignissimos velit ex sapiente cumque, voluptatibus, deleniti soluta unde corporis commodi illum iure doloribus necessitatibus assumenda, fugiat rem ipsa ut fuga?"},
    { "id": 3, "desc": "Financial: Lorem ipsum dolor sit amet consectetur adipisicing elit. At dignissimos velit ex sapiente cumque, voluptatibus, deleniti soluta unde corporis commodi illum iure doloribus necessitatibus assumenda, fugiat rem ipsa ut fuga?"}
  ];
  onSelect(dept) {
    this.selId= dept.id;
    this.router.navigate(['main/dept',dept.id]);
    this.tabContent= this.deptsMore.filter(t => t.id.toString() == dept.id).reduce((prev, curr, index) => prev+curr.desc+'', '' );
  }
  onMore() {
    this.router.navigate(["../more/", this.selId], {relativeTo: this.activeRoute});
  }
  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.activeRoute.snapshot.paramMap.subscribe((param: ParamsMap) => this.selId= parseInt(param.get('id')));
    this.selId= this.activeRoute.snapshot.paramMap.get("id")?this.activeRoute.snapshot.paramMap.get("id"):this.depts[0].id.toString();
    //this.tabContent= this.deptsMore.filter(t => t.id.toString() === this.selId).reduce((prev, curr, index) => prev+','+curr.desc, '' );
    this.tabContent= this.deptsMore.filter(t => t.id.toString() === this.selId).map(t => t.desc).join(',');
  }

  ngOnChanges(changes: SimpleChanges): void {
    /*for(let propertyNames in changes) {
      propertyNames.
    } */ console.log(changes);
  }

}
