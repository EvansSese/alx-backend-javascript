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

console.log(teacher1);
console.log(teacher2);
console.log(director1);
