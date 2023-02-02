import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectToFeature(feature: string){
    switch(feature){
      case 'instant_screen':
        this.router.navigateByUrl('/registration');
        break;
      default:
        console.log('do nothing');
        break;
    }
  }
}
