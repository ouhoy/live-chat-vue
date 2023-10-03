import {ref} from 'vue';
import {projectAuth} from "@/firebase/config";

const error = ref(null);

async function signup(email: string, password: string, displayName: string) {

    error.value = null;

    try {

        const res = await projectAuth.createUserWithEmailAndPassword(email, password);
        if (!res) throw Error("Could not complete the sign up, please try again")

        await res.user?.updateProfile({displayName})
        error.value = null;
        return res

    } catch (e) {
        console.log(e)
        error.value = e;
    }

}

function useSignup() {

    return {error, signup}

}

export default useSignup
