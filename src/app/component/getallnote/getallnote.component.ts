import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user service/user.service';
@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss']
})
export class GetallnoteComponent implements OnInit {
  public openModal = false;
  parrentArray = [] as any;

  constructor(private userService: UserService) { }
//parent array
  ngOnInit(): void {
    this.getNoteList();
  }

  getNoteList(){
    this.openModal = false;
    let id = localStorage.getItem('id');
    let arr = [] as any;
    
    this.userService.getNoteList(id).subscribe((res) => {
      arr = res;  
      console.log(res);
      console.log(arr);
      this.parrentArray = arr.data.data;
      console.log(this.parrentArray);
     //console.log(this.parrentArray[2].isDeleted);
      console.log(this.parrentArray);
    })
  }

}
