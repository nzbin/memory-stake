"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        num: 0,
        time: 5,
        digit: 10,
        percent: 100,
        step: 1,
        numCheck: -1,
    },
    onLoad: function () {
    },
    start: function () {
        var _this = this;
        this.setData({
            num: util_1.genRandNum(this.data.digit),
            step: 2,
        });
        var ms = 10 * (this.data.time - 1);
        var countDown = function () {
            _this.data.percent--;
            if (_this.data.percent >= 0) {
                _this.setData({
                    percent: _this.data.percent
                });
                setTimeout(countDown, ms);
            }
            else {
                _this.setData({
                    step: 3,
                });
            }
        };
        countDown();
    },
    bindTimeInput: function (e) {
        this.setData({
            time: e.detail.value
        });
    },
    bindDigitInput: function (e) {
        this.setData({
            digit: e.detail.value
        });
    },
    bindCheckInput: function (e) {
        this.setData({
            numCheck: e.detail.value
        });
    },
    check: function () {
        if (this.data.numCheck === this.data.num) {
            wx.showModal({
                title: '😎👍',
                content: '恭喜你，回答正确！',
            });
        }
        else {
            wx.showModal({
                title: '😓',
                content: '很遗憾，回答错误！',
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQThDO0FBRTlDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBRSxHQUFHO1FBQ1osSUFBSSxFQUFFLENBQUM7UUFDUCxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ2I7SUFDRCxNQUFNO0lBRU4sQ0FBQztJQUNELEtBQUs7UUFBTCxpQkF5QkM7UUF2QkMsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLEdBQUcsRUFBRSxpQkFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksRUFBRSxDQUFDO1NBQ1IsQ0FBQyxDQUFDO1FBR0gsSUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFckMsSUFBTSxTQUFTLEdBQUc7WUFDaEIsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRTtnQkFDMUIsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixPQUFPLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPO2lCQUMzQixDQUFDLENBQUM7Z0JBQ0gsVUFBVSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUMzQjtpQkFBTTtnQkFFTCxLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLElBQUksRUFBRSxDQUFDO2lCQUNSLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsU0FBUyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsYUFBYSxZQUFDLENBQU07UUFDbEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDckIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGNBQWMsWUFBQyxDQUFNO1FBQ25CLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQ3RCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxjQUFjLFlBQUMsQ0FBTTtRQUNuQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUN6QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDeEMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsTUFBTTtnQkFDYixPQUFPLEVBQUUsV0FBVzthQUNyQixDQUFDLENBQUE7U0FDSDthQUFNO1lBQ0wsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxPQUFPLEVBQUUsV0FBVzthQUNyQixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZW5SYW5kTnVtIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbnVtOiAwLFxuICAgIHRpbWU6IDUsIC8vIOm7mOiupOiusOW/huaXtumXtFxuICAgIGRpZ2l0OiAxMCwgLy8g5pWw5a2X5L2N5pWwXG4gICAgcGVyY2VudDogMTAwLFxuICAgIHN0ZXA6IDEsXG4gICAgbnVtQ2hlY2s6IC0xLCAvLyDlvoXmoKHpqozlvoXmlbDlrZdcbiAgfSxcbiAgb25Mb2FkKCkge1xuXG4gIH0sXG4gIHN0YXJ0KCkge1xuXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBudW06IGdlblJhbmROdW0odGhpcy5kYXRhLmRpZ2l0KSwgLy8g55Sf5oiQ5pWw5a2XXG4gICAgICBzdGVwOiAyLFxuICAgIH0pO1xuXG4gICAgLy8g5YCS6K6h5pe26Ze06ZqU5pe26Ze0XG4gICAgY29uc3QgbXMgPSAxMCAqICh0aGlzLmRhdGEudGltZSAtIDEpO1xuXG4gICAgY29uc3QgY291bnREb3duID0gKCkgPT4ge1xuICAgICAgdGhpcy5kYXRhLnBlcmNlbnQtLTtcbiAgICAgIGlmICh0aGlzLmRhdGEucGVyY2VudCA+PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHBlcmNlbnQ6IHRoaXMuZGF0YS5wZXJjZW50XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KGNvdW50RG93biwgbXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6K6h5pe257uT5p2f5pi+56S656ys5LiJ5q2lXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHN0ZXA6IDMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgY291bnREb3duKCk7XG4gIH0sXG4gIC8vIOiusOW/huaXtumXtOe7keWumlxuICBiaW5kVGltZUlucHV0KGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgdGltZTogZS5kZXRhaWwudmFsdWVcbiAgICB9KVxuICB9LFxuICAvLyDmlbDlrZfkvY3mlbDnu5HlrppcbiAgYmluZERpZ2l0SW5wdXQoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBkaWdpdDogZS5kZXRhaWwudmFsdWVcbiAgICB9KVxuICB9LFxuICBiaW5kQ2hlY2tJbnB1dChlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIG51bUNoZWNrOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pXG4gIH0sXG4gIC8vIOajgOmqjOi+k+WFpeaVsOWtl+aYr+WQpuato+ehrlxuICBjaGVjaygpIHtcbiAgICBpZiAodGhpcy5kYXRhLm51bUNoZWNrID09PSB0aGlzLmRhdGEubnVtKSB7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ/CfmI7wn5GNJyxcbiAgICAgICAgY29udGVudDogJ+aBreWWnOS9oO+8jOWbnuetlOato+ehru+8gScsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ/CfmJMnLFxuICAgICAgICBjb250ZW50OiAn5b6I6YGX5oa+77yM5Zue562U6ZSZ6K+v77yBJyxcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KSJdfQ==