var handle,
	_fn;

handle = {
	query : function( object ) {
		wx.request({
			url : object.url,
			data : object.param,
			method : 'get',
			success : function( res ) {
				_fn.responseWrapper( res, object.callback );
			},
			fail : function( res ) {
				_fn.responseWrapper( res, object.callback );
			}
		});
	}
}

_fn = {
	responseWrapper : function( res, callback ) {
		if ( !res || res.statusCode != 200 ) {
			callback( {
				errCode : -1,
				errMsg : '网络问题',
				data : {}
			} );
			return;
		}

		// 一些特殊登录统一拦截，如未登录等情况
		if ( res.data.errCode == 12341234 ) {
			// 跳转到登录页
		}
		if ( typeof callback == 'function' ) {
			callback( res.data );
		}
	}
}

module.exports = handle;