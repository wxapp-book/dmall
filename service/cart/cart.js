var ajax = require( '../../common/ajax/ajax.js' ),
	simularNumber = 12,
	handle;

handle = {
	add : function( storeId, skuId, num, callback ) {
		ajax.query( {
			url : 'https://www.dmall.com',
			param : {
				storeId : storeId,
				skuId : skuId,
				num : num
			},
			callback : function() {
				++simularNumber;
				callback( {
					errCode : '0000',
					errMsg : '',
					data : {
						num : simularNumber
					}
				} );
			}
		} )
	},

	get : function( callback ) {
		ajax.query( {
			url : 'https://www.dmall.com',
			param : {},
			callback : function() {
				callback( {
					errCode : '0000',
					errMsg : '',
					data : {
						num : simularNumber
					}
				} );
			}
		} )
	}
}

module.exports = handle;