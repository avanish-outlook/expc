import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
    async storeData(key, data) {
        try {
            await AsyncStorage.setItem(key, data)
            return true;
        } catch (error) {
            console.log("Error while saving", error);
            return false
        }
    }

    async storeObject(key, data) {
        try {
            const jsonValue = JSON.stringify(data)
            await AsyncStorage.setItem(key, jsonValue)
            return true;
        } catch (error) {
            console.log("Error while saving object", error);
            return false
        }
    }

    async getData(key) {
        try {
            const value = await AsyncStorage.getItem(key)
            return value
        } catch (e) {
            console.log("Error while getting data from storage", e)
            return null;
        }
    }

    async getObject(key) {
        try {
            const jsonValue = await AsyncStorage.getItem(key)
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log("Error while getting data from storage", e)
            return null;
        }
    }

    async clear() {
        try {
            AsyncStorage.clear()
        } catch (error) {

        }
    }
}


export default new Storage();


export const AsyncStorageConstant = {
    AUTH: 'auth',
}