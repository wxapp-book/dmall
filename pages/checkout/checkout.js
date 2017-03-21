var data = require( './data.js' );

Page( {
	data : {
	},
	onShow : function() {
		if ( this.orderId ) {
			wx.redirectTo( {
	  			url : '../status/status?orderId=' + this.orderId
	  		} );
			this.orderId = '';
			return;
		}
		this.data = data;
		this.setData( this.data );
	},
	submit : function( e ) {
		// 请求后台获取订单号
		var orderId = '123';
		this.orderId = orderId;
		wx.navigateTo( {
  			url : '../cashier/cashier?orderId=' + orderId
  		} );
	},
	// 修改配送方式
	changeShipment : function( e ) {
		var list = [],
			self = this,
			type = this.data.shipment.type,
			i, t;

		for ( i = 0; t = type[i]; ++i ) {
			list.push( t.text );
		}
		wx.showActionSheet({
			itemList : list,
			success : function( res ) {
				if ( res.cancel ) {
					return;
				}
				for ( i = 0; t = type[i]; ++i ) {
					t.selected = res.tapIndex == i ? true : false;
				}
				self.setData( {
					'shipment.type' : type
				} );
			}
		});
	},
	// 修改配送时间
	changeTime : function( e ) {
		var list = [],
			self = this,
			time = this.data.shipment.time,
			i, t;

		for ( i = 0; t = time[i]; ++i ) {
			list.push( t.text );
		}
		wx.showActionSheet({
			itemList : list,
			success : function( res ) {
				if ( res.cancel ) {
					return;
				}
				for ( i = 0; t = time[i]; ++i ) {
					t.selected = res.tapIndex == i ? true : false;
				}
				self.setData( {
					'shipment.time' : time
				} );
			}
		});
	},
	// 修改支付方式
	changePayment : function( e ) {
		var index = e.currentTarget.dataset.paymentIndex,
			payment = this.data.payment,
			i, p;

		for ( i = 0; p = payment[i]; ++i ) {
			p.selected = i == index ? true : false;
		}

		this.setData( {
			payment : payment
		} );
	},
	// 保存备注
	saveRemarks : function( e ) {
		var value = e.detail.value;
		this.setData( {
			'remarks.text' : value.trim()
		} );
	}
} );