type verifyUserFn = (user:User, sentValue:User) => boolean

type User = { userName: string; password:string; }

const verifyUser: verifyUserFn = (user, sentValue) =>{
    return (
        user.userName === sentValue.userName && user.password === sentValue.password
    )
}

const bdUser = { userName: 'joao', password: '123456' }
const sentUser = { userName: 'joao', password: '123456' }
const logging = verifyUser(bdUser, sentUser)
console.log(logging)