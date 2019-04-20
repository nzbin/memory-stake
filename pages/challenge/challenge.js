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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQThDO0FBRTlDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDO1FBQ04sT0FBTyxFQUFFLEdBQUc7S0FDYjtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osR0FBRyxFQUFFLGlCQUFVLENBQUMsRUFBRSxDQUFDO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxLQUFLO0lBRUwsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdlblJhbmROdW0gfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBudW06IDAsXG4gICAgcGVyY2VudDogMTAwXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIG51bTogZ2VuUmFuZE51bSgxMClcbiAgICB9KVxuICB9LFxuICBzdGFydCgpIHtcblxuICB9XG59KSJdfQ==