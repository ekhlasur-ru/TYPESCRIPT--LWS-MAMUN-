//! student profile Project
//TODO object type declaration
// const studentProfile = {
//   name: "Ekhlasur Rahman",
//   age: 25,
//   isEnrolled: true,
//   courses: ["Mathematics", "Physics", "chemistry"],
//   score: [85, 95, 72],
//   info: ["Ekhlasur", 25, true],
// };
//! Variable type declaration
// let studentName:string="Ekhlasur Rahman"
// let studentAge:number=25
// let studentIsEnrolled:boolean=true
// let studentCourses:string[]=["Mathematics", "Physics", "chemistry"]
// let studentScore:number[]=[85, 95, 72]
// let studentInfo:(string|number|boolean)[]=["Ekhlasur", 25, true]

// ! object type declaration using type alias
type student = {
  name: string;
  age: number;
  isEnrolled: boolean;
  courses: string[];
  score: number[];
  info: (string | number | boolean)[];
};

const studentData1: student = {
  name: "Ekhlasur Rahman",
  age: 25,
  isEnrolled: true,
  courses: ["Mathematics", "Physics", "chemistry"],
  score: [85, 95, 72],
  info: ["Ekhlasur", 25, true],
};
const studentData2: student = {
  name: "Mukhlasur Rahman",
  age: 26,
  isEnrolled: true,
  courses: ["Bangla", "English", "General Knowledge"],
  score: [85, 95, 72],
  info: ["Mukhlasur", 25, true],
};

function displayStudentInfo(student: student): void {
  console.log("Student Name:", student.name);
  console.log("Student Age:", student.age);
  console.log("Is Enrolled:", student.isEnrolled);
  console.log("Courses:", student.courses.join(", "));
  console.log("Scores:", student.score.join(", "));
  console.log("Info:", student.info.join(", "));
}
displayStudentInfo(studentData1);
