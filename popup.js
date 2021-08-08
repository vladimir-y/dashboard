// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  //chrome.scripting.executeScript({
    //target: { tabId: tab.id },
    //function: setPageBackgroundColor,
  //});
  
  chrome.downloads.download({
	url: "https://www.twilio.com/console/sms/channels/api/hsmtemplates/whatsapp",
	filename: "templates.json", 
	conflictAction: 'overwrite',
  });

});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
