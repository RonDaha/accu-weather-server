export const ErrorService = {
    handleError(e, metadata) {
        // Any global error handling will goes here...
        console.error('__ERROR__')
        console.error(metadata)
        console.error(e)
        console.error('__ERROR_ENDS__')
    }
}
