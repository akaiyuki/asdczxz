import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles: [`h1 {
	color: white;
	background: darkgray;
	padding: 20px;
}
`],
    template: `
<main>
  <h1>AV Timelogs!</h1>

  <!-- Images (and assets) are parsed and loaded from within the public directory -->
  <img src="/img/timelogicon.png">

  <router-outlet></router-outlet>
</main>

<a [routerLink]="['/']">Home</a> | <a [routerLink]="['/about/', { id: 2 }]">About</a>`,
})

