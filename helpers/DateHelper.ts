export class DateHelper {

  static currentDate() {
    return new Date()
      .toISOString()
      .split('T')[0];
  }

  static timestamp() {
    return Date.now().toString();
  }
}