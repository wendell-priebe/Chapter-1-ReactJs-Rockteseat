type User = {
  name: string;
  email: string;
  address:{
    city: string;
    state?: string; // ?: optional
  }
}

function showWelcomeMessage(user: User){
  return `Welcome ${user.name}, your e-mail is ${user.email}. Yuor city is ${user.address.city} and your state is ${user.address.state}`
}

const user = {
  name: 'John Doe',
  email: 'john@doe.com',
  address:{
    city: 'New York',
    state: 'NY'
  }
}

const massage = showWelcomeMessage(user)