"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        num: 0,
        time: 5,
        digit: 10,
        percent: 100,
        firstStepShow: true,
        secondStepShow: false,
        thirdStepShow: false
    },
    onLoad: function () {
    },
    start: function () {
        var _this = this;
        this.setData({
            num: util_1.genRandNum(this.data.digit),
            firstStepShow: false,
            secondStepShow: true,
        });
        var ms = 10 * this.data.time;
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
                    firstStepShow: false,
                    secondStepShow: false,
                    thirdStepShow: true,
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
    check: function (e) {
        if (e.detail.value === this.data.num) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQThDO0FBRTlDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBRSxHQUFHO1FBQ1osYUFBYSxFQUFFLElBQUk7UUFDbkIsY0FBYyxFQUFFLEtBQUs7UUFDckIsYUFBYSxFQUFFLEtBQUs7S0FDckI7SUFDRCxNQUFNO0lBRU4sQ0FBQztJQUNELEtBQUs7UUFBTCxpQkE0QkM7UUExQkMsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLEdBQUcsRUFBRSxpQkFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLGNBQWMsRUFBRSxJQUFJO1NBQ3JCLENBQUMsQ0FBQztRQUdILElBQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUvQixJQUFNLFNBQVMsR0FBRztZQUNoQixLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFO2dCQUMxQixLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLE9BQU8sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87aUJBQzNCLENBQUMsQ0FBQztnQkFDSCxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzNCO2lCQUFNO2dCQUVMLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osYUFBYSxFQUFFLEtBQUs7b0JBQ3BCLGNBQWMsRUFBRSxLQUFLO29CQUNyQixhQUFhLEVBQUUsSUFBSTtpQkFDcEIsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUM7UUFDRixTQUFTLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxhQUFhLFlBQUMsQ0FBTTtRQUNsQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsY0FBYyxZQUFDLENBQU07UUFDbkIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDdEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELEtBQUssWUFBQyxDQUFNO1FBQ1YsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNwQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxNQUFNO2dCQUNiLE9BQU8sRUFBRSxXQUFXO2FBQ3JCLENBQUMsQ0FBQTtTQUNIO2FBQU07WUFDTCxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxJQUFJO2dCQUNYLE9BQU8sRUFBRSxXQUFXO2FBQ3JCLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdlblJhbmROdW0gfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBudW06IDAsXG4gICAgdGltZTogNSwgLy8g6buY6K6k6K6w5b+G5pe26Ze0XG4gICAgZGlnaXQ6IDEwLCAvLyDmlbDlrZfkvY3mlbBcbiAgICBwZXJjZW50OiAxMDAsXG4gICAgZmlyc3RTdGVwU2hvdzogdHJ1ZSxcbiAgICBzZWNvbmRTdGVwU2hvdzogZmFsc2UsXG4gICAgdGhpcmRTdGVwU2hvdzogZmFsc2VcbiAgfSxcbiAgb25Mb2FkKCkge1xuXG4gIH0sXG4gIHN0YXJ0KCkge1xuXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBudW06IGdlblJhbmROdW0odGhpcy5kYXRhLmRpZ2l0KSwgLy8g55Sf5oiQ5pWw5a2XXG4gICAgICBmaXJzdFN0ZXBTaG93OiBmYWxzZSxcbiAgICAgIHNlY29uZFN0ZXBTaG93OiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLy8g5YCS6K6h5pe26Ze06ZqU5pe26Ze0XG4gICAgY29uc3QgbXMgPSAxMCAqIHRoaXMuZGF0YS50aW1lO1xuXG4gICAgY29uc3QgY291bnREb3duID0gKCkgPT4ge1xuICAgICAgdGhpcy5kYXRhLnBlcmNlbnQtLTtcbiAgICAgIGlmICh0aGlzLmRhdGEucGVyY2VudCA+PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHBlcmNlbnQ6IHRoaXMuZGF0YS5wZXJjZW50XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KGNvdW50RG93biwgbXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g6K6h5pe257uT5p2f5pi+56S656ys5LiJ5q2lXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGZpcnN0U3RlcFNob3c6IGZhbHNlLFxuICAgICAgICAgIHNlY29uZFN0ZXBTaG93OiBmYWxzZSxcbiAgICAgICAgICB0aGlyZFN0ZXBTaG93OiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvdW50RG93bigpO1xuICB9LFxuICAvLyDorrDlv4bml7bpl7Tnu5HlrppcbiAgYmluZFRpbWVJbnB1dChlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHRpbWU6IGUuZGV0YWlsLnZhbHVlXG4gICAgfSlcbiAgfSxcbiAgLy8g5pWw5a2X5L2N5pWw57uR5a6aXG4gIGJpbmREaWdpdElucHV0KGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgZGlnaXQ6IGUuZGV0YWlsLnZhbHVlXG4gICAgfSlcbiAgfSxcbiAgLy8g5qOA6aqM6L6T5YWl5pWw5a2X5piv5ZCm5q2j56GuXG4gIGNoZWNrKGU6IGFueSkge1xuICAgIGlmIChlLmRldGFpbC52YWx1ZSA9PT0gdGhpcy5kYXRhLm51bSkge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfwn5iO8J+RjScsXG4gICAgICAgIGNvbnRlbnQ6ICfmga3llpzkvaDvvIzlm57nrZTmraPnoa7vvIEnLFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgdGl0bGU6ICfwn5iTJyxcbiAgICAgICAgY29udGVudDogJ+W+iOmBl+aGvu+8jOWbnuetlOmUmeivr++8gScsXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSkiXX0=