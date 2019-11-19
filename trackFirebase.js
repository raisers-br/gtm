function(){
	return function(name, params){
		if(!name) return;
		if(window.AnalyticsWebInterface){
			window.AnalyticsWebInterface.logEvent(name, JSON.stringify(params));
		}else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.firebase){
			window.webkit.messageHandlers.firebase.postMessage({'command': 'logEvent', 'name': name, 'parameters': params});
		}else{
			return;
		}
	}
}
