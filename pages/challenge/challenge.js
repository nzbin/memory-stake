"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        num: 0
    },
    onLoad: function () {
        this.setData({
            num: util_1.genRandNum(10)
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQThDO0FBRTlDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDO0tBQ1A7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLEdBQUcsRUFBRSxpQkFBVSxDQUFDLEVBQUUsQ0FBQztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2VuUmFuZE51bSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG51bTogMFxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBudW06IGdlblJhbmROdW0oMTApXG4gICAgfSlcbiAgfSxcbn0pIl19