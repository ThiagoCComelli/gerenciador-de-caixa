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

export const putNotification = (notification) => {
    return {
        type: 'PUT_NOTIFICATION',
        payload: notification
    }
}

export const removeNotification = (id) => {
    return {
        type: 'REMOVE_NOTIFICATION',
        payload: id
    }
}

export const putContext = (context) => {
    return {
        type: 'PUT_CONTEXT',
        payload: context
    }
}

export const removeContext = () => {
    return {
        type: 'REMOVE_CONTEXT'
    }
}