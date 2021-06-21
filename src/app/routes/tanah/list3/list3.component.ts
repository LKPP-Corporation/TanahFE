import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MtxGridColumn } from '@ng-matero/extensions';

@Component({
  selector: 'app-tanah-list3',
  templateUrl: './list3.component.html',
  styleUrls: ['./list3.component.css'],
})
export class TanahList3Component {
  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name' },
    { header: 'Weight', field: 'weight' },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
    {
      header: 'Operation',
      field: 'operation',
      width: '160px',
      pinned: 'right',
      right: '0px',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          text: 'copy',
          icon: 'file_copy',
          tooltip: 'copy',
          disabled: true,
          click: () => {
            alert('copy');
          },
        },
        {
          type: 'icon',
          text: 'edit',
          icon: 'edit',
          tooltip: 'Edit',
          click: () => {
            alert('edit');
          },
        },
        {
          type: 'icon',
          text: 'delete',
          icon: 'delete',
          tooltip: 'Delete',
          color: 'warn',
          pop: true,
          popTitle: 'Confirm delete?',
          click: () => {
            alert('delete');
          },
        },
      ],
    },
  ];

  list = [];
  constructor(public route: Router) {}

  add() {
    this.route.navigate(['/tanah/borang']);
  }

  add2() {
    this.route.navigate(['/tanah/borang2']);
  }
}
