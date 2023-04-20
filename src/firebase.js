import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyDcL7UQeE0amvNp1pEsTUyzQhKcbPN1fHU",
  authDomain: "farah-ngo.firebaseapp.com",
  projectId: "farah-ngo",
  storageBucket: "farah-ngo.appspot.com",
  messagingSenderId: "257931574532",
  appId: "1:257931574532:web:7a146255bf362bcbf72451"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()

const usersCollection = db.collection('users')

const user1Collection = db.collection('user1')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}


export const createUser1 = user => {
  return user1Collection.add(user)
}

export const getUser1 = async id => {
  const user = await user1Collection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser1 = (id, user) => {
  return user1Collection.doc(id).update(user)
}

export const deleteUser1 = id => {
  return user1Collection.doc(id).delete()
}

export const useLoadUser1 = () => {
  const user1 = ref([])
  const close = user1Collection.limit(100).onSnapshot(snapshot => {
    user1.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return user1
}
export const useLoadUserAll = () => {
  const user1 = ref([])
  const close = user1Collection.onSnapshot(snapshot => {
    user1.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return user1
}


export const searchCollection = async (field, query) => {
  const results = await user1Collection.where(field, '>=', query)
                                       .where(field, '<=', query + '\uf8ff')
                                       .get();
  return results.docs.map(doc => doc.data());
};
