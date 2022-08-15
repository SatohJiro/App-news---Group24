import {Idata} from "./idata";
import {DetailData} from "./detail-data";
import {HomeData} from "./home-data";

export class ParentData {
  data: Idata[] | undefined;
  pageData: Idata | undefined;
  constructor() {
    // @ts-ignore
    this.getDataHome();
  }

// @ts-ignore
  getDataHome(url: string): [] | undefined {
    // @ts-ignore
   this.pageData = new HomeData();
    // @ts-ignore
    this.data?.push(this.pageData?.getData());
  };


  addPage(url: string) {
    // @ts-ignore
    for (let i = 0; i < this.data?.length; i++) {
      // @ts-ignore
      if (this.data[i].url === url) {
        return;
      }
    }
    // @ts-ignore
    this.pageData= new DetailData(url);
    // @ts-ignore
    this.data?.push(this.pageData?.getData());
  }
}
