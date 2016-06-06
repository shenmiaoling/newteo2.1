export const webOptions =  [
  [
    {
      part: '基本功能',
      section: '注册登录',
      options: [
        {name:'邮箱', id: 1, description: '邮箱注册，包含邮件包含验证链接，采用第三方邮件发送服务'},
        {name:'手机', id: 2, description: '手机号注册，发送手机验证码，采用第三方短信发送平台'},
        {name:'密码找回', id: 3, description: '忘记密码，默认发送邮件链接或发送手机验证码进入密码重置页'},
      ],
    },
    {
      part: '',
      section: '第三方登录',
      options: [
        {name:'微信', id: 4, description: '微信授权登录，获取借口提供的基本信息，要求用户完善平台个人资料。'},
        {name:'QQ', id: 5, description: 'QQ授权登录，获取借口提供的基本信息，要求用户完善平台个人资料。'},
        {name:'微博', id: 6, description: '微博授权登录，获取借口提供的基本信息，要求用户完善平台个人资料。'},
      ],
    },
    {
      part: '',
      section: '用户中心',
      options: [
        {name:'修改密码', id: 7, description: '修改用户密码'},
        {name:'修改更新资料', id: 8, description: '修改用户资料'},
        {name:'第三方登录管理', id: 9, description: '绑定或解绑第三方登录帐号'},
      ],
    },
    {
      part: '',
      section: '主内容展示',
      options: [
        {name:'搜索', id: 10, description: '关键字搜索'},
        {name:'排序', id: 11, description: '基本排序'},
        {name:'收藏', id: 12, description: '加入个人收藏'},
        {name:'评论', id: 13, description: '文字评论'},
      ],
    },
  ],
  [
    {
      part: '高级功能',
      section: '通知推送方式',
      options: [
        {name:'邮件通知', id: 14, description: '通过注册邮箱发送通知邮件'},
        {name:'短信通知', id: 15, description: '通过注册手机号发送通知短信'},
      ],
    },
    {
      part: '',
      section: '高级搜索',
      options: [
        {name:'条件筛选', id: 16, description: '按条件筛选'},
        {name:'其他筛选', id: 17, description: '自定义筛选条件'},
      ],
    },
    {
      part: '',
      section: '主内容相关',
      options: [
        {name:'主内容评论', id: 18, description: '文字评论'},
      ],
    },
    {
      part: '',
      section: '客户服务',
      options: [
        {name:'在线客服', id: 19, description: '平台内在选咨询功能'},
        {name:'在线留言', id: 20, description: '平台内在线留言功能'},
      ],
    },
  ],
  [
    {
      part: '电商功能',
      section: '活动优惠',
      options: [
        {name:'优惠券', id: 21, description: '优惠券，包含券码编号，满减或免邮'},
        {name:'折扣', id: 22, description: '折扣优惠，原价和折扣价'},
      ],
    },
    {
      part: '',
      section: '积分系统',
      options: [
        {name:'积分系统设计及展示', id: 23, description: '平台积分系统设计和展示'},
        {name:'商城/兑换', id: 24, description: '积分商城，兑换规则和商品兑换'},
      ],
    },
    {
      part: '',
      section: '评价系统',
      options: [
        {name:'评分评价发布', id: 25, description: '对商品的评价和评分的发布，包含文字或图片'},
        {name:'评价列表', id: 26, description: '评价列表展示'},
        {name:'评价评论', id: 27, description: '对评价的评论（回帖跟帖）'},
      ],
    },
    {
      part: '',
      section: '配送管理',
      options: [
        {name:'地址管理', id: 28, description: '地址列表查看，配送地址管理'},
        {name:'物流跟踪', id: 29, description: '配送情况查看，对接第三方物流接口'},
      ],
    },
    {
      part: '',
      section: '订单管理',
      options: [
        {name:'订单列表/详情', id: 30, description: '订单包含的商品列表和订单详情'},
        {name:'订单流程', id: 31, description: '从加入购物车到生成订单的步骤细分'},
        {name:'收货标记', id: 32, description: '收货确认和标记'},
      ],
    },
    {
      part: '',
      section: '支付',
      options: [
        {name:'微信支付', id: 33, description: '接入微信支付接口'},
        {name:'支付宝支付', id: 34, description: '接入支付宝支付接口'},
        {name:'其他支付', id: 35, description: '接入银联或其他支付接口'},
      ],
    },
  ],
  [
    {
      part: '社交功能',
      section: '分享',
      options: [
        {name:'分享到第三平台', id: 36, description: '调用第三方分享服务接口'},
        {name:'论坛社区', id: 37, description: '整合第三方服务，包括样式调整和用户信息整合'},
      ],
    }
  ],
  [
    {
      part: '其他',
      section: 'UI设计（单选）',
      options: [
        {name:'普通设计', id: 38, description: '对UI无过高要求'},
        {name:'高级设计', id: 39, description: '对UI有较高或特殊要求'},
        {name:'无', id: 40, description: '自行提供'},
      ],
    },
    {
      part: '',
      section: '统计分析',
      options: [
        {name:'第三方统计接口', id: 41, description: '指定的统计分析接口'},
      ],
    },
    {
      part: '',
      section: '桌面端分辨率',
      options: [
        {name:'默认', id: 42, description: '主流分辨率宽度1280px － 1920px'},
        {name:'特殊要求', id: 43, description: '自定义分辨率宽度'},
      ],
    },
    {
      part: '',
      section: '移动端响应式',
      options: [
        {name:'默认', id: 44, description: 'IPhone5以及以上型号，Android4.4以上，屏幕4-6寸之间'},
        {name:'特殊要求', id: 45, description: 'IPhone4s以下型号，Android4.4以下，屏幕对于6寸或小于4寸'},
      ],
    },
    {
      part: '',
      section: '浏览器兼容性',
      options: [
        {name:'默认', id: 46, description: 'IE10以上，最新Chrome／Safari／FireFox'},
        {name:'特殊要求', id: 47, description: 'IE10以下，非最新Chrome／Safari／FireFox'},
      ],
    },
  ],
]
export const wechatOptions =  [
  [
    {
      part: '基本功能',
      section: '注册登录',
      options: [
        {name:'账号绑定', id: 1, description: '邮箱注册，包含邮件包含验证链接，采用第三方邮件发送服务'}
      ],
    },
    {
      part: '',
      section: '第三方登录',
      options: [
        {name:'主内容列表/详情', id: 2, description: '微信授权登录，获取借口提供的基本信息，要求用户完善平台个人资料。'}
      ],
    },
    {
      part: '',
      section: '列表功能',
      options: [
        {name:'列表定义', id: 3, description: '修改用户密码'}
      ],
    },
    {
      part: '',
      section: '用户中心',
      options: [
        {name:'搜索', id: 4, description: '会员首页'},
        {name:'排序', id: 5, description: '用户资料修改更新'}
      ],
    },
  ],
  [
    {
      part: '高级功能',
      section: '通知推送',
      options: [
        {name:'邮件通知', id: 6, description: '短信通知'}
      ],
    },
    {
      part: '',
      section: '高级搜索',
      options: [
        {name:'条件筛选', id: 7, description: '按条件筛选'},
        {name:'其他筛选', id: 8, description: '自定义筛选条件'},
      ],
    },
    {
      part: '',
      section: '主内容相关',
      options: [
        {name:'评论（图文）', id: 9, description: '文字评论'},
      ],
    },
    {
      part: '',
      section: '交互',
      options: [
        {name:'信息发送和获取', id: 10, description: '平台内在选咨询功能'}
      ],
    },
    {
      part: '',
      section: '音乐/视频',
      options: [
        {name:'音乐播放', id: 11, description: '平台内在选咨询功能'},
        {name:'视频播放', id: 12, description: '平台内在选咨询功能'}
      ],
    },
    {
      part: '',
      section: '文件管理',
      options: [
        {name:'文件上传下载', id: 13, description: '平台内在选咨询功能'}
      ],
    },
    {
      part: '',
      section: '高级用户中心',
      options: [
        {name:'收藏', id: 14, description: '平台内在选咨询功能'},
        {name:'充值', id: 15, description: '平台内在选咨询功能'},
        {name:'取现', id: 16, description: '平台内在选咨询功能'},
        {name:'流水记录', id: 17, description: '平台内在选咨询功能'}
      ],
    },
    {
      part: '',
      section: '位置服务',
      options: [
        {name:'附近/周边', id: 18, description: '平台内在选咨询功能'},
        {name:'地点标记', id: 19, description: '平台内在选咨询功能'}
      ]
    }
  ],

  [
    {
      part: '电商功能',
      section: '商品相关',
      options: [
        {name:'商品展示', id: 20, description: '优惠券，包含券码编号，满减或免邮'}
      ],
    },
    {
      part: '',
      section: '活动优惠',
      options: [
        {name:'优惠券', id: 21, description: '优惠券，包含券码编号，满减或免邮'},
        {name:'折扣', id: 22, description: '折扣优惠，原价和折扣价'},
      ],
    },
    {
      part: '',
      section: '积分系统',
      options: [
        {name:'积分系统设计及展示', id: 23, description: '平台积分系统设计和展示'},
        {name:'商城/兑换', id: 24, description: '积分商城，兑换规则和商品兑换'},
      ],
    },
    {
      part: '',
      section: '评价系统',
      options: [
        {name:'评分评价发布', id: 25, description: '对商品的评价和评分的发布，包含文字或图片'},
        {name:'评价列表', id: 26, description: '评价列表展示'},
        {name:'评价评论', id: 27, description: '对评价的评论（回帖跟帖）'},
      ],
    },
    {
      part: '',
      section: '配送管理',
      options: [
        {name:'地址管理', id: 28, description: '地址列表查看，配送地址管理'},
        {name:'物流跟踪', id: 29, description: '配送情况查看，对接第三方物流接口'},
      ],
    },
    {
      part: '',
      section: '订单管理',
      options: [
        {name:'订单列表/详情', id: 30, description: '订单包含的商品列表和订单详情'},
        {name:'订单流程', id: 31, description: '从加入购物车到生成订单的步骤细分'},
        {name:'收货标记', id: 32, description: '收货确认和标记'},
      ]
    },
    {
      part: '',
      section: '支付',
      options: [
        {name:'微信支付', id: 33, description: '接入微信支付接口'}
      ]
    },
    {
      part: '',
      section: '论坛社区',
      options: [
        {name:'论坛社区', id: 34, description: '接入微信支付接口'}
      ]
    },
  ],
  [
    {
      part: '其他',
      section: 'UI设计（单选）',
      options: [
        {name:'普通设计', id: 35, description: '对UI无过高要求'},
        {name:'高级设计', id: 36, description: '对UI有较高或特殊要求'},
        {name:'无', id: 37, description: '自行提供'},
      ],
    },
    {
      part: '',
      section: '统计分析',
      options: [
        {name:'第三方统计接口', id: 38, description: '指定的统计分析接口'},
      ],
    },
    {
      part: '',
      section: '移动端响应式',
      options: [
        {name:'默认', id: 39, description: 'IPhone5以及以上型号，Android4.4以上，屏幕4-6寸之间'},
        {name:'特殊要求', id: 40, description: 'IPhone4s以下型号，Android4.4以下，屏幕对于6寸或小于4寸'},
      ],
    },
  ],
]
export const appOptions =  [
  [
     {
      part: '基本功能',
      section: '通用',
      options: [
        {name:'APP logo 和启动页面', id: 1, description: '应用图标'},
        {name:'引导', id: 2, description: '手机号注册，发送手机验证码，采用第三方短信发送平台'},
        {name:'版本和升级', id: 3, description: '忘记密码，默认发送邮件链接或发送手机验证码进入密码重置页'},
        {name:'帮助和意见反馈', id: 4, description: '手机号注册，发送手机验证码，采用第三方短信发送平台'},
        {name:'关于我们', id: 5, description: '忘记密码，默认发送邮件链接或发送手机验证码进入密码重置页'},
        {name:'分享和应用打分', id: 6, description: '忘记密码，默认发送邮件链接或发送手机验证码进入密码重置页'},
      ],
    },
    {
      part: '',
      section: '注册登录',
      options: [
        {name:'邮箱', id: 7, description: '邮箱注册，包含邮件包含验证链接，采用第三方邮件发送服务'},
        {name:'手机', id: 8, description: '手机号注册，发送手机验证码，采用第三方短信发送平台'},
        {name:'密码找回', id: 9, description: '忘记密码，默认发送邮件链接或发送手机验证码进入密码重置页'},
      ],
    },
    {
      part: '',
      section: '第三方登录',
      options: [
        {name:'微信', id: 10, description: '微信授权登录，获取借口提供的基本信息，要求用户完善平台个人资料。'},
        {name:'QQ', id: 11, description: 'QQ授权登录，获取借口提供的基本信息，要求用户完善平台个人资料。'},
        {name:'微博', id: 12, description: '微博授权登录，获取借口提供的基本信息，要求用户完善平台个人资料。'},
      ],
    },
    {
      part: '',
      section: '用户中心',
      options: [
        {name:'修改密码', id: 13, description: '修改用户密码'},
        {name:'修改更新资料', id: 14, description: '修改用户资料'},
        {name:'第三方登录管理', id: 15, description: '绑定或解绑第三方登录帐号'},
      ],
    },
    {
      part: '',
      section: '主内容展示',
      options: [
        {name:'搜索', id: 16, description: '搜索'},
        {name:'排序', id: 17, description: '排序'},
        {name:'收藏', id: 18, description: '收藏'},
        {name:'评论', id: 19, description: '评论'},
      ],
    },
  ],
  [
    {
      part: '高级功能',
      section: '通知推送方式',
      options: [
        {name:'APP 通知推送', id: 20, description: '通过注册邮箱发送通知邮件'},
        {name:'邮件通知', id: 21, description: '通过注册邮箱发送通知邮件'},
        {name:'短信通知', id: 22, description: '通过注册手机号发送通知短信'},
      ],
    },
    {
      part: '',
      section: '高级搜索',
      options: [
        {name:'条件筛选', id: 23, description: '按条件筛选'},
        {name:'其他筛选', id: 24, description: '自定义筛选条件'},
      ],
    },
    {
      part: '',
      section: '主内容相关',
      options: [
        {name:'主内容评论', id: 25, description: '文字评论'},
      ],
    },
    {
      part: '',
      section: '客户服务',
      options: [
        {name:'评论（文字）', id: 26, description: '平台内在选咨询功能'},
      ],
    },
    {
      part: '',
      section: '音乐/视频',
      options: [
        {name:'音乐播放', id: 27, description: '平台内在选咨询功能'},
        {name:'视频播放', id: 28, description: '平台内在选咨询功能'},
      ],
    },
    {
      part: '',
      section: '文件管理',
      options: [
        {name:'文件上传下载', id: 29, description: '平台内在选咨询功能'},
      ],
    },
    {
      part: '',
      section: '高级用户中心',
      options: [
        {name:'收藏', id: 30, description: '平台内在选咨询功能'},
        {name:'充值', id: 31, description: '平台内在选咨询功能'},
        {name:'取现', id: 32, description: '平台内在选咨询功能'},
      ],
    },
    {
      part: '',
      section: '位置服务',
      options: [
        {name:'附近/周边', id: 33, description: '平台内在选咨询功能'},
        {name:'地点标记', id: 34, description: '平台内在选咨询功能'},
      ],
    },
  ],
  [
    {
      part: '电商功能',
      section: '活动优惠',
      options: [
        {name:'优惠券', id: 35, description: '优惠券，包含券码编号，满减或免邮'},
        {name:'折扣', id: 36, description: '折扣优惠，原价和折扣价'},
      ],
    },
    {
      part: '',
      section: '积分系统',
      options: [
        {name:'积分系统设计及展示', id: 37, description: '平台积分系统设计和展示'},
        {name:'商城/兑换', id: 38, description: '积分商城，兑换规则和商品兑换'},
      ],
    },
    {
      part: '',
      section: '评价系统',
      options: [
        {name:'评分评价发布', id: 39, description: '对商品的评价和评分的发布，包含文字或图片'},
        {name:'评价列表', id: 40, description: '评价列表展示'},
        {name:'评价评论', id: 41, description: '对评价的评论（回帖跟帖）'},
      ],
    },
    {
      part: '',
      section: '配送管理',
      options: [
        {name:'地址管理', id: 42, description: '地址列表查看，配送地址管理'},
        {name:'物流跟踪', id: 43, description: '配送情况查看，对接第三方物流接口'},
      ],
    },
    {
      part: '',
      section: '订单管理',
      options: [
        {name:'订单列表/详情', id: 44, description: '订单包含的商品列表和订单详情'},
        {name:'订单流程', id: 45, description: '从加入购物车到生成订单的步骤细分'},
        {name:'收货标记', id: 46, description: '收货确认和标记'},
      ],
    },
    {
      part: '',
      section: '支付',
      options: [
        {name:'微信支付', id: 47, description: '接入微信支付接口'},
        {name:'支付宝支付', id: 48, description: '接入支付宝支付接口'},
        {name:'其他支付', id: 49, description: '接入银联或其他支付接口'},
      ],
    },
  ],
  [
    {
      part: '社交功能',
      section: '分享',
      options: [
        {name:'分享到第三平台', id: 50, description: '调用第三方分享服务接口'},
        {name:'论坛社区', id: 51, description: '整合第三方服务，包括样式调整和用户信息整合'},
      ],
    }
  ],
  [
    {
      part: '其他',
      section: '原型设计（单选）',
      options: [
        {name:'普通设计', id: 52, description: '对UI无过高要求'},
        {name:'高级设计', id: 53, description: '对UI有较高或特殊要求'},
        {name:'无（自行提供）', id: 54, description: '自行提供'},
      ],
    },
    {
      part: '',
      section: '统计分析',
      options: [
        {name:'第三方统计接口', id: 55, description: '指定的统计分析接口'},
      ],
    },
    {
      part: '',
      section: '多客户端',
      options: [
        {name:'需要', id: 56, description: '主流分辨率宽度1280px － 1920px'},
      ],
    },
    {
      part: '',
      section: '浏览器兼容性',
      options: [
        {name:'默认', id: 57, description: 'IPhone5以及以上型号，Android4.4以上，屏幕4-6寸之间'},
        {name:'特殊要求', id: 58, description: 'IPhone4s以下型号，Android4.4以下，屏幕对于6寸或小于4寸'},
      ],
    },
    {
      part: '',
      section: '浏览器兼容性',
      options: [
        {name:'默认', id: 59, description: 'IE10以上，最新Chrome／Safari／FireFox'},
        {name:'特殊要求', id: 60, description: 'IE10以下，非最新Chrome／Safari／FireFox'},
      ],
    },
  ],
]
