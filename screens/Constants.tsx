import Chore from './ChoreListItem'

var initPlaceholderChores = [
    { name: "Grocery Run", date: new Date(new Date().setHours(new Date().getHours()+1)), emoji: '🛒', person: "Nicholas Orlowsky", id: "100" },
    { name: "Serve Dinner", date: new Date(), emoji: '🧑‍🍳' , person: "Nicholas Orlowsky", id: "101" },
    { name: "Fix Cabinet", date: new Date(new Date().setHours(new Date().getHours()+1)), emoji: '🛠', person: "Nicholas Orlowsky", id: "102" },
    { name: "Clean Living Room", date: new Date(new Date().setHours(new Date().getHours()+1)),  emoji: '🧹', person:'Carson Hammock', id: "103"},
    { name: "Fix Car", date: new Date(new Date().setHours(new Date().getHours()+1)) , emoji: '🚘', person:'Carson Hammock', id: "104" },
    { name: "Cook Lunch", date: new Date(new Date().setHours(new Date().getHours()+1)), emoji: '🧑‍🍳', person:'Cory Chang', id: "105"},

];


var placeholderChores = [
    { name: "Grocery Run", date: new Date(new Date().setHours(new Date().getHours()+1)), emoji: '🛒', person: "Nicholas Orlowsky", id: "100" },
    { name: "Serve Dinner", date: new Date(), emoji: '🧑‍🍳' , person: "Nicholas Orlowsky", id: "101" },
    { name: "Fix Cabinet", date: new Date(new Date().setHours(new Date().getHours()+1)), emoji: '🛠', person: "Nicholas Orlowsky", id: "102" },

    { name: "Clean Living Room", date: new Date(new Date().setHours(new Date().getHours()+1)),  emoji: '🧹', person:'Carson Hammock', id: "103"},
    { name: "Fix Car", date: new Date(new Date().setHours(new Date().getHours()+1)) , emoji: '🚘', person:'Carson Hammock', id: "104" },
    { name: "Cook Lunch", date: new Date(new Date().setHours(new Date().getHours()+1)), emoji: '🧑‍🍳', person:'Cory Chang', id: "105"},

];

var placeholderItems = [
    { itemName: "Eggs", unitCost: 3.00, quantity: 1, isBought: false, boughtFor: "Nicholas Orlowsky" },
    { itemName: "Weed", unitCost: 100.00, quantity: 4, isBought: true, boughtFor: "Carson Hammock" },
    { itemName: "Onions", unitCost: 2.00, quantity: 2, isBought: false, boughtFor: "Goodman White" },
    { itemName: "Detergent", unitCost: 10.00, quantity: 1, isBought: false, boughtFor: "the House" },
    { itemName: "Carrots", unitCost: 0.50, quantity: 5, isBought: true, boughtFor: "the House" },
]

export function getChores() {
    placeholderChores.sort((a: Chore, b: Chore) => {
        return a.date.valueOf() - b.date.valueOf();
    });
    return placeholderChores;
}

export function markChoreDone(id: string) {
    placeholderChores = placeholderChores.filter(function( obj ) {
        return obj.id !== id;
    });
}

export function resetVars() {
    placeholderChores = initPlaceholderChores;
}

export function getMyChores() {
    var list = [];
    for(var item of getChores()) {
        if(item.person == "Nicholas Orlowsky") {
            list.push(item);
        }
    }

    return list;
}

export function addChore() {

}

export function getAllItems(){
    return placeholderItems;
}

export function getItemsToBuy(){
    var list = [];
    for(var item of getAllItems()) {
        if(!item.isBought) {
            list.push(item);
        }
    }
    return list;
}

function sortByDueDate(myArray: []): void {
    myArray.sort((a: Chore, b: Chore) => {
        return a.dueDate.getTime() - b.dueDate.getTime();

    });
}

