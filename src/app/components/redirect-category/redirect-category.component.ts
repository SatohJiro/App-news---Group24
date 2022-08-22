import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-redirect-category',
  templateUrl: './redirect-category.component.html',
  styleUrls: ['./redirect-category.component.scss']
})
export class RedirectCategoryComponent implements OnInit {
  linkPage: string | null = null;

  constructor(private activatenRoute: ActivatedRoute, private router: Router) {
  }

  getLinkPage() {
    this.activatenRoute.paramMap.subscribe(paramMap => {
      this.linkPage = paramMap.get('RSS');
      console.log(this.linkPage);
    });
  }

  ngOnInit(): void {
    this.getLinkPage();
    if (this.linkPage === "") {
      this.router.navigate(['trang-chu/']);
    } else {
      this.router.navigate(['the-loai/', this.linkPage]);
    }
  }

}
