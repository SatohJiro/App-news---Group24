import {Idata} from "./idata";

export class DetailData implements Idata {
  data: [] | undefined;
  url: string | undefined;

  constructor(urlInput: string) {
    this.url = urlInput;
  }

  getData(): void {

  }


}
