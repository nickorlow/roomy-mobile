import {Chore, GroceryItem, Rule, User, UserCreationResponse} from './Types'
import {
    initPlaceholderChores,
    initPlaceholderItems, initPlaceholderRules,
    initPlaceholderUser,
    initPlaceholderUsers
} from "./PlaceholderData";
import {Alert} from "react-native";
import {useDispatch} from "react-redux";

var userId = '0e1aae52-63db-4501-bf19-e30c24810750';
var userKey = '0e1aae52-63db-4501-bf19-e30c24810750:r1a7548a3876c4de9a3c3b0a991e5bd32.0.srwq.GoO_JAIS7LNwNnpI8eRDvw';

export var chores: Chore[] = [];

export var groceryItems: GroceryItem[] = [];

var rules: Rule[] = [];

var roomies: User[] = [];

export var currentUser: User ;

export function getCurrentUser() {
    fetch('https://api.useroomy.com/user/'+userId, {
        method: 'GET',
        headers: {
            Authorization: userKey,
            'Authorization-Provider': 'apple'
        }
    }).then((response) => response.json()).then((json) => {
        currentUser = json;
        console.log(json)
    });
}

// SECTION: Chores ----------------------------------
export function getChores() {
    return chores;
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
export async function getItemsToBuy() {
    return groceryItems;
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
