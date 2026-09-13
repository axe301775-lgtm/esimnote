/* Added providers; official-source snapshot checked 2026-09-13. */
window.SIMNOTE_DATA.unshift(
  {id:'saily',name:'Saily',mark:'s',region:'US',place:'美国',dial:'+1',plan:'Phone Number · 号码订阅',currency:'USD',price:'1.99',unit:'月',priceNote:'号码订阅费 · 通话短信套餐另计',cost:'美国号码订阅 US$1.99/月；通话及短信套餐 US$0.99 起，按需另购。12 个月订阅合计 US$23.88，为按现价计算，非年付套餐。仅收短信是否需要额外套餐，官方发布说明与条款措辞有差异，须在下单前确认。',priceType:'号码订阅',mode:'active',kyc:'required',kycLabel:'号码功能须证件实名',activation:'App 申请 · 须通过 KYC',conditionNote:'中国证件须护照＋身份证',sms:'美国号码 / SMS',smsNote:'验证码非全平台保证 · 不支持 MMS',keep:'维持按月自动续订；到期或取消后号码可能被释放，无法保证找回。',documents:'需通过号码服务 KYC。一般支持有效的政府签发身份证、护照或驾驶证，具体取决于签发国。中国及摩洛哥签发的证件必须同时提供护照和国民身份证；可能需要自拍或活体核验。',setup:'在 Saily App 订阅美国号码并通过实名验证，再按指引安装、配置兼容的 eSIM。支持使用地以所选服务覆盖范围为准。',warning:'US$1.99 是号码订阅价，不能直接视为所有通话短信都包含。仅收短信的套餐要求存在官方资料措辞差异；不支持携号转网。',intro:'Saily 已提供独立的美国手机号订阅，可以与 eSIM 流量配合使用。号码服务须实名，条件与纯流量产品不同。',source:[
    {title:'美国号码订阅与套餐价格',url:'https://saily.com/esim-phone-number/'},
    {title:'KYC 支持证件与签发国限制',url:'https://support.saily.com/hc/en-us/articles/29288111980060-What-are-the-types-of-documents-Saily-accepts-for-the-Phone-Numbers-KYC-verification'},
    {title:'号码类型与功能限制',url:'https://support.saily.com/hc/en-us/articles/27948598334620-What-is-a-Saily-phone-number'},
    {title:'OTP 与 2FA 兼容性说明',url:'https://support.saily.com/hc/en-us/articles/27948689277596-Can-I-use-Saily-phone-number-for-OTP-and-2FA'},
    {title:'服务条款：号码订阅、套餐及到期处理',url:'https://saily.com/zh/legal/terms-of-service/'},
    {title:'Saily 官方发布：接收短信说明',url:'https://www.globenewswire.com/news-release/2026/06/11/3310591/0/en/saily-the-esim-app-from-nordvpn-launches-phone-numbers.html'}
  ],faqs:[
    {id:'saily-cost',q:'Saily 的 US$1.99/月包含所有费用吗？',a:'这是美国号码的订阅费用。通话和短信套餐另售，官网显示 US$0.99 起；流量也可能另计。12 个月号码订阅按现价计算为 US$23.88。',source:0,topic:'费用'},
    {id:'saily-docs',q:'用中国证件注册 Saily 号码，要准备什么？',a:'中国签发的证件须同时提供有效护照和身份证，通过 App 内 KYC 后才能获知号码并启用相应功能。规则按证件签发国判断，可能要求自拍或活体检测。',source:1,topic:'注册条件'},
    {id:'saily-otp',q:'Saily 号码一定能收到所有验证码吗？',a:'不能保证所有平台都接受。官方列有测试过的 OTP / 2FA 服务，但平台规则和发送方式可能变化；开通前核对所需平台的支持情况。',source:3,topic:'短信与验证码'},
    {id:'saily-incoming',q:'仅接收短信，是否只需支付号码订阅？',a:'官方发布说明称无需有效通话套餐也可接收短信，但服务条款对号码预留和启用套餐的措辞更严格。两份官方资料未完全一致，本页不把仅付订阅费即可收短信列为无条件保证；请向客服确认当前规则。',source:5,topic:'短信与费用'},
    {id:'saily-keep',q:'取消订阅后，还能永久保留或转出号码吗？',a:'不能。订阅到期后号码可能被释放，不能保证重新分配给原用户。官方条款也说明不支持携号转网。',source:4,topic:'保号'},
    {id:'saily-number',q:'Saily 是真实美国号码吗，支持哪些短信？',a:'官方将其描述为美国无线手机号码（+1）。支持 SMS，不支持 MMS、付费或短号码服务以及呼叫转移。号码功能与纯流量 eSIM 分开订购。',source:2,topic:'号码类型'}
  ]},
  {id:'ctexcel',name:'CTExcel',mark:'CT',region:'UK',place:'英国',dial:'+44',plan:'英国业务 · 休眠保号',currency:'GBP',price:'1',unit:'月',priceNote:'已有号码的休眠服务 · 非开卡总价',cost:'已开通的英国号码可申请 £1/月休眠保号；最低计费单位为一个自然月，保号期间费用一次预付。按 12 个月计算为 £12，不含首次购卡、激活或恢复后使用费用。旅行卡不支持这项保号服务。',priceType:'休眠保号费',mode:'parked',kyc:'unspecified',kycLabel:'主号证件要求未明确',activation:'英国 / 欧盟首次激活',conditionNote:'一卡双号另有实名审核',sms:'休眠保号 ≠ 正常收短信',smsNote:'恢复使用及短信条件需另核对',keep:'用账户余额预付所选保号期间费用，号码进入休眠状态；需要使用时在官网或联系客服恢复。',documents:'所查英国主号购卡说明未给出统一证件实名清单，按实际订购与核验流程准备资料。一卡双号的实名审核是另一项服务，不能直接套用于英国主号。',setup:'英国官网明确要求 eSIM 与实体卡在英国或欧盟激活，并在激活后 10 天内产生使用记录。休眠保号适用于已有号码，旅行卡不支持。',warning:'£1/月用于暂时停用并保留号码，官网未承诺休眠期间正常收短信。此页只比较 CTExcel 英国业务，不能套用到香港、加拿大等地区。',intro:'适合暂时离开英国、将来还想使用原号码的人。这里收录的是英国站的休眠保号服务，开卡与日常通信需另算。',source:[
    {title:'英国官网：保号服务与 £1/月费用',url:'https://www.ctexcel.com/uk/guaranteeNum'},
    {title:'英国官网 FAQ：eSIM 激活与号码使用规则',url:'https://www.ctexcel.com/uk/commonProblem'},
    {title:'英国官网：开户与一卡双号服务',url:'https://www.ctexcel.com/uk/'},
    {title:'CTExcel 全球业务：各地区独立入口',url:'https://www.ctexcel.com/global/globalBusiness-en.html'}
  ],faqs:[
    {id:'ctexcel-keep',q:'CTExcel 的 £1/月，可以正常收验证码吗？',a:'官网将这项服务描述为号码进入休眠状态，适用于暂时停用后再恢复。不能将 £1/月直接理解成可正常收短信的活跃套餐；如要持续接收验证码，请先核对有效套餐及漫游条件。',source:0,topic:'保号与短信'},
    {id:'ctexcel-cost',q:'£1/月如何收费，新开卡也只要这个价格吗？',a:'休眠保号面向已有英国号码，所选期间费用从余额一次预付，最低按一个自然月计费。12 个月按现价为 £12；首次购卡、激活和恢复后的通信支出另算，旅行卡不支持这项保号服务。',source:0,topic:'费用'},
    {id:'ctexcel-activate',q:'CTExcel 英国 eSIM 能在中国大陆首次激活吗？',a:'英国站明确要求 eSIM 与实体卡在英国或欧盟激活，并在激活后 10 天内有使用记录；因此不能将大陆首次激活视为支持。',source:1,topic:'开通地区'},
    {id:'ctexcel-docs',q:'英国主号和一卡双号，实名条件一样吗？',a:'不能混为一谈。英国主号所查购卡说明未明确统一证件清单；一卡双号有独立的实名材料审核流程，按该服务的最新申请要求办理。',source:2,topic:'注册条件'},
    {id:'ctexcel-country',q:'英国保号费适用于 CTExcel 其他国家业务吗？',a:'不适用。CTExcel 各地区的套餐、激活、实名及漫游政策分别发布。本页 £1/月和激活限制来自英国站，其他地区应进入对应官网重新核对。',source:3,topic:'国家与地区'}
  ]}
);
