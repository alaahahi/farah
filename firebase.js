import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyBBqYyTfXmeYsPD3YzVyoGlxe8FqFrbdag",
  authDomain: "farah-ngo.firebaseapp.com",
  projectId: "farah-3f95c",
  storageBucket: "farah-3f95c.appspot.com",
  messagingSenderId: "844556490172",
  appId: "1:844556490172:web:fa40bdc619a4526b5907b9"


}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()

const usersCollection = db.collection('users')

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

const user1Collection = db.collection('user1')

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
  const close = user1Collection.onSnapshot(snapshot => {
    user1.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return user1
}
