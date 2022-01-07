import {Chore, GroceryItem, Rule, User} from "./Types";

export var initPlaceholderUser: User = {
    id: "6e2d99f6-31ad-4a12-88d2-0f45479eea6f",
    firstName: "Loading",
    lastName: "Loading",
    authProvider: "apple",
    authKey: "",
    createdDate: new Date(new Date().setMonth(new Date().getMonth() - 3)),
    emailAddress: "nicholasorlowsky@gmail.com",
    subscriptionExpirationDate: new Date(new Date().setMonth(new Date().getMonth() + 3)),
    isPremium: new Date() < this.subscriptionExpirationDate,
    homeId: "460127fe-0f2f-48b7-a12d-dfe6b238e441",
}

export var initPlaceholderUsers: User[] =
    [
        {
            id: "",
            firstName: "Carson",
            lastName: "Hammock",
            authProvider: "apple",
            authKey: "",
            createdDate:new Date(new Date().setMonth(new Date().getMonth() - 3)),
            emailAddress: "carson@orlowsoft.com",
            subscriptionExpirationDate:new Date(new Date().setMonth(new Date().getMonth() + 3)),
            isPremium: new Date() < this.subscriptionExpirationDate,
            homeId: "460127fe-0f2f-48b7-a12d-dfe6b238e441",
        },
        {
            id: "",
            firstName: "Cory",
            lastName: "Chang",
            authProvider: "apple",
            authKey: "",
            createdDate: new Date(new Date().setMonth(new Date().getMonth() - 3)),
            emailAddress: "cchang@orlowsoft.com",
            subscriptionExpirationDate: new Date(new Date().setMonth(new Date().getMonth() + 3)),
            isPremium: new Date() < this.subscriptionExpirationDate,
            homeId: "460127fe-0f2f-48b7-a12d-dfe6b238e441",
        },
        initPlaceholderUser
    ];

export var initPlaceholderChores: Chore[] = [
    {
        name: "Grocery Run",
        date: new Date(new Date().setHours(new Date().getHours() + 1)),
        emoji: '🛒',
        userId: initPlaceholderUser.id,
        id: "100",
    },
    {
        name: "Serve Dinner",
        date: new Date(),
        emoji: '🧑‍🍳',
        userId: initPlaceholderUser.id,
        id: "101"
    },
    {
        name: "Fix Cabinet",
        date: new Date(new Date().setHours(new Date().getHours() + 1)),
        emoji: '🛠',
        userId: initPlaceholderUser.id,
        id: "102"
    },
    {
        name: "Re-wire TV",
        date: new Date(new Date().setHours(new Date().getHours() + 1)),
        emoji: '🛠',
        userId: initPlaceholderUser.id,
        id: "100"
    },
    {
        name: "Call Landlord",
        date: new Date(new Date().setHours(new Date().getHours() + 1)),
        emoji: '🧑‍🍳',
        userId: initPlaceholderUser.id,
        id: "103"
    },
    {
        name: "Change Lightbulbs",
        date: new Date(new Date().setHours(new Date().getHours() + 1)),
        emoji: '🛠',
        userId: initPlaceholderUser.id,
        id: "104"
    },


    {
        name: "Clean Living Room",
        date: new Date(new Date().setHours(new Date().getHours() + 1)),
        emoji: '🧹',
        userId: initPlaceholderUsers[0].id,
        id: "103"
    },
    {
        name: "Fix Car",
        date: new Date(new Date().setHours(new Date().getHours() + 1)),
        emoji: '🚘',
        userId:  initPlaceholderUsers[0].id,
        id: "104"
    },
    {
        name: "Cook Lunch",
        date: new Date(new Date().setHours(new Date().getHours() + 1)),
        emoji: '🧑‍🍳',
        userId:  initPlaceholderUsers[1].id,
        id: "105"
    },

];

export var initPlaceholderItems: GroceryItem[] = [
    {
        id: "",
        name: "Eggs",
        price: 3.00,
        quantity: 1,
        buyerId: initPlaceholderUsers[0].id,
    },
    {
        id: "",
        name: "Weed",
        price: 100.00,
        quantity: 4,
        buyerId: initPlaceholderUser.id,
    },
    {
        id: "",
        name: "Onions",
        price: 2.00,
        quantity: 2,
        buyerId: initPlaceholderUsers[0].id,
    },
    {
        id: "",
        name: "Detergent",
        price: 10.00,
        quantity: 1,
        buyerId: initPlaceholderUsers[1].id,
    },
    {
        id: "",
        name: "Carrots",
        price: 0.50,
        quantity: 5,
        buyerId: initPlaceholderUsers[1].id,
    },
];

export var initPlaceholderRules: Rule[] = [
    {
        title: "Don't talk about fight club",
        description: "It's literally the first rule of fight club."
    },
    {
        title: "Don't talk about fight club",
        description: "It's literally the second rule of fight club."
    },
    {
        title: "Newton's First Law",
        description: "An object in motion stays in motion until acted upon by an outside force."
    },
    {
        title: "Newton's Second Law",
        description: "Force is equal to the mass of an object multiplied by the acceleration of that object."
    },
    {
        title: "Newton's Third Law",
        description: "For every action, there is an equal and opposite reaction."
    },
];
