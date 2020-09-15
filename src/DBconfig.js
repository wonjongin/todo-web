export const DBConfig = {
  name: "todoDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "todo",
      storeConfig: { kePath: "id", autoIncrement: true },
      storeSchema: [
        { name: "title", keypath: "title", options: { unique: false } },
      ],
    },
  ],
};
