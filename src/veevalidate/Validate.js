/*
插件自带的验证规则：
after{target} - 比target要大的一个合法日期，格式(DD/MM/YYYY)
alpha - 只包含英文字符
alpha_dash - 可以包含英文、数字、下划线、破折号
alpha_num - 可以包含英文和数字
before:{target} - 和after相反
between:{min},{max} - 在min和max之间的数字
confirmed:{target} - 必须和target一样
date_between:{min,max} - 日期在min和max之间
date_format:{format} - 合法的format格式化日期
decimal:{decimals?} - 数字，而且是decimals进制
digits:{length} - 长度为length的数字
dimensions:{width},{height} - 符合宽高规定的图片
email - 邮箱
ext:[extensions] - 后缀名
image - 图片 
in:[list] - 包含在数组list内的值
ip - ipv4地址
max:{length} - 最大长度为length的字符
mimes:[list] - 文件类型
min - max相反
mot_in - in相反
numeric - 只允许数字
regex:{pattern} - 值必须符合正则pattern
required - 不解释
size:{kb} - 文件大小不超过
url:{domain?} - (指定域名的)url
 */
import Vue from 'vue'
import VeeValidate, {  Validator } from 'vee-validate';

// import zh_CN from 'vee-validate/dist/locale/zh_CN';
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);
const i18n = new VueI18n({ locale: 'zh_CN',})

const dictionary = {
  zh_CN: {
    messages: {
      email: () => '请输入正确的邮箱格式', //更改email中的错误提示信息
      required: (field) => "请输入" + field
    },
    attributes: {
      email: '邮箱',
      password: '密码',
      name: '账号',
      mobile: '手机',
      length11: '长度'
    }
  }
}
const config = {
  delay: 0,
  events: 'input|blur',
  i18n,
  i18nRootKey: 'validation',
  dictionary
};
Vue.use(VeeValidate, config);

Validator.localize(dictionary);

Validator.extend('mobile', {
  getMessage: (field) => {
    zh_CN: field => field + '必须是11位手机号码';
  },
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});

Validator.extend('length11', {
  getMessage: (field) => {
    zh_CN: field => field + '必须是11位';
  },
  validate: value => {
    return value.length == 11
  }
});
