const app = require('firebase/app');

require('firebase/auth');
require('firebase/firestore');

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASURMENT_ID
}

class Firebase{
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore()
    }

    doCreateUserWithEmailAndPassword = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    doCreateUser = (id, user) =>{
        this.db.collection('users').doc(id).set(user);
    }

    doGetUser = (id) =>{
        return this.db.collection('users').doc(id).get();
    }

}



const firebase = new Firebase()

module.export = firebase