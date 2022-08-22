import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-redirect-detail',
  templateUrl: './redirect-detail.component.html',
  styleUrls: ['./redirect-detail.component.scss']
})
export class RedirectDetailComponent implements OnInit {
  linkPage: string | null = null;

  constructor(private activatenRoute: ActivatedRoute, private router: Router) {

  }

  getLinkPage() {
    this.activatenRoute.paramMap.subscribe(paramMap => {
      this.linkPage = paramMap.get('link');
      console.log(this.linkPage);
    });
  }

  ngOnInit(): void {
    this.getLinkPage();
    this.router.navigate(['chi-tiet/', this.linkPage])

  }

}
