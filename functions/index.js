const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51MCOU1GAwKU2n2ZLmVldzbEMCedrIwb5xo9PatJSLBJCwrQozlXNAc9mQKZKIA70qNLEeyyMNc77am49ysmIoGzR00LdZnihW5"
);
//-api

//-app config
const app = express();

//-middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved  for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });
  //ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//-listen command
exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/clone-30e4b/us-central1/api
