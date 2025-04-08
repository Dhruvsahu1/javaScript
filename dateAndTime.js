// Date objects encapsulate an integral number that represents milliseconds since 1 January 1970 UTC.

let date = new Date(); // it will give the current date and time of present Time in the format of [2025-04-08T05:21:31.463Z] as output and the type of this was object;
console.log(typeof date); // it will give object as output and the type of this was object;

console.log(date);
console.log(date.toString()); // it will give the current date and time of present Time in the format of [Tue Apr 08 2025 05:21:31 GMT+0000 (Coordinated Universal Time)] as output and the type of this was string;
console.log(date.toDateString()); // it will give the current date in the format of [Tue Apr 08 2025] as output and the type of this was string;
console.log(date.toTimeString()); // it will give the current time in the format of [05:21:31 GMT+0000 (Coordinated Universal Time)] as output and the type of this was string;
console.log(date.toLocaleString()); // it will give the current date and time in the format of [4/8/2025, 5:21:31 AM] as output and the type of this was string;
console.log(date.toLocaleDateString()); // it will give the current date in the format of [4/8/2025] as output and the type of this was string;
console.log(date.toLocaleTimeString()); // it will give the current time in the format of [5:21:31 AM] as output and the type of this was string;
console.log(date.getFullYear()); // it will give the current year in the format of [2025] as output and the type of this was number;
console.log(date.getMonth()); // it will give the current month in the format of [3] as output and the type of this was number; // 0-11
console.log(date.getDate()); // it will give the current date in the format of [8] as output and the type of this was number;


//  Way to create date object
let myCreatedDate  = new Date(2023,0,23); // it will give the date in the format of [2023-01-02T00:00:00.000Z] as output and the type of this was object;
console.log(myCreatedDate);
console.log(myCreatedDate.toString()); // it will give the date in the format of [Mon Jan  2023 05:30:00 GMT+0530 (India Standard Time)] as output and the type of this was string;
// you can put more parameters here EXAMPLE 
let myCreatedDate1  = new Date(2023,0,23,5,3);
console.log(myCreatedDate1); // it will give the date in the format of [2023-01-02T00:33:00.000Z] as output and the type of this was object;
console.log(myCreatedDate1.toString()); // it will give the date in the format of [Mon Jan  2023 05:03:00 GMT+0530 (India Standard Time)] as output and the type of this was string;

let myCreatedDate2  = new Date("2023-01-23")
console.log(myCreatedDate2); // it will give the date in the format of [2023-01-23T00:00:00.000Z] as output and the type of this was object;
console.log(myCreatedDate2.toString()); // it will give the date in the format of [Mon Jan  2023 05:30:00 GMT+0530 (India Standard Time)] as output and the type of this was string;
// I suggest to convert from tolocaleString for better understanding of date and time
console.log(myCreatedDate2.getTime()); // it will give the date in the format of [1674425400000] as output and the type of this was number;


let myTimeStamp = Date.now(); // it will give the current date and time in the format of [1684425600000] as output and the type of this was number;
// this is the timestamp of the current date and time in milliseconds since 1 January 1970 UTC to at present time when thee code run

// for converting into seconds from miliseconds we can divide it by 1000
console.log(myTimeStamp/1000); // it will give the current date and time 1744090400.117 in the format of [1684425600] as output and the type of this was number;
console.log(Math.floor(myTimeStamp/1000)); // it will give the current date and time 1744090400 in the format of [1684425600] as output and the type of this was number;


let newDate  = new Date();
console.log(newDate); // it will give the current date and time in the format of [2025-04-08T05:21:31.463Z] as output and the type of this was object;
console.log(newDate.getTime()); // it will give the current date and time in the format of [1684425600000] as output and the type of this was number;
console.log(newDate.getMonth()+1); // it will give the current month in the format of [3] as output and the type of this was number; // 0-11 because of indexing we add 1 to the month to get the correct month
console.log(newDate.getDate()); // it will give the current date in the format of [8] as output and the type of this was number;    
console.log(newDate.getFullYear()); // it will give the current year in the format of [2025] as output and the type of this was number;
console.log(newDate.getHours()); // it will give the current hours in the format of [5] as output and the type of this was number;
console.log(newDate.getMinutes()); // it will give the current minutes in the format of [21] as output and the type of this was number;
console.log(newDate.getSeconds()); // it will give the current seconds in the format of [31] as output and the type of this was number;
console.log(newDate.getMilliseconds()); // it will give the current milliseconds in the format of [463] as output and the type of this was number;
console.log(newDate.getTimezoneOffset()); // it will give the current timezone offset in the format of [-330] as output and the type of this was number;

console.log(newDate.toLocaleString('default',
    {
        weekday: 'long',
        year: 'numeric',
    }
)
);// it will give the current date and time in the format of [Tuesday, April 8, 2025] as output and the type of this was string;




