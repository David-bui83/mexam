import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  errors:any;
  movies = [];
  newMovie = {
    title:'',
    name:'',
    rating:'',
    review:'',
    reviews:[]
  }
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newMovie = {
      title:'',
      name:'',
      rating:'',
      review:'',
      reviews:[]
    }
    this.getAllMovies();
  }

  postOneMovie(){
    console.log(this.newMovie);
    this._httpService.postMovie(this.newMovie).subscribe(data=>{
      console.log(data)
      if(data['message']=='error'){
        this.errors = data['data']['errors'];
      }else{
        console.log(data['message'])
        this.getAllMovies()
        this._router.navigate(['/movies']);
      }
    });
  }
  getAllMovies(){
    this._httpService.getAll().subscribe(data=>{
      this.movies=data['data'];
      console.log("from pets component: ", this.movies);
    });
  }
}
