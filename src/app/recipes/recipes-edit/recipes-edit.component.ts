import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css'],
})
export class RecipesEditComponent implements OnInit {
  editPage = false;
  id: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editPage = params['id'] != null;
      console.log(this.editPage);
    });
  }
}
