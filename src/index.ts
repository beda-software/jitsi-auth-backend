import { createApp, createConfig, createCtx, startApp } from '@aidbox/node-server-sdk';
import * as dotenv from 'dotenv';
dotenv.config();

import * as operations from './operations';

const main = async () => {
  const config = createConfig();
  // Init app
  const ctx = createCtx({
    config,
    manifest: { operations },
  });
  const app = createApp({ ctx, helpers: {} }, config);
  // Start app
  const port = +(process.env.APP_PORT || process.env.PORT || 3000);
  await startApp(app, port);
};

if (require.main === module) {
  main();
}
