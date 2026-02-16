export class Person {
    public static COUNTRY: string = "Thailand";
    public firstName: string;
    public lastName: string;
    public age: number;
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    public getAge(): number {
        return this.age;
    }
    public setAge(newAge: number): void {
        this.age = newAge;
    }
}