import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-add-page',
  templateUrl: './blog-add-page.component.html',
  styleUrls: ['./blog-add-page.component.css']
})
export class BlogAddPageComponent implements OnInit {

  truncate = 100;
  cont = '12312';
  content = 'Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів. "Риба" не тільки успішно пережила пять століть, але й прижилася в електронному верстуванні, залишаючись по суті незмінною. Вона популяризувалась в 60-их роках минулого сторіччя завдяки виданню зразків шрифтів Letraset, які містили уривки з Lorem Ipsum, і вдруге - нещодавно завдяки програмам компютерного верстування на кшталт Aldus Pagemaker, які використовували різні версії Lorem Ipsum.';

  constructor() { }

  ngOnInit() {
  }

}
