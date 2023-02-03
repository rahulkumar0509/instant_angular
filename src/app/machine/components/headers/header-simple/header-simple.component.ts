import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-simple',
  templateUrl: './header-simple.component.html',
  styleUrls: ['./header-simple.component.scss']
})
export class HeaderSimpleComponent implements OnInit {
  @Input() headerInfo={name:'', menu:[''], homepage: ''};
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectUrl(url:string){
    this.router.navigateByUrl(url);
  }
}
