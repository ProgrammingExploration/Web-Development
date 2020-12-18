let greeting: string = 'Hi';
greeting = "Hello"

// greeting = 3; Typescript gives an error

let friends: Array<string> = ['Hi', 'Hello', 'Greetings'];
friends.push('0');

type Name = {
    first: string;
    last: string;
}

type Person = {
    name: Name;
    age: number;
}

const me: Person = {
    age: 5,
    name: {
        first: "Om", 
        last: "Panda"
    }
};

enum Pages {
    HOME,
    CONTROL,
    CUSTOMER,
    USER
};

let current_page: Pages = Pages.HOME;
current_page = Pages.CONTROL;
