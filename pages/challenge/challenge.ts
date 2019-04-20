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
    const timer = () => {
      this.data.percent--;
      if (this.data.percent >= 0) {
        this.setData!({
          percent: this.data.percent
        });
        setTimeout(timer, 100);
      }
    };
    timer();
  }
})