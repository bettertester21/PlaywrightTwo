export class RandomDataHelper {

  static randomEmail() {
    return `user${Date.now()}@mailinator.com`;
  }

  static randomNumber(
    min: number,
    max: number
  ) {
    return Math.floor(
      Math.random() * (max - min + 1)
    ) + min;
  }

  static randomString(
    length = 8
  ) {
    return Math.random()
      .toString(36)
      .substring(2, length + 2);
  }
}