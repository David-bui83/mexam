import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  movie_id:string;
  movie:any;
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.movie_id = params['id'];
      console.log(this.movie_id);
      this.getOneMovie();
    });
  }
  getOneMovie(){
    this._httpService.getMovie(this.movie_id).subscribe(data=>{
      this.movie=data['data'];
      console.log(this.movie)
    });
  }
  deleteMovie(id:string){
    console.log(id)
    this._httpService.destroy(id).subscribe(data=>{
      console.log(data)

    });
    this._router.navigate(['']);
  }

}
