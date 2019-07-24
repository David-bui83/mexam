import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  errors:any;
  movie_id:string;
  movie:any;
  newReview = {
    name:'',
    rating:'',
    review:''
  }
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newReview = {
      name:'',
      rating:'',
      review:''
    };

    this._route.params.subscribe((params:Params)=>{
      this.movie_id = params['id'];
    });
    this.getOneMovie();
  }
  getOneMovie(){
    this._httpService.getMovie(this.movie_id).subscribe(data=>{
      this.movie=data['data'];
      console.log('From write review: ',this.movie)
    });
  }
  postOneReview(id:string){
    console.log('id review: ', id);
    console.log(this.newReview)
    this._httpService.addReview(id,this.newReview).subscribe(data=>{
      console.log('data from reveiw: ',data);
      if(data['message']=='error'){
        this.errors = data['data']['errors'];
      }else{
        console.log(data['message'])
        this._router.navigate(['']);
      }
    });
  }

}
