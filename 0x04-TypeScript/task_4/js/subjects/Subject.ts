namespace Subjects {
  export class Subject {
    public teacher: Teacher | undefined;

    public setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
