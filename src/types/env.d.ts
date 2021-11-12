declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      MONGO_URI: string;
      MAIN_DB: string;
    }
  }
}

export {};
