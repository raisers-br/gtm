function(){
  /*version 1.0*/
  return funtion( src, type, cat, us ){
  	var custom = {};
    src = src || '6995806';
    
    window.dataLayer = window.dataLayer || [];
    if( !!us ){
      custom = {
        'u1': us.u1 ||'{{Page Hostname}}'||'',
        'u2': us.u2 ||'',
        'u3': us.u3 ||'',
        'u4': us.u4 ||'{{Page Path}}'||'',
        'u5': us.u5 ||'',
        'u6': us.u6 ||'',
        'u7': us.u7 ||'',
        'u8': us.u8 ||'',
        'u9': us.u9 ||'',
        'u10':us.u10||'{{gaCookie}}'||'',
        'u11':us.u11||'',
        'u12':us.u12||'',
        'u13':us.u13||'{{Device}}'||'',
        'u14':us.u14||'',
        'u15':us.u15||'',
        'u16':us.u16||'',
        'u17':us.u17||'',
        'u18':us.u18||'',
        'u19':us.u19||'',
        'u20':us.u20||'',
        'u21':us.u21||''
      }; 
    }
    return window.dataLayer.push({
      'event': 'floodlight',
      'floodlight':{
        'src':src,
        'type':type,
        'cat':cat,
        'custom':custom
      }
    });
  }
}
