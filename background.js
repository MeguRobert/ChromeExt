chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "download") {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
            const currentTab = tabs[0];
            // Now you have access to the current tab in the background script
            // You can perform any necessary actions here
            console.log(currentTab);
            download(currentTab);
        });
    }
});

async function download(tab) {
    console.log("download func");
    const urlToOpen = "https://ytmp3.nu/DyzH/";
    chrome.tabs.create({url: urlToOpen}, function (tab1) {
        chrome.scripting.executeScript({
            target: {tabId: tab1.id},
            args: [tab.url],
            func: (url) => {
                console.log(url);
                input = document.getElementById("url");
                console.log(input);
                input.value = url;

                let form = input.closest("form");
                if (form) {
                    let submitButton = form.querySelector('input[type="submit"]');

                    submitButton.click();

                    // Wait for the download button to appear
                    const query = 'body > form > div:nth-child(2) > a:nth-child(1)'
                    let attempt = 0


                    const repeat = () => {
                        let downloadButton = document.querySelector(query);
                        attempt++;
                        setTimeout(() => {console.log(`Attempt ${attempt}`)}, 500);
                        // Check if the downloadButton is found
                        if (downloadButton) {
                            console.log("downloadButton found:", downloadButton);
                            clearInterval(myInterval);
                            downloadButton.click();
                        } else {
                            console.error("downloadButton not found");
                        }
                    }

                    const myInterval = setInterval(repeat, 500);

                } else {
                    console.error("Form not found");
                }
            }
        });
    });
}