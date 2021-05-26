export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const signIn = (user) => {
    return {
        type: 'SIGN_IN',
        payload: user
    }
}