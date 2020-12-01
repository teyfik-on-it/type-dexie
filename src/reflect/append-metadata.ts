import { defineMetadata } from './define-metadata';
import { wrapMetadata } from './wrap-metadata';

export const appendMetadata = (
  metadataKey: unknown,
  metadataValue: unknown,
  target: Cls | Function,
  propertyKey?: Key
): void => {
  defineMetadata(
    metadataKey,
    wrapMetadata(metadataKey, [], target, propertyKey).concat(metadataValue),
    target,
    propertyKey
  );
};
