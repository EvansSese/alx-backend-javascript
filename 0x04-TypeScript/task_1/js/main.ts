interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow additional dynamic attributes
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface describing the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of the StudentClass
class StudentClass implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage:

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "City A",
  yearsOfExperience: 5,
  contract: true, // Additional dynamic attribute
};

const teacher2: Teacher = {
  firstName: "Jane",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "City B",
  contract: false, // Additional dynamic attribute
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
};

console.log(teacher1);
console.log(teacher2);
console.log(director1);
const result = printTeacher("John", "Doe");
console.log(result);
const studentInstance: StudentClass = new StudentClass("John", "Doe");
console.log(studentInstance.workOnHomework());
console.log(studentInstance.displayName());
