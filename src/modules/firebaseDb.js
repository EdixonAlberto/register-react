import firebase from 'firebase';
import firebaseConfig from './firebaseConfig'

// Configuracion de app firebase
const app = firebase.initializeApp(firebaseConfig);

// Inicio de database firebase
export default app.database();
