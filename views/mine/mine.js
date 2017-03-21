var handle, _fn, events,
	utils = require( '../../common/utils/utils' );

handle = {
  render : function( callerPage ) {
  	_fn.init( callerPage );
  	callerPage.setData( {
  		currentView : 'mine'
  	} );
  }
};

events = {
	mineCallPhone : function( e ) {
		var phone = e.currentTarget.dataset.phone;
		wx.makePhoneCall( {
			phoneNumber : phone
		} );
	}
}

_fn = {
	init : function( callerPage ) {
		if ( callerPage.initedMine ) {
			return;
		}
		utils.mix( callerPage, events );
		callerPage.initedMine = true;
	}
}

module.exports = handle;
