export interface  INews {
  id?: string,
  title?: string,
  link?: string,
  guid?:string,
  description?: {
    imgUrl?: string,
    text?: string
  },
  pubDate?:string
}
