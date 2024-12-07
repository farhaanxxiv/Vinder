import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, db } from "./init-firebase";
import { doc, setDoc } from "firebase/firestore";
import { notifyError, notifySuccess } from "./toast";

export const auth = {
    createUser: async (email, password) => {
        try {
            const user = await createUserWithEmailAndPassword(firebaseAuth, email, password)
            await auth.createUserInFirestore(user)
            firebaseAuth.signOut()
            await sendEmailVerification(user.user);
            notifySuccess('A Verification Mail Has Been Sent To ' + email)

        } catch (e) {
            console.log(e.code)
            if (e.code == 'auth/email-already-in-use') {
                auth.signInUser(email, password)

            }
        }
    },


    signInUser: async (email, password) => {

        const user = await signInWithEmailAndPassword(firebaseAuth, email, password)

        if (user.user.emailVerified) {
            console.log('Verified')
            window.location.href = '/details'
        } else {
            firebaseAuth.signOut()
            notifyError('Verification mail has already been sent to ' + email)

        }
    },


    getUser: () => {
        const user = firebaseAuth.currentUser
        console.log(user)
        return user
    },

    getUID: () => {
        const userID = firebaseAuth.currentUser.uid
        return userID
    },


    createUserInFirestore: async (user) => {
        await setDoc(doc(db, "Users", user.user.email), {
            mail: user.user.email,
        });
    }
}