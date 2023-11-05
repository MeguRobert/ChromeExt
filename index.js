// async function download() {
//     const tabYoutube = await getCurrentTab();
//     const url = tabYoutube.url
//     console.log(tabYoutube.url);

//     let urlToOpen = "https://ytmp3.nu/DyzH/";
//     chrome.tabs.create({url: urlToOpen}, function (tab1) {
//         chrome.scripting.executeScript({
//             target: {tabId: tab1.id},
//             args: [url],
//             func: (url) => {

//                 console.log(url);
//                 input = document.getElementById("url");
//                 console.log(input);
//                 input.value = url;

//                 let form = input.closest("form");
//                 if (form) {
//                     let submitButton = form.querySelector('input[type="submit"]');

//                     submitButton.click();

//                     // Wait for some time to let the page load (you might need to adjust the timeout based on the page load time)
//                     setTimeout(() => {
//                         // Get the updated content of the page
//                         let updatedContent = document.documentElement.outerHTML;
//                         console.log("Updated content:", updatedContent);

//                         // Get the element with the specific selector
//                         let targetElement = document.querySelector('body > form > div:nth-child(2) > a:nth-child(1)');

//                         // Check if the target element is found
//                         if (targetElement) {
//                             console.log("Target element found:", targetElement);
//                             targetElement.click();
//                         } else {
//                             console.error("Target element not found");
//                         }
//                     }, 2000); // Adjust the timeout as needed
//                 } else {
//                     console.error("Form not found");
//                 }

//                 // alert(input);
//                 // alert(tabYoutube.url);
//             }
//         });
//     });

//     // let tabMP3 = await getCurrentTab();

//     // input = document.getElementById("url");
//     // console.log(input);

// }

// async function getCurrentTab() {
//     let queryOptions = {active: true, lastFocusedWindow: true};
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let [tab] = await chrome.tabs.query(queryOptions);
//     return tab;
// }
// document.getElementById("myButton").addEventListener("click", download);