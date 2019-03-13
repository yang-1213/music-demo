import Vue from "vue";
import axios from "axios";

// axios全局参数
axios.defaults.baseURL = '/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 登录接口
// 必选参数 : phone: 手机号码 password: 密码
export let phoneLogin = (phone,password)=> axios.post("/login/cellphone",{phone,password});



