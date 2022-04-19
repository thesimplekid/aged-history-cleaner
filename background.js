function deleteHistory(){

    function onError(error) {
        console.log(`Error: ${error}`);
      }
    
    function onGot(item) {
        
        let daysPassed = 31;

        if (item.daysToExpire) {
          daysPassed = item.daysToExpire;
        }

        const date = new Date();

        browser.history.deleteRange({
            startTime: date - daysPassed,
            endTime: date
        });

        
    }

    let getting = browser.storage.sync.get("daysToExpire");
    getting.then(onGot, onError);
    
}


const onStartUp = async () => {
    console.log("start up");
    deleteHistory();
};

onStartUp();