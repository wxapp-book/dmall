var handle, events, _fn,
    res = require( './data.js' ),
    utils = require( '../../common/utils/utils' );

handle = {
  render : function( callerPage ) {
  	_fn.init( callerPage );
  	callerPage.setData( {
  		currentView : 'cart',
      currentData : res.data
  	} );
  }
};

events = {
  cartClickProxy : function( e ) {
    var target = e.target;
    if ( target.dataset && target.dataset.eventType && _fn[target.dataset.eventType] ) {
      _fn[target.dataset.eventType].call( this, e );
    }
  }
}

_fn = {
	init : function( callerPage ) {
		if ( callerPage.initedCart ) {
			return;
		}
		utils.mix( callerPage, events );
		callerPage.initedCart = true;
	},
  // 选好了
  buy : function( e ) {
    var index = e.currentTarget.dataset.shopIndex,
        shop = this.data.currentData.shops[index],
        id = shop.id;

    wx.navigateTo( {
      url : '../checkout/checkout?orderId=xxx'
    } );
  },

  // 选中所有
  selectAll : function( e ) {
    var index = e.currentTarget.dataset.shopIndex,
        shop = this.data.currentData.shops[index],
        i, p;

    shop.selected = !shop.selected;
    for ( i = 0; p = shop.items[i]; ++i ) {
      p.selected = shop.selected;
    }
    this.setData( this.data );
  },

  // 选中当前
  select : function( e ) {
    var index = e.currentTarget.dataset.shopIndex,
        shop = this.data.currentData.shops[index],
        pIndex = e.target.dataset.pIndex,
        selectedAll = true, i, p;

    shop.items[pIndex].selected = !shop.items[pIndex].selected;
    for ( i = 0; p = shop.items[i]; ++i ) {
      if ( p.selected == false ) {
        selectedAll = false;
        break;
      }
    }
    shop.selected = selectedAll;
    this.setData( this.data );
  },

  // 加
  plus : function( e ) {
    var index = e.currentTarget.dataset.shopIndex,
        shop = this.data.currentData.shops[index],
        pIndex = e.target.dataset.pIndex,
        selectedAll = true, i, p;

    shop.items[pIndex].num = shop.items[pIndex].num * 1 + 1;
    // 最多购买99件
    if ( shop.items[pIndex].num > 99 ) {
      shop.items[pIndex].num = 99;
      wx.showModal( {
        title : '提示',
        content : '最多购买99件',
        showCancel : false
      } );

    } 
    this.setData( this.data );
  },

  // 减 
  minus : function( e ) {
    var index = e.currentTarget.dataset.shopIndex,
        shop = this.data.currentData.shops[index],
        pIndex = e.target.dataset.pIndex,
        self = this,
        selectedAll = true, i, p,
        num;

    num = shop.items[pIndex].num * 1 - 1;
    // 最多购买99件
    if ( num < 1 ) {
      wx.showModal( {
        title : '提示',
        content : '确定删除？',
        success : function( res ) {
          if ( !res.confirm ) {
            return;
          } 
          // 删除当前商品
          shop.items.splice( pIndex, 1 );
          // 商品清空后，清空当前购物车
          if ( shop.items.length <= 0 ) {
            self.data.currentData.shops.splice( index, 1 );
          }
          self.setData( self.data );
        }
      } );
      return;
    } 

    shop.items[pIndex].num = num;
    this.setData( this.data );
  }
}

module.exports = handle;