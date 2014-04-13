/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var appk = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
		this.showElements();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		/*--document.addEventListener('load', this.onLoad, false)*/
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        appk.receivedEvent('deviceready');
    },
	/*onLoad() {
		appk.receivedEvent('load');
	}*/
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
		parentElement.setAttribute();
/*		var divOne = document.getElementById('id').getElementById('showme');
/*		divOne.style.display='none';*/
        console.log('Received Event: ' + id);
    
	},
	showElements: function(){
	   var parentElement = document.getElementById('one');
	   var nextElement = document.getElementById('showNext');
	   parentElement.style.display='none';
	   nextElement.style.display='block';
	},
	addToCal: function(alink) {
		alert('ooomm :-- '+alink.name);
		var buttId = document.getElementById('chrome');
        var linkToOpenn = alink;
        var endDate = new Date("September 24, 2013 18:00:00");
        var notes = "Arrive on time, don't want to miss out (from Android)";
        var title = "PhoneGap Day";
        var location = "Amsterdam";
        var notes = "Arrive on time, don't want to miss out!";
        var success = function() { alert("Success"); };
        var error = function(message) { alert("Oopsie! " + message); };
        calendar.createEvent(title, location, notes, linkToOpenn, endDate, success, error);
	}
};
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
                "SamlinkToOpen": "someline",
                "endTimeMillis": endDate.getTime()
            }]
        );
    }
};