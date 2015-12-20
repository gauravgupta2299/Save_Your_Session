function click(e) {//var x=4;alert(x);
//console.log(5 + 6);
    var tabList=new Array();var urls=new Array();var d=new Date();
    var name = prompt("Please enter session name", d.toUTCString());
	chrome.tabs.query({}, function(tabs) {
	//	var specTab=tabs[0];var x=4;
		for( var i=0;i<tabs.length;i++)
			{
				if(tabs!=null){tabList[i]=tabs[i];urls[i]=tabList[i].url;}
			}
		//window.console.log("background.js : click()");
		//console.log("spectab.url");
		//alert(urls[0]);window.open(urls[0],'_newtab');

		if(name!=null){chrome.bookmarks.create({'title': name}, function(newFolder) 
			{
        		//console.log("added folder: " + newFolder.title);
        		alert("Session Saved as \""+name+"\". Check your bookmark manager! ");
        		if(tabList!=null){
        			for( var i=0;i<tabList.length;i++)
				{
					chrome.bookmarks.create({'parentId': newFolder.id,
                               'title': tabList[i].title,
                               'url': urls[i]});
				}
			}
      		});
	}

	});
	//alert(4);
}

chrome.browserAction.onClicked.addListener(click);