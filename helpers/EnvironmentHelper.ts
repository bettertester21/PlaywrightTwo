export class EnvironmentHelper {

  static getBaseUrl() {

    switch (
      process.env.ENV?.toLowerCase()
    ) {

      case 'qa':
        return 'https://qa.askomdch.com';

      case 'stage':
        return 'https://stage.askomdch.com';

      default:
        return 'https://askomdch.com';
    }
  }
}