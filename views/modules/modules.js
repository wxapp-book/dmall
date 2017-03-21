var utils = require( '../../common/utils/utils.js' ),
	serviceCart = require( '../../service/cart/cart.js' ),
	events,
	handle;

handle = {
	events : {
		modulesAddCart : function( e ) {
			var dataset = e.currentTarget.dataset,
				self = this;

			serviceCart.add( dataset.skuId, dataset.storeId, 1, function( data ) {
				// 模拟添加
				self.setData( {
					'cart.num' : self.data.cart.num + 1	
				} );
			} );
		},
		modulesSliderChange : function( e ) {
			var cTarget = e.currentTarget,
				index = cTarget.dataset.moduleindex,
				slider = this.data.currentData.modules[index],
				i, d,
				key;

			for ( i = 0; d = slider.data[i]; ++i ) {
				d.selected = i == e.detail.current ? true : false;
			}
			this.setData( this.data );
		}
	}
}

module.exports = handle;