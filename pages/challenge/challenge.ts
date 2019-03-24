import { genRandNum } from '../../utils/util';

Page({
  data: {
    num: 0
  },
  onLoad() {
    this.setData!({
      num: genRandNum(10)
    })
  },
})