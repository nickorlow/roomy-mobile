export type GroceryItem = {
    id: string,
    buyerId: string,
    price: number,
    quantity: number,
    name: string
};

// We have to remember to turn the chore formulas stored in the db into chore instances (as seen here)
export type Chore = {
    id: string,
    userId: string,
    name: string,
    emoji: string,
    date: Date
};

export type User = {
    id: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    createdDate: Date,
    subscriptionExpirationDate: Date,
    isPremium: boolean,
    authProvider: string,
    authKey: string,
    homeId: string
};

export type UserCreationResponse = {
  createdUser: User,
  refreshToken: string
};
