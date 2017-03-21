var data = require( './data.js' );

Page( {
	data : {},
	onShow : function() {
		// 每次进入都要请求一次
		this.setData( data );
	},

	changePayment : function( e ) {
		var paymentIndex = e.currentTarget.dataset.paymentIndex,
			payment = this.data.payment,
			i, p;
		for ( i = 0; p = payment[i]; ++i ) {
			p.selected = i == paymentIndex ? true : false;
		}

		this.setData( {
			payment : payment
		} );
	},

	// 确认支付
	pay : function() {
		wx.navigateBack( {
			delta : 1
		} )
	}
} );