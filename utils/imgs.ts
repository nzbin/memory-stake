import { genNumStr } from './util';

export function genImgUrl(num: number): string {
  return `https://memory-stake.oss-cn-beijing.aliyuncs.com/${genNumStr(num)}.jpg`
}