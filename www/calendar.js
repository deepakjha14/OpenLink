var calendar =  {
    createEvent: function(title, location, notes, linkToOpenn, endDate, successCallback, errorCallback) {
	//var linkToOpen = linkToOpenn;
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'CalendarPlugin', // mapped to our native Java class called "Calendar"
            'addCalendarEntry', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "title": title,
                "description": notes,
                "eventLocation": location,
                "linkToOpen": linkToOpenn,
                "endTimeMillis": endDate.getTime()
            }]
        );
    }
} module.exports = calendar;