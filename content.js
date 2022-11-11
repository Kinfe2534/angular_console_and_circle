chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.cmd == "insert") {
        if ($("#console").length == 0) {
            let console_ele = "<div id='console'><iframe id='iframe' style='width:300px;height:350px;' src='" + chrome.runtime.getURL('console/dist/console/index.html') + "'></iframe></div>"
            $("body").append(console_ele);
        } else {
            $("#console").remove()
        }

    }
});
