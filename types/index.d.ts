import { Plugin, PluginOptions, Uppy } from '@uppy/core';

export interface ActiveStorageUploadOptions extends PluginOptions {
  limit: string;
  bundle: boolean;
  directUploadUrl: string;
}

export default class ActiveStorageUpload extends Plugin {
  constructor(uppy: Uppy, opts: Partial<ActiveStorageUploadOptions>);
}

declare module '@uppy/core' {
  export interface Uppy {
    use(pluginClass: typeof ActiveStorageUpload, opts: Partial<ActiveStorageUploadOptions>): Uppy;
  }
}
