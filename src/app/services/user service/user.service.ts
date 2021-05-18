import { Injectable } from '@angular/core';
import { HttpserviceService } from '../http/httpservice.service'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  encode(data : any) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }

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

    let options = {
      headers: new HttpHeaders({
        'Authorization': token,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    }
    return this.http.Post('user/reset-password',this.encode(data),options)
  }
  

  createNote(data: any , id: any){

    
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.Post('notes/addNotes',data,options);
  }

  getNoteList(id:any){
    
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.get('notes/getNotesList',options)
  }

  updateNote(data : any,token : any ){
    
    let options = {
      headers: new HttpHeaders({
        'Authorization': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.Post('notes/updateNotes',data,options);
  }

  deleteNote(data : any,token : any){
    
    let options = {
      headers: new HttpHeaders({
        'Authorization': token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.Post('notes/trashNotes',data,options);
  }

  logout(id : any){
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.Post('notes/logout',"",options);

  }
  
}
