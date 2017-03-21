var modules = require( '../../views/modules/modules.js' ),
	utils = require( '../../common/utils/utils.js' ),
	serviceCart = require( '../../service/cart/cart.js' ),
	data = require( 'data.js' ),
	_fn;

Page( {
	data : data.data,
	modulesAddCart : function( e ) {
		var dataset = e.currentTarget.dataset,
			self = this;

		serviceCart.add( dataset.skuId, dataset.storeId, 1, function( data ) {
			// 模拟添加
			wx.showToast( {
				title : '添加成功',
				icon : 'success',
				duration : 1000
			} );
		} );
	}
} );


