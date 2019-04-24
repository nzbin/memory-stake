import { genImgUrl } from '../../utils/imgs';
import { transNum, genNumStr } from '../../utils/util';
import { dict } from '../../data/dict';

Page({
  // 页面的初始数据
  data: {
    array: [] as string[],
    index: 0, // 数组索引
    imgUrl: '',
    numstr: '',
    searchIndex: 1, // 搜索索引
    numtext: '', // 数字文案
  },
  // 生命周期函数--监听页面加载
  onLoad() {
    // 生产长度为 100 的数组
    const arr = [] as string[];
    for (let i = 1; i <= 100; i++) {
      arr.push(genNumStr(i));
    }
    this.setData!({
      array: arr,
      imgUrl: genImgUrl(this.data.index + 1),
      numstr: genNumStr(this.data.index + 1),
      numtext: dict[arr[0]]
    });
  },
  // 下一个数字
  next() {
    this.data.index++;
    this.data.searchIndex++;
    this.setData!({
      index: transNum(this.data.index),
      imgUrl: genImgUrl(this.data.index + 1),
      numstr: genNumStr(this.data.index + 1),
      numtext: dict[this.data.array[transNum(this.data.index)]],
      searchIndex: transNum(this.data.searchIndex),
    });
  },
  // 上一个数字
  prev() {
    this.data.index--;
    this.data.searchIndex--;
    this.setData!({
      index: transNum(this.data.index),
      imgUrl: genImgUrl(this.data.index + 1),
      numstr: genNumStr(this.data.index + 1),
      numtext: dict[this.data.array[transNum(this.data.index)]],
      searchIndex: transNum(this.data.searchIndex),
    });
  },
  bindPickerChange(e: any) {
    const value = parseInt(e.detail.value);
    this.setData!({
      index: value,
      imgUrl: genImgUrl(value + 1),
      numstr: genNumStr(value + 1),
      numtext: dict[this.data.array[value]],
      searchIndex: value + 1,
    })
  },
  // 查找
  search(e: any) {
    const value = parseInt(e.detail.value ? e.detail.value : 1);
    this.setData!({
      index: transNum(value - 1),
      imgUrl: genImgUrl(value),
      numstr: genNumStr(value),
      numtext: dict[this.data.array[transNum(value - 1)]],
      searchIndex: value,
    })
  }
  //生命周期函数--监听页面初次渲染完成
  // onReady() {

  // },

  // 生命周期函数--监听页面显示
  // onShow() {

  // },

  // 生命周期函数--监听页面隐藏
  // onHide() {

  // },

  // 生命周期函数--监听页面卸载
  // onUnload() {

  // },

  // 页面相关事件处理函数--监听用户下拉动作
  // onPullDownRefresh() {

  // },

  // 页面上拉触底事件的处理函数
  // onReachBottom() {

  // },

  // 用户点击右上角分享
  // onShareAppMessage() {

  // }
})