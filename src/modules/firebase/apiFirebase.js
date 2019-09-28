import firebaseDb from "./firebaseDb";
/* DEBUG: */
// import { users as db } from '../../assets/db.json';
// import { delay } from 'q';

export const getUsers = async (usersList = []) => {
    try {
        /* DEBUG: */
        // const users = await delay(db, 1000);

        const snap = await firebaseDb.ref('users/').once('value');
        const users = snap.val();

        for(var key in users) {
            usersList.push({
                id: key,
                data: users[key]
            });
        }

        return usersList;
    } catch(error) {
        alert('Error al obtener usuarios: ' + error);
    }
}

export const createUser = async user => {
    try {
        await firebaseDb.ref('users/' + user.id).set(user.data);
    } catch(error) {
        alert('Error al crear usuario: ' + error);
    }
}

export const destroyUser = async userId => {
    try {
        await firebaseDb.ref('users/').child(userId).remove();
    } catch(error) {
        alert('Error al eliminar usuario: ' + error);
    }
}
