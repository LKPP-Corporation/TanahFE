import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MtxGridColumn } from '@ng-matero/extensions';

@Component({
  selector: 'app-tanah-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css'],
})
export class TanahList2Component implements OnInit {
  columns: MtxGridColumn[] = [
    {
      header: 'Name',
      field: 'name',
      formatter: (data: any) => `<a href="${data.html_url}" target="_blank">${data.name}</a>`,
    },
    { header: 'Owner', field: 'owner.login' },
    { header: 'Owner Avatar', field: 'owner.avatar_url', type: 'image' },
    { header: 'Description', field: 'description', width: '300px' },
    { header: 'Stars', field: 'stargazers_count' },
    { header: 'Forks', field: 'forks_count' },
    { header: 'Score', field: 'score' },
    { header: 'Issues', field: 'open_issues' },
    { header: 'Language', field: 'language' },
    { header: 'License', field: 'license.name' },
    { header: 'Home Page', field: 'homepage', type: 'link' },
    { header: 'Is forked', field: 'fork', type: 'boolean' },
    {
      header: 'Archived',
      field: 'archived',
      type: 'tag',
      tag: {
        true: { text: 'Yes', color: 'red-100' },
        false: { text: 'No', color: 'green-100' },
      },
    },
    { header: 'Created Date', field: 'created_at' },
    { header: 'Updated Date', field: 'updated_at' },
  ];
  list = [];
  total = 0;
  isLoading = true;

  query = {
    q: 'user:nzbin',
    page: 0,
    per_page: 5,
  };

  get params() {
    const p = Object.assign({}, this.query);
    p.page += 1;
    return p;
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.isLoading = true;
    this.http
      .get('https://api.github.com/search/repositories', { params: this.params as any })
      .subscribe(
        (res: any) => {
          this.list = res.items;
          this.total = res.total_count;
          this.isLoading = false;
        },
        () => {
          this.isLoading = false;
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  getNextPage(e: PageEvent) {
    this.query.page = e.pageIndex;
    this.query.per_page = e.pageSize;
    this.getData();
  }

  refresh() {
    this.getData();
  }
}
