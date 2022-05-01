self.addEventListener('push', function (event) {
    console.log("push event")
    if (event && event.data) {
        self.pushData = event.data.json();
        self.registration.showNotification(
            self.pushData.title,
            {
                body: self.pushData.body.info,
                actions: [
                    {
                        title: "Go",
                        action: self.pushData.url
                        //icon: "/home.png"
                    }
                ]
            }
        );
        //self.registration.showNotification(self.pushData.title)
    }
});

self.addEventListener('notificationclick', function(event) {

    if (event) {
        console.log(event.action)
        event.notification.close();

        // Example: Open window after 3 seconds.
        // (doing so is a terrible user experience by the way, because
        //  the user is left wondering what happens for 3 seconds.)
        var promise = new Promise(function(resolve) {
            setTimeout(resolve, 3000);
        }).then(function() {
            // return the promise returned by openWindow, just in case.
            // Opening any origin only works in Chrome 43+.
            return clients.openWindow(`${event.action}`);
        });

        // Now wait for the promise to keep the permission alive.
        event.waitUntil(promise);
    }
    
});