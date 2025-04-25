try {
  chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
    console.log("chrome.downloads.onDeterminingFilename", { item });

    const datestring = new Date().toISOString().slice(0, 10);

    const filename = datestring + "/" + item.filename;
    suggest({ filename, conflictAction: "overwrite" });
  });
} catch (error) {
  console.error(error);
}
