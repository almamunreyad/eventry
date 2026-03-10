'use server'

import { createUser, findUserByCredentials, updateGoing, updateInterest } from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


// actions for register user
async function registerUser(formData) {
    const user = Object.fromEntries(formData);
    const created = await createUser(user);

    redirect('/login');
}


// actions for login user by credentials
async function performLogin(formData) {
    try {
        const credential = {};
        credential.email = formData.get('email');
        credential.password = formData.get('password');

        const found = await findUserByCredentials(credential);

        return found;
    } catch (error) {
        throw new Error(`${error.message}`);
    }
}



// actions for update interest
async function addInterestedEvent(eventId, authId) {
    try {
        await updateInterest(eventId, authId);

    } catch (error) {
        throw error;
    }

    revalidatePath('/');
}


// actions for update going
async function addGoingEvent(eventId, user) {
    try {
        await updateGoing(eventId, user?.id);
    } catch (error) {
        throw error;
    }

    revalidatePath('/');
    redirect('/');
}



export { registerUser, performLogin, addInterestedEvent, addGoingEvent }