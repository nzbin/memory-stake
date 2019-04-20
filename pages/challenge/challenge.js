"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        num: 0,
        percent: 100
    },
    onLoad: function () {
        this.setData({
            num: util_1.genRandNum(10)
        });
    },
    start: function () {
        var _this = this;
        var timer = function () {
            _this.data.percent--;
            if (_this.data.percent >= 0) {
                _this.setData({
                    percent: _this.data.percent
                });
                setTimeout(timer, 100);
            }
        };
        timer();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQThDO0FBRTlDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDO1FBQ04sT0FBTyxFQUFFLEdBQUc7S0FDYjtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osR0FBRyxFQUFFLGlCQUFVLENBQUMsRUFBRSxDQUFDO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxLQUFLO1FBQUwsaUJBV0M7UUFWQyxJQUFNLEtBQUssR0FBRztZQUNaLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEIsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7Z0JBQzFCLEtBQUksQ0FBQyxPQUFRLENBQUM7b0JBQ1osT0FBTyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztpQkFDM0IsQ0FBQyxDQUFDO2dCQUNILFVBQVUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDeEI7UUFDSCxDQUFDLENBQUM7UUFDRixLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZW5SYW5kTnVtIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbnVtOiAwLFxuICAgIHBlcmNlbnQ6IDEwMFxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBudW06IGdlblJhbmROdW0oMTApXG4gICAgfSlcbiAgfSxcbiAgc3RhcnQoKSB7XG4gICAgY29uc3QgdGltZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRhdGEucGVyY2VudC0tO1xuICAgICAgaWYgKHRoaXMuZGF0YS5wZXJjZW50ID49IDApIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgcGVyY2VudDogdGhpcy5kYXRhLnBlcmNlbnRcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQodGltZXIsIDEwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aW1lcigpO1xuICB9XG59KSJdfQ==