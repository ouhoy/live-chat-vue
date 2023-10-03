import {ref} from 'vue';
import {projectAuth, projectFirestore} from "@/firebase/config";


function useCollection(collection: string) {

    const error = ref(null)

    const addDoc = async (doc: {}) => {
        error.value = null;
        try {

            await projectFirestore.collection(collection).add(doc)

        } catch (e) {
            error.value = "Could not send the message";
            console.log(e)
        }
    }

    return {addDoc, error}

}

export default useCollection