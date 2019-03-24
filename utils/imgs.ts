export function genImgUrl(num: number): string {
  // 负数或小数
  num = Math.round(Math.abs(num));
  // 超过两位数
  num = num % 100;

  let numstr = num.toString();
  if (numstr.length === 1) {
    numstr = '0' + numstr;
  }
  return `http://po6g4uiw0.bkt.clouddn.com/${numstr}.jpg`
}