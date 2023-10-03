import {ref} from 'vue';
import {projectAuth} from "@/firebase/config";

const error = ref(null);

const login = async function (email: string, password: string) {

    error.value = null;

    try {

        const res = await projectAuth.signInWithEmailAndPassword(email, password);
        error.value = null;

        return res

    } catch (e) {
        console.error(e);
        error.value = "Incorrect login credentials";
    }
}

const useLogin = function () {
    return {error, login}
}

export default useLogin