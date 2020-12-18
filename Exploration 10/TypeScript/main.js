var greeting = 'Hi';
greeting = "Hello";
// greeting = 3; Typescript gives an error
var friends = ['Hi', 'Hello', 'Greetings'];
friends.push('0');
var me = {
    age: 5,
    name: {
        first: "Om",
        last: "Panda"
    }
};
var Pages;
(function (Pages) {
    Pages[Pages["HOME"] = 0] = "HOME";
    Pages[Pages["CONTROL"] = 1] = "CONTROL";
    Pages[Pages["CUSTOMER"] = 2] = "CUSTOMER";
    Pages[Pages["USER"] = 3] = "USER";
})(Pages || (Pages = {}));
;
var current_page = Pages.HOME;
current_page = Pages.CONTROL;
