// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-swagger-component',
//   templateUrl: './swagger-component.component.html',
//   styleUrls: ['./swagger-component.component.scss']
// })
// export class SwaggerComponentComponent {

// }



import { Component, OnInit } from '@angular/core';

declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger-component.component.html',
  styleUrls: ['./swagger-component.component.scss']
})
export class SwaggerComponent implements OnInit {

  ngOnInit(): void {
    const ui = SwaggerUIBundle({
      url: '/assets/swagger.json',
      dom_id: '#swagger-ui',
    });
  }
}
