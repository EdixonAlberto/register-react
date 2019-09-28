export const updateNavigation = path => {
    return {
        type: 'UPDATE_NAVIGATION',
        path
    }
}

export const updateList = users => {
    return {
        type: 'UPDATE_LIST',
        users,
        nro: users.length
    }
}

export const showInList = user => {
    return {
        type: 'SHOW_IN_LIST',
        user: [user]
    }
}

export const showLoading = () => {
    return {
        type: 'SHOW_LOADING'
    }
}
