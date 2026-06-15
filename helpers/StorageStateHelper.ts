import { BrowserContext } from '@playwright/test';

export class StorageStateHelper {

  static async save(
    context: BrowserContext,
    filePath: string
  ) {
    await context.storageState({
      path: filePath
    });
  }
}