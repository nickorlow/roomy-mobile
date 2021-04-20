import Chore from './ChoreListItem'

var placeholderChores = [
    { name: "Get a new Frontend", date: new Date(new Date().setHours(new Date().getHours()+1)), emoji: '📱', person: "Nicholas Orlowsky" },
    { name: "Serve Dinner", date: new Date(), emoji: '🍔' , person: "Nicholas Orlowsky" },
    { name: "Finish Roomy App", date: new Date(new Date().setHours(new Date().getHours()+1)), emoji: '📱', person: "Nicholas Orlowsky" },

    { name: "Secure Funding", date: new Date(new Date().setHours(new Date().getHours()+1)),  emoji: '📱', person:'Carson Hammock'},
    { name: "Launder Money", date: new Date(new Date().setHours(new Date().getHours()+1)) , emoji: '💰', person:'Saul Goodman' },
    { name: "Cook Meth", date: new Date(new Date().setHours(new Date().getHours()+1)), emoji: '🧑‍🍳', person:'Walter White'},

];

export function getChores() {
    placeholderChores.sort((a: Chore, b: Chore) => {
        return a.date.valueOf() - b.date.valueOf();
    });
    return placeholderChores;
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

function sortByDueDate(myArray: []): void {
    myArray.sort((a: Chore, b: Chore) => {
        return a.dueDate.getTime() - b.dueDate.getTime();

    });
}
