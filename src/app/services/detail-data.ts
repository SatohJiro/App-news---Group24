import {Idata} from "./idata";

export class DetailData implements  Idata{
  //@ts-ignore
  data: any[];
  //@ts-ignore
  url: string;

  getData(): any[] {
    return [];
  }

}
