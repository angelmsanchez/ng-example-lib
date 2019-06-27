import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-lib-app';
  comic = {
    id: '1',
    name: 'DC Comics Rebirth',
    description: 'It all begins here. Do not skip to the last page. Do not let a friend or message',
    image: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2016/05/DCUREB_Cv1_ds_300dpi_cropped_5743b270aaaae3.39723701.jpg?itok=JpNJJ2_O',
    price: '$2.99'
  };
}
