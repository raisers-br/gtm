function(){
	return function(category, action, label, type, destination, additional_data){
    var obj = additional_data || {};
		obj.event = (type || 'interaction');
		obj.event_category = category;
		obj.event_action = action;
		obj.event_label = label;
		obj.screenName = '{{Page Path}}';
		obj.event_destination = (destination || 'googleanalytics');
		if ({{isApp}}){
			{{trackFirebase}}(obj.event, obj);
		}else {
			var dtl = window.dataLayer || [];
			dtl.push(obj);
		}
	}
}
