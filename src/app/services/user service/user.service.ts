import { Injectable } from '@angular/core';
import { HttpserviceService } from '../http/httpservice.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpserviceService) { }

  loginService(data: any){
    return this.http.Post('/user/login',data,'');

  }

  registerService(data : any){
    return this.http.Post('user/userSignUp',data,'');
  }

  forgotService(data : any){
    return this.http.Post('user/reset',data,'');
  }

  resetService(data : any,token : any){
    return this.http.Post('user/reset-password',data,token)
  }
  
}
