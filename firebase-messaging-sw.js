// Receives push messages while the web app is closed. Only used when hosted at a domain root
// (e.g. https://pistonworks-20432.web.app or https://USERNAME.github.io) and kVapidKey is set.
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) { if ('focus' in list[i]) return list[i].focus(); }
    return self.clients.openWindow('/');
  }));
});
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: 'AIzaSyDLr5ik150Pk76wu914WavqEYwpnpBrMKg',
  authDomain: 'pistonworks-20432.firebaseapp.com',
  projectId: 'pistonworks-20432',
  storageBucket: 'pistonworks-20432.firebasestorage.app',
  messagingSenderId: '451636568378',
  appId: '1:451636568378:web:c8362d016d26ba17dcb003'
});
firebase.messaging();
