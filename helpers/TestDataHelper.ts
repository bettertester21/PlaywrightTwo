import fs from 'fs';

export class JsonHelper {

  static readJson(path: string) {
    return JSON.parse(
      fs.readFileSync(path, 'utf8')
    );
  }
}