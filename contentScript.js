(() => {
    let youtubeLeftControls, youtubePlayer;

    const newVideoLoaded = () => {
        const downloadBtnExists = document.getElementsByClassName("download-btn")[0];

        if (!downloadBtnExists) {
            const downloadBtn = document.createElement("img");

            downloadBtn.src = chrome.runtime.getURL("assets/download.png");
            downloadBtn.className = "ytp-button " + "download-btn";
            downloadBtn.title = "Click to download current video in mp3 format";

            youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
            youtubePlayer = document.getElementsByClassName("video-stream")[0];

            youtubeLeftControls.append(downloadBtn);
            downloadBtn.addEventListener("click", () => {
                console.log("clicked");
                chrome.runtime.sendMessage({type: "download"});
            });
        }
    };

    newVideoLoaded();
})();
