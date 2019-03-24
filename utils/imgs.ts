import { genNumStr } from './util';

export function genImgUrl(num: number): string {
  return `http://pov0j3r4v.bkt.clouddn.com/${genNumStr(num)}.jpg`
}