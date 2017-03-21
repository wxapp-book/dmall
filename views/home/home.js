var data = require( './data.js' ),
	modules = require( '../../views/modules/modules.js' ),
	utils = require( '../../common/utils/utils' ),
	handle,
	_fn;

handle = {
	render : function( callerPage ) {
		_fn.init( callerPage );
		// 请求数据，渲染数据
		callerPage.setData( {
			currentView : 'home',
			currentData : data.data
		} );
	}
}

_fn = {
	init : function( callerPage ) {
		if ( callerPage.initedHome ) {
			return;
		}
		//utils.mix( callerPage, events );
		utils.mix( callerPage, modules.events );
	}
}

module.exports = handle;