import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {


  @Input('mylike') like = 0;
  @Input('mydislike') dislike = 0;

  @Output('updateFromChildToParent') updateFromChildToParent = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  incLike() {
    this.like++;
    this.updateFromChildToParent.emit({type: 'like', value: this.like});
  }

  incDisLike() {
    this.dislike++;
    this.updateFromChildToParent.emit({type: 'dislike', value: this.dislike});
  }

}
