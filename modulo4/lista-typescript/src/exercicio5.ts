enum ROLE {
    USER = 'user',
    ADMIN = 'admin'
}

type User = {
    name: string,
    email: string,
    role: ROLE
 }

const users = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 

function listAllEmails(users: User[]): string[] {
    const emailsArray = users.filter(user => {
        if (user.role === ROLE.ADMIN) { return user }
    }).map(user => { return user.email
    })

    return emailsArray
}

console.log(listAllEmails(users))