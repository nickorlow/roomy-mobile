import {Chore, GroceryItem, Rule, User, UserCreationResponse} from './Types'
import {
    initPlaceholderChores,
    initPlaceholderItems, initPlaceholderRules,
    initPlaceholderUser,
    initPlaceholderUsers
} from "./PlaceholderData";

var chores: Chore[] = [];

var groceryItems: GroceryItem[] = [];

var rules: Rule[] = [];

var roomies: User[] = [];

export var currentUser: User;


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

export function addChore(chore: Chore) {
    // TODO: Add server calls
    chores.push(chore);
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

export function addGroceryItem(item: GroceryItem) {
    // TODO: Add server calls
    groceryItems.push(item);
}

// SECTION: User ----------------------------------
export function getUser(userId: string) {
    return initPlaceholderUsers.filter(function (obj) {
        return obj.id === userId;
    });
}

export function getRoomies() {
    return roomies;
}

// SECTION: Rule ----------------------------------
export function getRules() {
    return rules;
}

// SECTION: Developer/Debug ----------------------------------
export function resetVars() {
    chores = initPlaceholderChores;
    currentUser = initPlaceholderUser;
    groceryItems = initPlaceholderItems;
    rules = initPlaceholderRules;
    roomies = initPlaceholderUsers;
}
