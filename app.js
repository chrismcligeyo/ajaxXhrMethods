//create event listener for button

document.querySelector('#button').addEventListener('click', loadData);


function loadData(){
    //first thing.create an xhr object. instantiated just like any other object

    const xhr = new XMLHttpRequest();

    //OPEN

    xhr.open('GET', 'data.txt', true); //firs parameter is type of request, 2nd is the file, the 3rd parameter is going to be true. to make asynchronous

    //optional - used for spinners/loaders
    // xhr.onprogress = function(){
    //console.log('READY STATE', xhr.readyState);
    // }

    //call ONLOAD which is set to a function. the function does whatever it is you need it to do with the data that you get

    xhr.onload = function(){
    //do a check to make sure status = 200. which means everything went well

    //common HTTP status
    // 200: "ok"
    // 403: "forbiden"
    // 404: "not found"
        if(this.status === 200){
            console.log(this.responseText); //when click button displays data in file data,txt

        }
    }

    //before .onload there was .onreadystaechange. with onload it is already at readyState 4

    // xhr.onreadystatechange = function(){
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //
    //     }
    // }

    //xhr.onerror (runs if something goes wrong)

    xhr.onerror = function(){
        console.log('Request error...');
    }
    //call send to finalize everyhting
    xhr.send();

    //readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request recived
    // 3: processing request
    // 4:request finished and response is ready

}

