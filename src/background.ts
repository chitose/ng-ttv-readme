

chrome.runtime.onInstalled.addListener(() => {
  chrome.webNavigation.onCompleted.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      if (tab.id && tab.url && tab.url.toLowerCase().indexOf("truyen.tangthuvien.vn") >0) {
        chrome.action.enable(tab.id);
      } else {
        chrome.action.disable(tab.id);
      }
    });
  });
});
