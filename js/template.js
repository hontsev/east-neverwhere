$(document).ready(function(){
	var menubar=$("#menubarContent");
	menubar.html(read("templates/menubar.html"));

});





function read(file) {
	if(typeof window.ActiveXObject != 'undefined') 
	{
		var content = "";
		try {
			var fso = new ActiveXObject("Scripting.FileSystemObject"); 
			var reader = fso.openTextFile(file, 1);
			while(!reader.AtEndofStream)
			{
				content += reader.readline();
				content += "\n";
			}
		// close the reader
		reader.close();
		}
		catch (e) {
			alert("Internet Explore read local file error: \n" + e);
		}

		return content;
	}
	else if(document.implementation && document.implementation.createDocument) 
	{
		var content = ""
		try {
			netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
			var lf = Components.classes["/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
			lf.initWithPath(file);
			if (lf.exists() == false) 
			{ 
				alert("File does not exist"); 
			}
			var fis = Components.classes["/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream); 
			fis.init(lf, 0x01, 00004, null); 
			var sis = Components.classes["/scriptableinputstream;1"].createInstance(Components.interfaces.nsIScriptableInputStrea); 
			sis.init(fis); 
			var converter = Components.classes["/intl/scriptableunicodeconverter"].createInstance(Components.interfaces.nsIScriptableUnicodeConverter); 
			converter.charset = "UTF-8"; 
			content = converter.ConvertToUnicode(sis.read(sis.available()));
		}
		catch (e) {
			alert("Mozilla Firefox read local file error: \n" + e);
		}

		return content;
	}
}