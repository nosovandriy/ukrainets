declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: {
      init: ({ xfbml: boolean, version: string }) => void;
    };
  }
}

export {};
