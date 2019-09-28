import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from './firebaseConfig'

// Configurar app de firebase
const app = firebase.initializeApp(firebaseConfig);

// Iniciar database de firebase
export default app.database();
