"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imgs_1 = require("../../utils/imgs");
Page({
    data: {
        imgUrl: '',
        num: 1
    },
    onLoad: function () {
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUE2QztBQUU3QyxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsRUFBRTtRQUNWLEdBQUcsRUFBRSxDQUFDO0tBQ1A7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE1BQU0sRUFBRSxnQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osTUFBTSxFQUFFLGdCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDaEMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE1BQU0sRUFBRSxnQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ2hDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7U0FDbkIsQ0FBQyxDQUFDO0lBRUwsQ0FBQztDQW1DRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy90cmFpbi90cmFpbi5qc1xuaW1wb3J0IHsgZ2VuSW1nVXJsIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW1ncyc7XG5cblBhZ2Uoe1xuICAvLyDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgZGF0YToge1xuICAgIGltZ1VybDogJycsXG4gICAgbnVtOiAxXG4gIH0sXG4gIC8vIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGltZ1VybDogZ2VuSW1nVXJsKHRoaXMuZGF0YS5udW0pXG4gICAgfSk7XG4gIH0sXG4gIC8vIOS4i+S4gOS4quaVsOWtl1xuICBuZXh0KCkge1xuICAgIHRoaXMuZGF0YS5udW0rKztcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGltZ1VybDogZ2VuSW1nVXJsKHRoaXMuZGF0YS5udW0pLFxuICAgICAgbnVtOiB0aGlzLmRhdGEubnVtXG4gICAgfSk7XG4gIH0sXG4gIC8vIOS4iuS4gOS4quaVsOWtl1xuICBwcmV2KCkge1xuICAgIHRoaXMuZGF0YS5udW0tLTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGltZ1VybDogZ2VuSW1nVXJsKHRoaXMuZGF0YS5udW0pLFxuICAgICAgbnVtOiB0aGlzLmRhdGEubnVtXG4gICAgfSk7XG5cbiAgfSxcbiAgLy/nlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAvLyBvblJlYWR5KCkge1xuXG4gIC8vIH0sXG5cbiAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgLy8gb25TaG93KCkge1xuXG4gIC8vIH0sXG5cbiAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgLy8gb25IaWRlKCkge1xuXG4gIC8vIH0sXG5cbiAgLy8g55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgLy8gb25VbmxvYWQoKSB7XG5cbiAgLy8gfSxcblxuICAvLyDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAvLyBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICAvLyB9LFxuXG4gIC8vIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAvLyBvblJlYWNoQm90dG9tKCkge1xuXG4gIC8vIH0sXG5cbiAgLy8g55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gIC8vIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xuXG4gIC8vIH1cbn0pIl19