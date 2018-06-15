import { Component, OnInit } from '@angular/core';
import { trigger,  state,  style,  animate,  transition, group, query} from '@angular/animations';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('chatAnimation', [
      transition('void => *', [
        query(':self', [
          style({ opacity: 0 , height: '0px'}),
          animate('0.5s', style({ opacity: 1, height: '*' }))
       ])
      ]),
      transition('* => void' , [
        query(':self', [
          style({ opacity: 1 , height: '*'}),
          animate('0.6s', style({ opacity: 0, height: '0px' }))
       ])

      ])
   ])
    ]
})
export class FooterComponent implements OnInit {

  chatOn = true;

  constructor() { }



  ngOnInit() {
  }

  toggleChat() {
    this.chatOn = !this.chatOn;
}

}
