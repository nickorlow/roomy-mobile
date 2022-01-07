export type GroceryItem = {
    id: string,
    homeId: string,
    buyerId: string,
    price: number,
    quantity: number,
    emoji: string
    name: string
};

// We have to remember to turn the chore formulas stored in the db into chore instances (as seen here)
export type Chore = {
    id: string,
    userId: string,
    name: string,
    emoji: string,
    date: Date,
    repeats: string | null,
    duration: string | null
};

export type Rule = {
    title: string,
    description: string
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

export type Home ={
  id: string,
  createdDate: string,
  name: string,
  location: {
      streetAddress: string,
      state: string,
      country: string,
      city: string,
      zip: string,
      googleLocationId: string
  }
};
