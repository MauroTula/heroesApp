import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { switchMap } from "rxjs/operators";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe

  constructor(private _activatedRoute : ActivatedRoute, private _heroeService : HeroesService, private router: Router) { }

  ngOnInit(): void {
    this._activatedRoute.params
    .pipe(
      switchMap( ({id}) => this._heroeService.getHeroePorId( id ) )
    )
    .subscribe( heroe => this.heroe = heroe)
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

}
