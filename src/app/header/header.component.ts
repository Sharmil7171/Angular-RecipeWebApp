import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedPage = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelectPage(selectedPage: string){
    this.selectedPage.emit(selectedPage);
  }
}
