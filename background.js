chrome.contextMenus.create({
    id: "uploadImage",
    title: "Upload to realm",
    contexts: ["image"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "uploadImage" && info.srcUrl) {
        chrome.tabs.sendMessage(tab.id, { action: 'uploadImage', data: info.srcUrl });
    }
});