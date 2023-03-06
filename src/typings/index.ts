import {
  ManifestOperation,
  ManifestSubscription,
  OperationRequestType,
  Resource,
} from '@aidbox/node-server-sdk';

export type TOperation<T extends OperationRequestType = any> = ManifestOperation<T>;
export type TSubscription<T extends Resource = any> = ManifestSubscription<T>;
