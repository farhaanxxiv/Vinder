import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, db } from "./init-firebase";
import { doc, updateDoc, arrayUnion, arrayRemove, setDoc, getDoc } from "firebase/firestore";
import { notifyError, notifySuccess } from "./toast";
import { auth } from "./authentication";
import { branchCodes } from "./variables";
export const user = {

    uploadSection: async (section) => {
        console.log(auth.getUser().email)
        const userRef = doc(db, 'Users', auth.getUser().email);
        try {
            await setDoc(userRef, { 'section': section }, { merge: true });
            await user.addRollNoDetails()
            notifySuccess('Details Updated')
            
            window.location.href = '/add-crush'
        } catch (e) {
            console.log(e)
            notifyError('Error While Adding Section')
        }

    },
    addCrush: async (values) => {

        const washingtonRef = doc(db, "Users", auth.getUser().email);

        try {
            console.log(values.rollno != undefined)

            if (values.rollno != undefined || values.rollno != null) { //if roll no
                await updateDoc(washingtonRef, {
                    crushes_rollno: arrayUnion(values.rollno)
                });
                notifySuccess(`Added ${values.rollno} To Your Crush List`)
            } else {
                await updateDoc(washingtonRef, {
                    crushes_names: arrayUnion(values)
                });
                notifySuccess(`Added ${values.name} To Your Crush List`)

            }

        } catch (e) {
            console.log(e)
            notifyError(`Error Occured, Please Try Again`)
        }
    },
    getCrushes: async (values) => {

        const crushesRef = doc(db, "Users", auth.getUser().email);

        try {

            const docSnap = await getDoc(crushesRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                return docSnap.data()
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
        } catch (e) {
            console.log(e)
            notifyError(`Error Occured, Please Try Again`)
        }
    },
    addRollNoDetails: async () => {
        const email = auth.getUser().email

        const rollNumber = email.slice(0, 10)
        const year = rollNumber.slice(0, 2);

        // Extracting branch using the sections JSON
        const branchCode = rollNumber.slice(6, 8);

        const branch = branchCodes[branchCode] || 'Unknown Branch';

        console.log('Year:', year);
        console.log('Branch:', branch);
        const userRef = doc(db, 'Users', auth.getUser().email);

        await setDoc(userRef, { 'year': year, 'branch': branch, 'branchCode': branchCode }, { merge: true });

    }
}