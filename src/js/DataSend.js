var firebase = require('firebase');
var firebaseConfig = require('./_FirebaseConfig.js');

function DataSend(){
   firebase.initializeApp(firebaseConfig);
   var starCountRef = firebase.database().ref('/');
   starCountRef.once('value').then(function(snapshot) {
      console.log(snapshot.val())
   });
}



module.exports = DataSend;
