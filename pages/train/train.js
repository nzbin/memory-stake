"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imgs_1 = require("../../utils/imgs");
var util_1 = require("../../utils/util");
var dict_1 = require("../../data/dict");
Page({
    data: {
        array: [],
        index: 0,
        imgUrl: '',
        numstr: '',
        searchIndex: 1,
        numtext: '',
    },
    onLoad: function () {
        var arr = [];
        for (var i = 1; i <= 100; i++) {
            arr.push(util_1.genNumStr(i));
        }
        this.setData({
            array: arr,
            imgUrl: imgs_1.genImgUrl(this.data.index + 1),
            numstr: util_1.genNumStr(this.data.index + 1),
            numtext: dict_1.dict[arr[0]]
        });
    },
    next: function () {
        this.data.index++;
        this.data.searchIndex++;
        this.setData({
            index: util_1.transNum(this.data.index),
            imgUrl: imgs_1.genImgUrl(this.data.index + 1),
            numstr: util_1.genNumStr(this.data.index + 1),
            numtext: dict_1.dict[this.data.array[util_1.transNum(this.data.index)]],
            searchIndex: util_1.transNum(this.data.searchIndex),
        });
    },
    prev: function () {
        this.data.index--;
        this.data.searchIndex--;
        this.setData({
            index: util_1.transNum(this.data.index),
            imgUrl: imgs_1.genImgUrl(this.data.index + 1),
            numstr: util_1.genNumStr(this.data.index + 1),
            numtext: dict_1.dict[this.data.array[util_1.transNum(this.data.index)]],
            searchIndex: util_1.transNum(this.data.searchIndex),
        });
    },
    bindPickerChange: function (e) {
        var value = parseInt(e.detail.value);
        this.setData({
            index: value,
            imgUrl: imgs_1.genImgUrl(value + 1),
            numstr: util_1.genNumStr(value + 1),
            numtext: dict_1.dict[this.data.array[value]],
            searchIndex: value + 1,
        });
    },
    search: function (e) {
        var value = parseInt(e.detail.value ? e.detail.value : 1);
        this.setData({
            index: util_1.transNum(value - 1),
            imgUrl: imgs_1.genImgUrl(value),
            numstr: util_1.genNumStr(value),
            numtext: dict_1.dict[this.data.array[util_1.transNum(value - 1)]],
            searchIndex: value,
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUE2QztBQUM3Qyx5Q0FBdUQ7QUFDdkQsd0NBQXVDO0FBRXZDLElBQUksQ0FBQztJQUVILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFjO1FBQ3JCLEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLFdBQVcsRUFBRSxDQUFDO1FBQ2QsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUVELE1BQU07UUFFSixJQUFNLEdBQUcsR0FBRyxFQUFjLENBQUM7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxnQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN0QyxNQUFNLEVBQUUsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDdEMsT0FBTyxFQUFFLFdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLEtBQUssRUFBRSxlQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDaEMsTUFBTSxFQUFFLGdCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sRUFBRSxnQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUN0QyxPQUFPLEVBQUUsV0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekQsV0FBVyxFQUFFLGVBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUM3QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osS0FBSyxFQUFFLGVBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxNQUFNLEVBQUUsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDdEMsTUFBTSxFQUFFLGdCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sRUFBRSxXQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN6RCxXQUFXLEVBQUUsZUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQzdDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxnQkFBZ0IsWUFBQyxDQUFNO1FBQ3JCLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixLQUFLLEVBQUUsS0FBSztZQUNaLE1BQU0sRUFBRSxnQkFBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDNUIsTUFBTSxFQUFFLGdCQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUM1QixPQUFPLEVBQUUsV0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLFdBQVcsRUFBRSxLQUFLLEdBQUcsQ0FBQztTQUN2QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxZQUFDLENBQU07UUFDWCxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osS0FBSyxFQUFFLGVBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sRUFBRSxnQkFBUyxDQUFDLEtBQUssQ0FBQztZQUN4QixNQUFNLEVBQUUsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7WUFDeEIsT0FBTyxFQUFFLFdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsV0FBVyxFQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQW1DRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZW5JbWdVcmwgfSBmcm9tICcuLi8uLi91dGlscy9pbWdzJztcbmltcG9ydCB7IHRyYW5zTnVtLCBnZW5OdW1TdHIgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcbmltcG9ydCB7IGRpY3QgfSBmcm9tICcuLi8uLi9kYXRhL2RpY3QnO1xuXG5QYWdlKHtcbiAgLy8g6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gIGRhdGE6IHtcbiAgICBhcnJheTogW10gYXMgc3RyaW5nW10sXG4gICAgaW5kZXg6IDAsIC8vIOaVsOe7hOe0ouW8lVxuICAgIGltZ1VybDogJycsXG4gICAgbnVtc3RyOiAnJyxcbiAgICBzZWFyY2hJbmRleDogMSwgLy8g5pCc57Si57Si5byVXG4gICAgbnVtdGV4dDogJycsIC8vIOaVsOWtl+aWh+ahiFxuICB9LFxuICAvLyDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICBvbkxvYWQoKSB7XG4gICAgLy8g55Sf5Lqn6ZW/5bqm5Li6IDEwMCDnmoTmlbDnu4RcbiAgICBjb25zdCBhcnIgPSBbXSBhcyBzdHJpbmdbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDA7IGkrKykge1xuICAgICAgYXJyLnB1c2goZ2VuTnVtU3RyKGkpKTtcbiAgICB9XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBhcnJheTogYXJyLFxuICAgICAgaW1nVXJsOiBnZW5JbWdVcmwodGhpcy5kYXRhLmluZGV4ICsgMSksXG4gICAgICBudW1zdHI6IGdlbk51bVN0cih0aGlzLmRhdGEuaW5kZXggKyAxKSxcbiAgICAgIG51bXRleHQ6IGRpY3RbYXJyWzBdXVxuICAgIH0pO1xuICB9LFxuICAvLyDkuIvkuIDkuKrmlbDlrZdcbiAgbmV4dCgpIHtcbiAgICB0aGlzLmRhdGEuaW5kZXgrKztcbiAgICB0aGlzLmRhdGEuc2VhcmNoSW5kZXgrKztcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGluZGV4OiB0cmFuc051bSh0aGlzLmRhdGEuaW5kZXgpLFxuICAgICAgaW1nVXJsOiBnZW5JbWdVcmwodGhpcy5kYXRhLmluZGV4ICsgMSksXG4gICAgICBudW1zdHI6IGdlbk51bVN0cih0aGlzLmRhdGEuaW5kZXggKyAxKSxcbiAgICAgIG51bXRleHQ6IGRpY3RbdGhpcy5kYXRhLmFycmF5W3RyYW5zTnVtKHRoaXMuZGF0YS5pbmRleCldXSxcbiAgICAgIHNlYXJjaEluZGV4OiB0cmFuc051bSh0aGlzLmRhdGEuc2VhcmNoSW5kZXgpLFxuICAgIH0pO1xuICB9LFxuICAvLyDkuIrkuIDkuKrmlbDlrZdcbiAgcHJldigpIHtcbiAgICB0aGlzLmRhdGEuaW5kZXgtLTtcbiAgICB0aGlzLmRhdGEuc2VhcmNoSW5kZXgtLTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGluZGV4OiB0cmFuc051bSh0aGlzLmRhdGEuaW5kZXgpLFxuICAgICAgaW1nVXJsOiBnZW5JbWdVcmwodGhpcy5kYXRhLmluZGV4ICsgMSksXG4gICAgICBudW1zdHI6IGdlbk51bVN0cih0aGlzLmRhdGEuaW5kZXggKyAxKSxcbiAgICAgIG51bXRleHQ6IGRpY3RbdGhpcy5kYXRhLmFycmF5W3RyYW5zTnVtKHRoaXMuZGF0YS5pbmRleCldXSxcbiAgICAgIHNlYXJjaEluZGV4OiB0cmFuc051bSh0aGlzLmRhdGEuc2VhcmNoSW5kZXgpLFxuICAgIH0pO1xuICB9LFxuICBiaW5kUGlja2VyQ2hhbmdlKGU6IGFueSkge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZS5kZXRhaWwudmFsdWUpO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgaW5kZXg6IHZhbHVlLFxuICAgICAgaW1nVXJsOiBnZW5JbWdVcmwodmFsdWUgKyAxKSxcbiAgICAgIG51bXN0cjogZ2VuTnVtU3RyKHZhbHVlICsgMSksXG4gICAgICBudW10ZXh0OiBkaWN0W3RoaXMuZGF0YS5hcnJheVt2YWx1ZV1dLFxuICAgICAgc2VhcmNoSW5kZXg6IHZhbHVlICsgMSxcbiAgICB9KVxuICB9LFxuICAvLyDmn6Xmib5cbiAgc2VhcmNoKGU6IGFueSkge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoZS5kZXRhaWwudmFsdWUgPyBlLmRldGFpbC52YWx1ZSA6IDEpO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgaW5kZXg6IHRyYW5zTnVtKHZhbHVlIC0gMSksXG4gICAgICBpbWdVcmw6IGdlbkltZ1VybCh2YWx1ZSksXG4gICAgICBudW1zdHI6IGdlbk51bVN0cih2YWx1ZSksXG4gICAgICBudW10ZXh0OiBkaWN0W3RoaXMuZGF0YS5hcnJheVt0cmFuc051bSh2YWx1ZSAtIDEpXV0sXG4gICAgICBzZWFyY2hJbmRleDogdmFsdWUsXG4gICAgfSlcbiAgfVxuICAvL+eUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gIC8vIG9uUmVhZHkoKSB7XG5cbiAgLy8gfSxcblxuICAvLyDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAvLyBvblNob3coKSB7XG5cbiAgLy8gfSxcblxuICAvLyDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAvLyBvbkhpZGUoKSB7XG5cbiAgLy8gfSxcblxuICAvLyDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAvLyBvblVubG9hZCgpIHtcblxuICAvLyB9LFxuXG4gIC8vIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gIC8vIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIC8vIH0sXG5cbiAgLy8g6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gIC8vIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgLy8gfSxcblxuICAvLyDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgLy8gb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG5cbiAgLy8gfVxufSkiXX0=