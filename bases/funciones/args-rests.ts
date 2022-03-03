(() => {

    //Los rest arguments se utilizan para recoger todos los args que se envían a un función independientemente de que esta solo esté esperando una cantidad concreta
    const fullName = (firstName: string, ...restArgs:string[]): string => {
        return `${firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName('Clark', 'Alexander', 'Kent');

    console.log(superman);

})()