export const leftbarClicked = ( id ) => {
    return {
        type: 'LEFTBAR_CLICKED',
        payload: {
            id: id
        }
    }
}