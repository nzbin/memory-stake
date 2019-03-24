export function formatTime(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = (n: number) => {
  const str = n.toString()
  return str[1] ? str : '0' + str
}

// 将负数、小数、大于两位数等的数字转换
export function transNum(num = 0): number {
  return Math.round((num < 0 ? num + 100 : num) % 100);
}

// 将数字转换成两位数字符串
export function genNumStr(num: number): string {
  let numstr = transNum(num).toString();
  if (numstr.length === 1) {
    numstr = '0' + numstr;
  }
  return numstr;
}

// 随机生成多位数
// @num 表示几位数
export function genRandNum(num = 0): string {
  const arr = [] as number[];
  for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr.join('');
}
