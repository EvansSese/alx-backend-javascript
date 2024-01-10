// Create and export constants for Cpp, Java, and React Subjects
export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

// Create and export a Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// For Cpp subject
cpp.setTeacher(cTeacher);
console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
java.setTeacher(cTeacher);
console.log("Java");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
react.setTeacher(cTeacher);
console.log("React");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
