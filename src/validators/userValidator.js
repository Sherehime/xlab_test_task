export const requiredField = value => {
    if (value) return undefined
    return "This field is required"
}

export const maxLengthCreator = maxLength => value => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined

}

export const correctUsername = username => {
    if (/^[\w.@+-]+$/.test(username)) return undefined
    return "Entered incorrect data. Use only Letters, digits and @/./+/-/_ "
}



export const correctLastname = lastname => {
    if (/^[a-zA-Z]+$/.test(lastname)) return undefined
    return "Entered incorrect data."
}
