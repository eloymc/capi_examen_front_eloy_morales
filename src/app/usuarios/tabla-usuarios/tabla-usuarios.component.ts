import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  public usuarios:any = [];

  constructor(private _usuarios:UsuariosService) { }

  ngOnInit(): void {

    this._usuarios.dameUsuarios().subscribe(
      data=>{
        console.log("OK al traer usuarios");
        console.log(data);
        this.usuarios = data;
      },
      error=>{
        console.log("Error al traer usuarios");
        console.log(error);
      }
    );

  }

}
