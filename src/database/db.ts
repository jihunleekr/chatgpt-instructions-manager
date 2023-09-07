import Dexie, { Table } from "dexie";

export interface Profile {
  id?: number;
  name: string;
  about: string;
  response: string;
  createdAt: Date;
}

export class MySubClassedDexie extends Dexie {
  profiles!: Table<Profile>;

  constructor() {
    super("multiProfile");
    this.version(1).stores({
      profiles: "++id, name, about, response",
    });
  }
}

export const db = new MySubClassedDexie();
