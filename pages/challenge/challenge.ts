import { genRandNum } from '../../utils/util';

Page({
  data: {
    num: 0,
    percent: 100
  },
  onLoad() {
    this.setData!({
      num: genRandNum(10)
    })
  },
  start() {

  }
})