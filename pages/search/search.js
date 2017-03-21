var serviceItems = require( '../../service/items/items' );

Page( {
	data : {
		searchBox : {
			autoFocus : true,
			showInput : true,
			blurEvent : 'search'
		}
	},
	onLoad : function( param ) {
		this.setData( {
			autoFocus : param.autofocus ? true : false
		} );
	},
	search : function( e ) {
		var value = e.detail.value,
			self = this;
		value = value.trim();
		if ( !value ) {
			return;
		}
		serviceItems.search( {
			keywords : value
		}, function( res ){
			var list = res.data.list;
			list.push( list.shift() );
			self.setData( {
				'showAddCart' : false,
				'itemList' : res.data
			} );
		} );
	}
} );