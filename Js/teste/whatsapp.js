const Arrays = [
    {itsMe: true, admin: true, name: "Gustavo"},
    {itsMe: null, admin: true, name: "Fernando"},
    {itsMe: false, admin: false, name: "Fernando"},
    {itsMe: true, admin: true, name: "Juliana"},
    {itsMe: false, admin: true, name: "Luiz"},
    {itsMe: true, admin: true, name: "Juliana"},
]

const organize = (Arrays) => {
    const result = Arrays.sort((value) => {
       return value.itsMe ? -1 : 1
    })
    console.log(result)
}

organize(Arrays)