import { Component } from '@angular/core';
import { SignupserviceService } from 'src/app/Service/signupservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor(private _signupservice:SignupserviceService){
  this._signupservice.islogin(false);
  }
}
