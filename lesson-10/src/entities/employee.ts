import Person from './person.js';

export default abstract class Employee extends Person {
  public abstract calcPay(): number;
}
