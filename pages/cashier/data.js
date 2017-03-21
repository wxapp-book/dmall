var data;
data = {
	tips : '请在下单后15分钟内完成支付，否则订单将失效',
	orderInfo : [{
		text : 	'订单编号：18312466018'
	},{
		text : '订单金额：18.90元'
	}],
	price : '18.90',
	payment : [{
		iconClass : 'weixinpay',
		name : '微信支付',
		info : '推荐安装微信5.0及以上版本的用户使用！',
		selected : true
	},{
		iconClass : 'alipay',
		name : '支付宝',
		info : '推荐有支付宝账号的用户使用',
		selected : false
	}]
};
module.exports = data;