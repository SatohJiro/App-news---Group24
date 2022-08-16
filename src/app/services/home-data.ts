import {Idata} from "./idata";

export class HomeData implements  Idata{
  data: [] =[];
  url: string ='';
  getData(): void {
// @ts-ignore
    this.data.push([{
      // @ts-ignore
      abc:1,
    }]);
  }

}
