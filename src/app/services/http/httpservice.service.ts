import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
 Baseurl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  encode(data : any) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }

Post(url: any, data: any, token: any){
  let options = {
    headers: new HttpHeaders({
      'Authorization': token,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    })
  }
 return this.httpClient.post(this.Baseurl + url, this.encode(data), options);
}

}
