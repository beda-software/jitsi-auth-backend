import { TOperation } from '../typings';

export const getJitsiAuthToken: TOperation = {
  method: 'POST',
  path: ['auth', '$jitsi-token'],
  handlerFn: async (_request) => {
    return {};
  },
};
