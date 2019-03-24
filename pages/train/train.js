"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imgs_1 = require("../../utils/imgs");
Page({
    data: {
        imgUrl: '',
        num: 1
    },
    onLoad: function (options) {
        this.setData({
            imgUrl: imgs_1.genImgUrl(this.data.num)
        });
    },
    next: function () {
        this.data.num++;
        this.setData({
            imgUrl: imgs_1.genImgUrl(this.data.num),
            num: this.data.num
        });
    },
    prev: function () {
        this.data.num--;
        this.setData({
            imgUrl: imgs_1.genImgUrl(this.data.num),
            num: this.data.num
        });
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUE2QztBQUU3QyxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsRUFBRTtRQUNWLEdBQUcsRUFBRSxDQUFDO0tBQ1A7SUFFRCxNQUFNLFlBQUMsT0FBWTtRQUNqQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osTUFBTSxFQUFFLGdCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDakMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixNQUFNLEVBQUUsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNoQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osTUFBTSxFQUFFLGdCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDaEMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztTQUNuQixDQUFDLENBQUM7SUFFTCxDQUFDO0lBRUQsT0FBTztJQUVQLENBQUM7SUFHRCxNQUFNO0lBRU4sQ0FBQztJQUdELE1BQU07SUFFTixDQUFDO0lBR0QsUUFBUTtJQUVSLENBQUM7SUFHRCxpQkFBaUI7SUFFakIsQ0FBQztJQUdELGFBQWE7SUFFYixDQUFDO0lBR0QsaUJBQWlCO0lBRWpCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy90cmFpbi90cmFpbi5qc1xuaW1wb3J0IHsgZ2VuSW1nVXJsIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW1ncyc7XG5cblBhZ2Uoe1xuICAvLyDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgZGF0YToge1xuICAgIGltZ1VybDogJycsXG4gICAgbnVtOiAxXG4gIH0sXG4gIC8vIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gIG9uTG9hZChvcHRpb25zOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGltZ1VybDogZ2VuSW1nVXJsKHRoaXMuZGF0YS5udW0pXG4gICAgfSk7XG4gIH0sXG4gIC8vIOS4i+S4gOS4quaVsOWtl1xuICBuZXh0KCkge1xuICAgIHRoaXMuZGF0YS5udW0rKztcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGltZ1VybDogZ2VuSW1nVXJsKHRoaXMuZGF0YS5udW0pLFxuICAgICAgbnVtOiB0aGlzLmRhdGEubnVtXG4gICAgfSk7XG4gIH0sXG4gIC8vIOS4iuS4gOS4quaVsOWtl1xuICBwcmV2KCkge1xuICAgIHRoaXMuZGF0YS5udW0tLTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGltZ1VybDogZ2VuSW1nVXJsKHRoaXMuZGF0YS5udW0pLFxuICAgICAgbnVtOiB0aGlzLmRhdGEubnVtXG4gICAgfSk7XG5cbiAgfSxcbiAgLy/nlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvLyDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8vIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgLy8g55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuXG4gIH1cbn0pIl19