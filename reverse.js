function reverseTabsOrder(){
  chrome.tabs.query({currentWindow: true}, function(tabs){
	console.log('Tabs before reverse: ', tabs);
	tabs.reverse();
    tabs.forEach(function(tab){
      chrome.tabs.move(tab.id, {index: -1});
    });
	console.log('Tabs after reverse: ', tabs);
  });
}

chrome.commands.onCommand.addListener(function(command) {
  console.log('Command: ', command);
  reverseTabsOrder();
});

chrome.browserAction.onClicked.addListener(function(tab){
  reverseTabsOrder();
});
