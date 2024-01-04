const seeder = require("mongoose-seed");

seeder.connect("mongodb://localhost:27017/cache", () => {
  seeder.loadModels(["src/schemas/Task"]);

  seeder.clearModels(["Task"], function () {
    seeder.populateModels(require("./seedData"));
    seeder.disconnect();
  });
});
