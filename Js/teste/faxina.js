function Cleaning(objectUser){
    if(objectUser.name === null || objectUser.name === '') {
        delete objectUser.name
    }else if (objectUser.surname === null || objectUser.surname === '') {
        delete objectUser.surname
    }else if(objectUser.yeas === null){
        delete objectUser.years
    }
    
    console.log(objectUser)
}

Cleaning({name: 'Gustavo', surname: 'Pereira', years: 19})