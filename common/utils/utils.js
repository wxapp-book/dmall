var handle;

handle = {
  mix : function( r, s ) {
    var p;
    for ( p in s ) {
      r[p] = s[p]
    }
  }
}

module.exports = handle;