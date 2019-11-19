function(){
	return (window.AnalyticsWebInterface || (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.firebase)) ? true : false;
}
