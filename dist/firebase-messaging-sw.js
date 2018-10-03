importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');


const version = "1.22.21";
const cacheName = `push-${version}`;
self.addEventListener('install', e => {
    const timeStamp = Date.now();
    e.waitUntil(caches.open(cacheName).then(cache => {
        return cache.addAll([
            '/',
            '/index.html',
            '/index.html?homescreen=1',
            '/?homescreen=1',
            '/js/lib.js',
            '/js/app.js',
            '/css/main.css'


        ]).then(() => self.skipWaiting());
    })
            );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

 
 self.addEventListener('fetch', event => {

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return fetch(event.request).then(
                    function (response) {
                        // Dont cache if not a 200 response
                        if (!response || response.status !== 200) {
                            return response;
                        }

                        let responseToCache = response.clone();
                        caches.open(cacheName)
                            .then(function (cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                ) 
            })
    );
});

 
 

self.addEventListener('sync', function (event) {
});

var config = {
    apiKey: "AIzaSyAkBtJl8rWxCKHHQqrdgIA9FTrdp8S8rMI",
    authDomain: "fir-97b6e.firebaseapp.com",
    databaseURL: "https://fir-97b6e.firebaseio.com",
    projectId: "fir-97b6e",
    storageBucket: "",
    messagingSenderId: "1071020519889"
};

firebase.initializeApp(config);

self.addEventListener('push', function (event) {
    console.log('Notification Received.');
    var eventData = event.data.text();
    var obj = JSON.parse(eventData); //Parse the received JSON object.
    const options = {
        icon: obj.notification.icon,
        data: obj.notification.click_action
    };

    options.body = obj.notification.body;
    const title = obj.notification.title;
    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    var url = event.target.location.origin + '/' + event.notification.data;
    event.waitUntil(clients.openWindow(url));
});