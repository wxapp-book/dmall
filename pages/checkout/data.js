var data;
data = {
	shipment : {
		type : [
			{ 
				text : '多点配送',
				type : 1,
				selected : true
			},{
				text : '其他配送',
				type : 2,
				selected : false
			}
		],
		time : [{
			text : '今天（周五） 16:00-17:00',
			timeType : 1,
			selected : false
		},{
			text : '今天（周五） 18:00-19:00',
			timeType : 2,
			selected : true
		},{
			text : '今天（周五） 20:00-21:00',
			timeType : 3,
			selected : false
		},{
			text : '今天（周五） 22:00-23:00',
			timeType : 4,
			selected : false
		}]
	},


	payment : [
		{
			iconClass : 'onlinepayment',
			text : '在线支付',
			selected : false
		},{
			iconClass : 'offlinepayment',
			text : '货到付款',
			selected : true
		}
	],
	remarks : {
		text : ''
	},

	orderInfo : {
		list : [{
			name : '商品金额',
			price : '¥30.00'
		},{
			name : '促销优惠',
			price : '¥0.00'
		},{
			name : '基础运费',
			price : '¥5.00'
		}],
		all : '¥35.00'
	},

	products : [
		{
			name : '脐橙',
			num : 2,
			price : '¥2.10'
		},{
			name : '脐橙',
			num : 1,
			price : '¥2.10'
		}
	],
	totalPrice : '30.10'
};
module.exports = data;