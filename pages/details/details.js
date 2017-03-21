var data = require( './data.js' ),
	serviceCart = require( '../../service/cart/cart.js' );

Page( {
	data : {},
	onLoad : function() {
		var self = this;
		this.setData( data );
		serviceCart.get( function( res ) {
			self.setData( {
				cartNum : res.data.num
			} );
		} );
	},
	bannerChange : function( e ) {
		var banner = this.data.banner,
			current = e.detail.current,
			i, b;

		for ( i = 0; b = banner[i]; ++i ) {
			b.selected = i == current ? true : false;
		}
		this.setData( this.data );
	},
	addCart : function( e ) {
		var dataset = e.currentTarget.dataset,
			self = this;
		serviceCart.add( dataset.storeId, dataset.skuId, 1, function( res ) {
			self.setData( {
				cartNum : res.data.num
			} );
		} );
	}
} );