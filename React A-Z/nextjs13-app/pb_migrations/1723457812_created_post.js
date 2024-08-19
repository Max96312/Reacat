/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kttp1c13cn4cpiv",
    "created": "2024-08-12 10:16:52.860Z",
    "updated": "2024-08-12 10:16:52.860Z",
    "name": "post",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rhjk9b4j",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("kttp1c13cn4cpiv");

  return dao.deleteCollection(collection);
})
