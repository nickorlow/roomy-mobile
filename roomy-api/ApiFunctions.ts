import {Chore, GroceryItem, User,  UserCreationResponse} from './Types'
import {
    initPlaceholderChores,
    initPlaceholderItems,
    initPlaceholderUser,
    initPlaceholderUsers
} from "./PlaceholderData";

var chores: Chore[] = [];

var groceryItems: GroceryItem[] = [];

var rules = [];

var currentUser: User;



// SECTION: Chores ----------------------------------
export function getChores() {
    // TODO: Make API Call
    chores.sort((a: Chore, b: Chore) => {
        return a.date.valueOf() - b.date.valueOf();
    });
    return chores;
}

export function markChoreDone(id: string) {
    // TODO: Make API Call
    chores = chores.filter(function (obj) {
        return obj.id !== id;
    });
}

export function getMyChores() {
    var list = [];
    for (var item of getChores()) {
        if (item.userId == currentUser.id) {
            list.push(item);
        }
    }

    return list;
}

export function getHomeChores() {
    var list = [];
    for (var item of getChores()) {
        if (item.userId != currentUser.id) {
            list.push(item);
        }
    }

    return list;
}

export function addChore() {

}

// SECTION: Groceries ----------------------------------
export function getItemsToBuy() {
    var list = [];
    for (var item of getAllItems()) {
            list.push(item);
    }
    return list;
}

export function getAllItems() {
    return groceryItems;
}

// SECTION: User ----------------------------------
export function getUser(userId: string) {
    return initPlaceholderUsers.filter(function (obj) {
        return obj.id === userId;
    });
}

// SECTION: Developer/Debug ----------------------------------
export function resetVars() {
    chores = initPlaceholderChores;
    currentUser = initPlaceholderUser;
    groceryItems = initPlaceholderItems;
}
