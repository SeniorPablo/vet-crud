import { connection } from '../database/connection'
import firebase from 'firebase'
require('firebase/firestore')

const context = firebase.firestore(connection)

export const getCollection = async (collection) => {
    const result = { statusResponse: false, data: null, error: null }
    try {
        const response = await context.collection(collection).get()
        const arrayData = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        result.statusResponse = true
        result.data = arrayData
    } catch (error) {
        result.error = error
    }

    return result
}

