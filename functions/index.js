const functions = require('firebase-functions');

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore();


app.post('/regis', async (req, res) => {

  const {uid} = req.body

  return await db.collection('Users').doc(uid).set({
    uid: uid
  }).then(() => {
    return res.json({pesan : "Hi people around the world"})
  }).catch(error => {
    console.log(error);
    return res.status(500).json({pesan: "Task failed"})
  })
})


exports.api = functions.region("asia-southeast2").https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
