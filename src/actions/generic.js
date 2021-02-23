import { connection } from '../database/connection'
import firebase from 'firebase'
require('firebase/firestore')

const context = firebase.firestore(connection)

export const getPets = async (collection) => {
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

export const addPet = async (collection, data) => {
    const result = { statusResponse: false, data: null, error: null }
    try {
        const response = await context.collection(collection).add(data)
        result.data = { id: response.id }
        result.statusResponse = true

    } catch (error) {
        result.error = error
    }

    return result
}

export const getPet = async (collection, id) => {
    const result = { statusResponse: false, data: null, error: null }
    try {
        const response = await context.collection(collection).doc(id).get()
        result.data = { id: response.id, ...response.data() }
        result.statusResponse = true
    } catch (error) {
        result.error = error
    }
    return result
}

export const updatePet = async (collection, id, data) => {
    const result = { statusResponse: false, error: null }
    try {
        await context.collection(collection).doc(id).update(data)
        result.statusResponse = true
    } catch (error) {
        result.error = error
    }
    return result
}

export const deletePet = async (collection, id) => {
    const result = { statusResponse: false, error: null }
    try {
        await context.collection(collection).doc(id).delete()
        result.statusResponse = true
    } catch (error) {
        result.error = error
    }
    return result
}