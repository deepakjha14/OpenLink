package io.cordova.CustomPlugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.ComponentName;
import android.content.Intent;
import android.net.Uri;

public class CalendarPlugin extends CordovaPlugin {
	 public static final String ACTION_OPEN_URL = "openUrlBrowser";
	 @Override
	 public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		 try {
			    if (ACTION_OPEN_URL.equals(action)) { 
		           JSONObject arg_object = args.getJSONObject(0);
		           String uri = arg_object.getString("alink");
		           String desiredBrowser = arg_object.getString("desiredBrowser");
		           if(desiredBrowser.equals("chrome")){
			           String packageName = "com.android.browser"; 
			           String className = "com.android.browser.BrowserActivity";		           
			           Intent calIntent = new Intent(Intent.ACTION_VIEW);
			           calIntent.addCategory(Intent.CATEGORY_LAUNCHER); 
			           calIntent.setClassName(packageName, className); 
		               calIntent.setData(Uri.parse(uri));
		               this.cordova.getActivity().startActivity(calIntent);
				       return true;
		           }				   
		           if(desiredBrowser.equals("opera")){		        	   			         
			           String packageName = "com.opera.mini.android"; 
			           String className = "com.opera.mini.android.Browser";		           
			           Intent calIntent = new Intent(Intent.ACTION_VIEW);
			           calIntent.addCategory(Intent.CATEGORY_LAUNCHER); 
			           calIntent.setClassName(packageName, className); 
		               calIntent.setData(Uri.parse(uri));
		               this.cordova.getActivity().startActivity(calIntent);
				       return true;
		           }
		           if(desiredBrowser.equals("mozilla")){		        	   
		        	   Intent calIntent = new Intent(Intent.ACTION_MAIN, null);
		        	   calIntent.addCategory(Intent.CATEGORY_LAUNCHER);
		        	   calIntent.setComponent(new ComponentName("org.mozilla.firefox", "org.mozilla.firefox.App"));
		        	   calIntent.setAction("org.mozilla.gecko.BOOKMARK");
		        	   calIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
		        	   calIntent.putExtra("args", "--url=" + uri);
		        	   calIntent.setData(Uri.parse(uri));	
		               this.cordova.getActivity().startActivity(calIntent);
				       return true;
		           }
			    }
			    callbackContext.error("Invalid action");
			    return false;
			} catch(Exception e) {
			    System.err.println("Exception: " + e.getMessage());
			    callbackContext.error(e.getMessage());
			    return false;
			}
	 }
}
