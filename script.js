/*chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.executeScript(null, {file: "script.js"});
  });*/
$(function() {
  chrome.runtime.onMessage.addListener(function(message,sender,sendResponse ) {
    if(message.btn === 'Add'){
      console.log('Addが押されたときの処理');
    }
  });
}());