import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-feed-ducks-data',
  templateUrl: './feed-ducks-data.component.html',
  styleUrls: ['./feed-ducks-data.component.scss']
})


export class FeedDucksDataComponent {
  
  duckData: Observable<any>;
  
  url: string = 'http://localhost:3000/ducks/';

  displayedColumns: string[] = ['time','food','location','count','foodQuality'];
  
  constructor(private http: HttpClient) { 
   this.duckData =  this.getData();
  }

  getData() : Observable<any>{
      return this.http.get(this.url);
  }
}
