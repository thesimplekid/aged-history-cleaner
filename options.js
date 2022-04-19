function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
      daysToExpire: document.querySelector("#daysToExpire").value
    });
  }
  
  function restoreOptions() {
  
    function setCurrentChoice(result) {
      document.querySelector("#daysToExpire").value = result.daysToExpire || 31;
    }
  
    function onError(error) {
      console.log(`Error: ${error}`);
    }
  
    let getting = browser.storage.sync.get("daysToExpire");
    getting.then(setCurrentChoice, onError);
  }
  
  document.addEventListener("DOMContentLoaded", restoreOptions);
  document.querySelector("form").addEventListener("submit", saveOptions);
  