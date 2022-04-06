var cors = require("cors");
// require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
var bodyparser = require("body-parser");
const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { connectDatabase } = require("./DB/dbconnect.js")
const app = express();
var passport = require("passport");
app.use(cors());
app.use(express.json());
connectDatabase()

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(passport.initialize());
require("./strategies/jsonwtStrategy")(passport);

app.get('/', (req, res) => {
  res.send('Hello Express app!kya baaat haiiii')
});

const date = new Date();
//Notes model
const sch = {
    user:{
        name:String,
        email:String,
        id:Schema.Types.ObjectId
    },
    note:{
        title:String,
        content:String,
        tag:[],
        color:String
    },createdAt:{
        type:Date,
        immutable:true,
        default:() => Date.now(),
    }
}

//Todo schema
const sch2 = {
    user:{
        name:String,
        email:String,
        id:Schema.Types.ObjectId
    },
    todo:{
        title:String,
        selected:Boolean,
        important:Boolean,
        tag:[],
        

    },createdAt:{
        type:Date,
        immutable:true,
        default:() => Date.now(),
    }
}
//Notes model
const monmodel = mongoose.model("Notes",sch)


//Todo model
const monmodel2 = mongoose.model("Todo",sch2)

//login signup
const profile = require("./routes/User");
app.use("/api", profile);


//Todo  router // This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );
  
  export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      // The URL constructor is available in all browsers that support SW.
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        // Our service worker won't work if PUBLIC_URL is on a different origin
        // from what our page is served on. This might happen if a CDN is used to
        // serve assets; see https://github.com/facebook/create-react-app/issues/2374
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // This is running on localhost. Let's check if a service worker still exists or not.
          checkValidServiceWorker(swUrl, config);
  
          // Add some additional logging to localhost, pointing developers to the
          // service worker/PWA documentation.
          navigator.serviceWorker.ready.then(() => {
            console.log(
              'This web app is being served cache-first by a service ' +
                'worker. To learn more, visit https://bit.ly/CRA-PWA'
            );
          });
        } else {
          // Is not localhost. Just register service worker
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then(registration => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // At this point, the updated precached content has been fetched,
                // but the previous service worker will still serve the older
                // content until all client tabs are closed.
                console.log(
                  'New content is available and will be used when all ' +
                    'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
                );
  
                // Execute callback
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a
                // "Content is cached for offline use." message.
                console.log('Content is cached for offline use.');
  
                // Execute callback
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch(error => {
        console.error('Error during service worker registration:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl)
      .then(response => {
        // Ensure service worker exists, and that we really are getting a JS file.
        const contentType = response.headers.get('content-type');
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
          // No service worker found. Probably a different app. Reload the page.
          navigator.serviceWorker.ready.then(registration => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          // Service worker found. Proceed as normal.
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log(
          'No internet connection found. App is running in offline mode.'
        );
      });
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister();
      });
    }
  }
  
app.post("/todo",async(req,res)=>{
    console.log("inside a todo post function!");
    const data = new monmodel2({
        user:{
            name:req.body.name,
            email:req.body.email
        },todo:{
            title:req.body.title,
            tag:req.body.tag,
            important:req.body.important,
            selected:req.body.selected
        }});
        const val = await data.save();
        res.json(val);

})

app.get("/todo",async(req,res) => {
      
    console.log("inside a todo get request");
    console.log(req.query.email);
    try{
            const user = await monmodel2.findOne({"_id":req.query.id})
            console.log(user);
            res.json(user);
        }catch(e){
            console.log(e.message)
        }

})

app.delete("/todo",async(req,res)=>{
    console.log(req.body.email);
    
    try{
        const user = await monmodel2.deleteOne({"id":req.body.id})
        console.log(user);
        res.json(user);
    }catch(e){
        console.log(e.message)
    }
})

//Notes router
app.get("/notes",async(req,res) => {
      
        console.log("inside a get request");
        console.log(req.query.email);
        try{
                // const user = await monmodel.findOne({"user.email":req.query.email})
                
                const user = await monmodel.findOne({"_id":"62449d807980a3d24987bf92"})
                console.log(user);
                res.json(user);
            }catch(e){
                console.log(e.message)
            }
    
})
app.post("/notes",async(req,res)=>{
    console.log("inside a post function!");
    const data = new monmodel({
        user:{
            name:req.body.name,
            email:req.body.email
        },note:{
            title:req.body.title,
            content:req.body.content,
            tag:req.body.tag,
            color:req.body.color
        }
        
    });
    const val = await data.save();
    res.json(val);
})
app.delete("/notes",async(req,res) =>{
     console.log(req.body.email);
    try{
        const user = await monmodel.deleteOne({"_id":req.body._id})
        console.log(user);
        res.json(user);
    }catch(e){
        console.log(e.message)
    }
})
app.put("/notes",async(req,res) =>{
    console.log(req.body.email);
   try{
   
       const user = await monmodel.updateOne({
           "_id" :"6246aa10f9b692cacf67c0d2", 
       },
        {
            "note.title":req.body.title
        }
       )
       console.log(user);
        res.json(user);
   }catch(e){
       console.log(e.message)
   }
})

app.listen(3010, () => {
  console.log('server started');
});