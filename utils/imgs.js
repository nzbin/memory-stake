"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function genImgUrl(num) {
    num = Math.round(Math.abs(num));
    num = num % 100;
    var numstr = num.toString();
    if (numstr.length === 1) {
        numstr = '0' + numstr;
    }
    return "http://po6g4uiw0.bkt.clouddn.com/" + numstr + ".jpg";
}
exports.genImgUrl = genImgUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFnQixTQUFTLENBQUMsR0FBVztJQUVuQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFaEMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFFaEIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdkIsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7S0FDdkI7SUFDRCxPQUFPLHNDQUFvQyxNQUFNLFNBQU0sQ0FBQTtBQUN6RCxDQUFDO0FBWEQsOEJBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2VuSW1nVXJsKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgLy8g6LSf5pWw5oiW5bCP5pWwXG4gIG51bSA9IE1hdGgucm91bmQoTWF0aC5hYnMobnVtKSk7XG4gIC8vIOi2hei/h+S4pOS9jeaVsFxuICBudW0gPSBudW0gJSAxMDA7XG5cbiAgbGV0IG51bXN0ciA9IG51bS50b1N0cmluZygpO1xuICBpZiAobnVtc3RyLmxlbmd0aCA9PT0gMSkge1xuICAgIG51bXN0ciA9ICcwJyArIG51bXN0cjtcbiAgfVxuICByZXR1cm4gYGh0dHA6Ly9wbzZnNHVpdzAuYmt0LmNsb3VkZG4uY29tLyR7bnVtc3RyfS5qcGdgXG59Il19