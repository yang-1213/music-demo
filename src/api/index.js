import Vue from "vue";
import axios from "axios";

// axios全局参数
axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 代理参数 proxy=http://121.196.226.246:84

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
	// config.headers.Authorization = 'sdfsdfsd';
	console.log(config);
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
// 
// 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     return response;
//   }, function (error) {
//   对响应错误做点什么
//     return Promise.reject(error);
//   });

// 封装axios.get请求
let reqGet = (url,params)=>{
	return axios.get(url,{params}).then(res=>res.data);
}

// 手机登录接口
// 必选参数 : phone: 手机号码 password: 密码
export let phoneLogin = (phone,password)=> reqGet("/login/cellphone",{phone,password});

// 邮箱登陆
export let login = (email,password) =>reqGet('/login',{email,password});

// 获取用户歌单
export let user_playlist = (uid)=>reqGet('/user/playlist',{uid});

// 搜索接口
// 必选参数 : keywords : 关键词
// 可选参数 : limit : 返回数量 , 默认为 30 offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频
export let search = (keywords,limit=30,type=1)=>reqGet('/search',{keywords,limit,type})




