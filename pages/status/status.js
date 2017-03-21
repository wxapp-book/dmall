Page( {
	back : function() {
		wx.navigateBack({
			delta : 1
		});
	},

	goOrderList : function() {
		wx.showModal( {
			title : '提示',
			content : '暂未实现',
			showCancel : false
		} );	
	}
} );