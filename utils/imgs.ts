import { genNumStr } from './util';

export function genImgUrl(num: number): string {
  return `http://pqayn9kab.bkt.clouddn.com/${genNumStr(num)}.jpg`
}