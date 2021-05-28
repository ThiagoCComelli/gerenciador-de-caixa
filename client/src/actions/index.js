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

export const removePost = () => {
    return {
        type: 'REMOVE_POST'
    }
}

export const putPost = (post) => {
    return {
        type: 'PUT_POST',
        payload: post
    }
}