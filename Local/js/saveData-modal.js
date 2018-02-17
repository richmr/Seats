/*
Copyright 2018 Michael R Rich (mike@tofet.net)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions 
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


$("#save_data").click(function(event) {
		clickOnSaveData();		
	});

function initializeSaveData() {
	// Loop over the graveyarddtables array
	
}	

function clickOnSaveData () {
	// First save to local storage
	var allData = consolidateData();
	saveAllData();	
	
	// Using saveAs() from https://github.com/eligrey/FileSaver.js 

	var filename = $("#portfolioName").text()+".json";
	$("#saveDataFilename").text(filename);
  	var blob = new Blob([JSON.stringify(allData)], {type: "text/plain;charset=utf-8"});
  	saveAs(blob, filename);
	$("#saveDataModal").modal('open');
	
}


//console.log("saveData-modal loaded");