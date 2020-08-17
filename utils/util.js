"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genRandNum = exports.genNumStr = exports.transNum = exports.formatTime = void 0;
function formatTime(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}
exports.formatTime = formatTime;
var formatNumber = function (n) {
    var str = n.toString();
    return str[1] ? str : '0' + str;
};
function transNum(num) {
    if (num === void 0) { num = 0; }
    return Math.round((num < 0 ? num + 100 : num) % 100);
}
exports.transNum = transNum;
function genNumStr(num) {
    var numstr = transNum(num).toString();
    if (numstr.length === 1) {
        numstr = '0' + numstr;
    }
    return numstr;
}
exports.genNumStr = genNumStr;
function genRandNum(num) {
    if (num === void 0) { num = 0; }
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr.join('');
}
exports.genRandNum = genRandNum;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBZ0IsVUFBVSxDQUFDLElBQVU7SUFDbkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQy9CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDakMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQzFCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUM1QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDaEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBRWhDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2xILENBQUM7QUFURCxnQ0FTQztBQUVELElBQU0sWUFBWSxHQUFHLFVBQUMsQ0FBUztJQUM3QixJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDeEIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtBQUNqQyxDQUFDLENBQUE7QUFHRCxTQUFnQixRQUFRLENBQUMsR0FBTztJQUFQLG9CQUFBLEVBQUEsT0FBTztJQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRkQsNEJBRUM7QUFHRCxTQUFnQixTQUFTLENBQUMsR0FBVztJQUNuQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN2QixNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUN2QjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFORCw4QkFNQztBQUlELFNBQWdCLFVBQVUsQ0FBQyxHQUFPO0lBQVAsb0JBQUEsRUFBQSxPQUFPO0lBQ2hDLElBQU0sR0FBRyxHQUFHLEVBQWMsQ0FBQztJQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMxQztJQUNELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBTkQsZ0NBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZm9ybWF0VGltZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKClcbiAgY29uc3QgaG91ciA9IGRhdGUuZ2V0SG91cnMoKVxuICBjb25zdCBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKVxuICBjb25zdCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKVxuXG4gIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0ubWFwKGZvcm1hdE51bWJlcikuam9pbignLycpICsgJyAnICsgW2hvdXIsIG1pbnV0ZSwgc2Vjb25kXS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKCc6Jylcbn1cblxuY29uc3QgZm9ybWF0TnVtYmVyID0gKG46IG51bWJlcikgPT4ge1xuICBjb25zdCBzdHIgPSBuLnRvU3RyaW5nKClcbiAgcmV0dXJuIHN0clsxXSA/IHN0ciA6ICcwJyArIHN0clxufVxuXG4vLyDlsIbotJ/mlbDjgIHlsI/mlbDjgIHlpKfkuo7kuKTkvY3mlbDnrYnnmoTmlbDlrZfovazmjaJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc051bShudW0gPSAwKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgucm91bmQoKG51bSA8IDAgPyBudW0gKyAxMDAgOiBudW0pICUgMTAwKTtcbn1cblxuLy8g5bCG5pWw5a2X6L2s5o2i5oiQ5Lik5L2N5pWw5a2X56ym5LiyXG5leHBvcnQgZnVuY3Rpb24gZ2VuTnVtU3RyKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgbGV0IG51bXN0ciA9IHRyYW5zTnVtKG51bSkudG9TdHJpbmcoKTtcbiAgaWYgKG51bXN0ci5sZW5ndGggPT09IDEpIHtcbiAgICBudW1zdHIgPSAnMCcgKyBudW1zdHI7XG4gIH1cbiAgcmV0dXJuIG51bXN0cjtcbn1cblxuLy8g6ZqP5py655Sf5oiQ5aSa5L2N5pWwXG4vLyBAbnVtIOihqOekuuWHoOS9jeaVsFxuZXhwb3J0IGZ1bmN0aW9uIGdlblJhbmROdW0obnVtID0gMCk6IHN0cmluZyB7XG4gIGNvbnN0IGFyciA9IFtdIGFzIG51bWJlcltdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgYXJyLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgfVxuICByZXR1cm4gYXJyLmpvaW4oJycpO1xufVxuIl19