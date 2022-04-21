function deleteHistory(){

    function onError(error) {
        console.log(`Error: ${error}`);
      }
    
    function onGot(item) {
        
        let daysPassed = 31;

        if (item.daysToExpire) {
          daysPassed = item.daysToExpire;
        }

        const d = new Date();

        const intHours = daysPassed * 24;

        const msToSubtract = (intHours * 60) * 60 * 1000;

        const startTime = d - msToSubtract;
        const endTime = Date.now();

        browser.history.deleteRange({
            startTime: startTime,
            endTime: endTime
        });

    }

    let getting = browser.storage.sync.get("daysToExpire");
    getting.then(onGot, onError);
    
}


const onStartUp = async () => {
    console.log("start up");
    setTimeout(deleteHistory, 3000)
};

onStartUp();