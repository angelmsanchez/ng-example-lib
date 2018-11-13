import { Component, Input, OnInit } from '@angular/core';

import { MetaService } from './meta.service';

@Component({
  selector: 'comic-lib',
  templateUrl: './ng-example-lib.component.html',
  styleUrls: ['./ng-example-lib.component.scss']
})
export class NgExampleLibComponent implements OnInit {
  @Input() comic: any;

  constructor(
    private metaService: MetaService,
  ) { }

  ngOnInit(): void {
    if (this.comic) { this.metaData(this.comic); }
  }

  private metaData(comic: any): void {
    this.metaService.setMetaData({
      title: this.comic.name,
      description: this.comic.description
    });
  }
}
