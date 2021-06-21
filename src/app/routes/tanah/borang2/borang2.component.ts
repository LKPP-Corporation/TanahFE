import { Tanah } from './../Tanah';
import { TanahService } from './../tanah.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tanah-borang2',
  templateUrl: './borang2.component.html',
  styleUrls: ['./borang2.component.css'],
})
export class TanahBorang2Component implements OnInit {
  tanah: Tanah = { id: null, nama: '' };
  constructor(public tanahService: TanahService) {}

  ngOnInit() {}

  save() {
    console.log('hi');
    this.tanahService.simpanTanah(this.tanah).subscribe((data: Tanah) => {
      console.log('Tanah saved ', data);
    });
    console.log('me');
  }
}
