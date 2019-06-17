import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopicService } from 'src/app/topic.service';
import { Topic } from 'src/app/model/topic';
import { retry, retryWhen, delay, scan } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  selId: number;
  tabContent: string = '';
  topics: Topic[];
  retryAttempt: number;
  hasError: boolean= false;
  errorMsg: string;
  topicSubscription: any;
  constructor(private router: Router, private topicServ: TopicService) { }

  ngOnInit() {
    this.topicSubscription= this.topicServ.getTopics()
      //.pipe(retry(3))
      //.pipe(retryWhen((errors:Observable<any>) => {return errors.pipe(delay(5000))})) //retry after every 5 sec
      .pipe(retryWhen((err: Observable<any>) => {
        return err.pipe(
          scan(attemptCnt => {
            attemptCnt++;
            if (attemptCnt < 6) {
              this.retryAttempt= attemptCnt;
              return attemptCnt;
            } else {
              throw err;
            }
          }, 0) //-> Initial value 0
        ).pipe(delay(5000))
      }))
      .subscribe(
        data => {
          this.topics = data;
          this.retryAttempt= -1;
          this.hasError=false;
          this.errorMsg= null;

        },
        error => {
          this.retryAttempt= -1;
          this.hasError=true;
          this.errorMsg= "Some problem occurred! Please try again later.";
          console.log(error)
        });
  }

  cancelRetry() {
    this.topicSubscription.unsubscribe();
  }

  onSelect(topic) {
    this.selId = topic.id;
    this.router.navigate(['main/comp', topic.id]);
    this.tabContent = topic.author;
  }

}
