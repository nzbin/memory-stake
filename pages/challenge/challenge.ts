import { genRandNum } from '../../utils/util';

Page({
  data: {
    num: 0,
    time: 5, // 默认记忆时间
    digit: 10, // 数字位数
    percent: 100,
    step: 1,
    numCheck: -1, // 待校验待数字
  },
  onLoad() {

  },
  start() {

    this.setData!({
      num: genRandNum(this.data.digit), // 生成数字
      step: 2,
    });

    // 倒计时间隔时间
    const ms = 10 * (this.data.time - 1);

    const countDown = () => {
      this.data.percent--;
      if (this.data.percent >= 0) {
        this.setData!({
          percent: this.data.percent
        });
        setTimeout(countDown, ms);
      } else {
        // 计时结束显示第三步
        this.setData!({
          step: 3,
        });
      }
    };
    countDown();
  },
  // 记忆时间绑定
  bindTimeInput(e: any) {
    this.setData!({
      time: e.detail.value
    })
  },
  // 数字位数绑定
  bindDigitInput(e: any) {
    this.setData!({
      digit: e.detail.value
    })
  },
  bindCheckInput(e: any) {
    this.setData!({
      numCheck: e.detail.value
    })
  },
  // 检验输入数字是否正确
  check() {
    if (this.data.numCheck === this.data.num) {
      wx.showModal({
        title: '😎👍',
        content: '恭喜你，回答正确！',
      })
    } else {
      wx.showModal({
        title: '😓',
        content: '很遗憾，回答错误！',
      })
    }
  }
})