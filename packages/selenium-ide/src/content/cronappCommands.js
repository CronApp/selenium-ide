let customEventEmitter = (event, data) => {
  let eventCreated = new CustomEvent(event, { detail: data });
  document.dispatchEvent(eventCreated);
}

// eslint-disable-next-line no-unused-vars
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'event' && request.event === 'saveProject') {
    customEventEmitter('saveTest', request)
    sendResponse(request)
  }

  if (request.filename && request.body) {
    customEventEmitter('exportTest', request)
    sendResponse(request)
  }
  sendResponse(request)
})
