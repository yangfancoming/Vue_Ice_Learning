import axios from 'axios'
import {  Message } from 'element-ui' // sos 注意这里  js文件文件中 调用element UI 的方法
// import qs from 'qs'
axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.headers.post["Content-type"] = "application/json;charset=utf-8"
// axios.defaults.headers.post["Content-type"] = "application/json"
// axios.defaults.baseURL = 'http://127.0.0.1:9966';
axios.defaults.baseURL = 'http://127.0.0.1:8063';
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        // config.data = qs.stringify(config.data); // fuck 这里不能使用  stringify ！
        // fuck stringify 转换结果为  _dob=&_name=&_username=&pageNum=1&pageSize=10&total=&sort=id  传到后台 JSON.parse 解析会失败
        // fuck 不适用 stringify 转换结果为  {"_dob":"","_name":"","_username":"","pageNum":1,"pageSize":10,"total":null,"sort":"id"}  传到后台 JSON.parse 成功解析成map
    }
    return config;
},(error) =>{
    Message.error('加载超时！');
    return Promise.reject(error);
});

// 返回状态判断 {"status":401,"message":"Authentication failed","errorCode":10,"timestamp":"2018-05-30T13:27:15.530+0000"}
axios.interceptors.response.use((res) =>{
    // console.log(res.data,'返回状态判断.');
    if(!res.data.success){
        console.log('ok' + 333)
        // return Promise.reject(res); // sos 在一个promise链中，只要任何一个promise被reject，该链就被破坏了，reject之后的promise都不会再执行，而是直接调用.catch方法。
    }
    return res;
}, (err) => {
    Message.error('请求失败！');
    console.log(err.response,'整个错误.'); // sos 注意这里  err 后需要加上 response 才能拿到返回信息！！！
    console.log(err.response.data.status,'错误状态码.');
    console.log(err.response.data.message,'错误信息')
    console.log(err.response.data.errorCode,'错误码')
    return Promise.reject(err);
});

// export const postRequest = (url, params) => {
//     return axios({
//         method: 'post',
//         url: `${url}`,
//         data: params,
//         transformRequest: [function (data) {
//             // Do whatever you want to transform the data
//             let ret = ''
//             for (let it in data) {
//                 ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//             }
//             console.log(ret);
//             return ret
//         }],
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     });
// }