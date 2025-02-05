export class Gigasecond {
  private readonly startDate: Date;
  private readonly gigasecond: number = 10 ** 9;

  constructor(input: Date) {
    this.startDate = input;
  }

  public date(): Date {
    return new Date(this.startDate.getTime() + this.gigasecond * 1000);
  }
}