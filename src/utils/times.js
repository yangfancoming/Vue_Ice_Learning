/**
 * Created by 64274 on 2018/5/31.
 */

export function GMTToStr(time) {
    let date = new Date(time)
    let Str=date.getFullYear() + '-' +
        (date.getMonth() + 1) + '-' +
        date.getDate() + ' ' +
        date.getHours() + ':' +
        date.getMinutes() + ':' +
        date.getSeconds()
    return Str
}
export function StrToGMT(time) {
    let GMT = new Date(time)
    return GMT
}
