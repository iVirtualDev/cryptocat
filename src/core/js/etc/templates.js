// Cryptocat templates for use with mustache.js.

Cryptocat.templates = {
	buddy: '<div class="buddy" title="{{nickname}}" id="buddy-{{nickname}}" status="online">'
				+ '<span>{{shortNickname}}</span>'
		+ '<div class="buddyMenu" id="menu-{{nickname}}"></div></div>',
		
	infoDialog: '<div class="title">{{nickname}}</div>'
		+ '<div id="displayInfo">{{otrFingerprint}}<br /><span id="otrFingerprint"></span><br />'
			+ '<div id="otrColorprint"></div>{{groupFingerprint}}'
			+ '<br /><span id="multiPartyFingerprint"></span><br />'
			+ '<div id="multiPartyColorprint"></div><br /></div>',
			
	sendFile: '<div class="title">{{sendEncryptedFile}}</div>'
		+ '<input type="file" id="fileSelector" name="file[]" />'
		+ '<input type="button" id="fileSelectButton" value="{{sendEncryptedFile}}" />'
		+ '<div id="fileInfoField">{{fileTransferInfo}}</div>',
		
	file: '<div class="fileProgressBar" file="{{message}}"><div class="fileProgressBarFill"></div></div>',
	
	fileLink: '<a href="{{url}}" class="fileView" target="_blank" download="{{filename}}">{{downloadFile}}</a>',
	
	message: '<div class="line{{lineDecoration}}"><span class="sender" sender="{{sender}}"'
		+ ' timestamp="{{currentTime}}">{{sender}}</span>{{&message}}</div>'
}