//  stpe:1 user interface create
//  stpe:2 user interface extends
//  stpe:3 user status define
//  stpe:4 author object create
//  stpe:5 status check

//create user interface
interface User {
  id: number;
  username: string;
  email: string;
}

//create author interface
interface Author extends User {
  bio: string;
  post: string[];
}
//define user status using type
type Status = "active" | "inactive" | "banned";

// create an author object
const author1: Author = {
  id: 252,
  username: "mi.ekhlas",
  email: "mi@gmail.com",
  bio: "I am a full stack web developer",
  post: ["post1", "post2", "post3"],
};
console.log(author1);
// make account status
const accountStatus: Status = "active";
console.log(accountStatus);
