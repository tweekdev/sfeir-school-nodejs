const PouchDB = require("pouchdb");
PouchDB.plugin(require("pouchdb-find"));

const app = require("./lib/app");
const log = require("./lib/logger")();

const { INITDB_DATABASE = "schoolsdb", PORT = 3000 } = process.env;

process.on("uncaughtException", err => {
  log.error({ err }, "Got an uncaught exception");
  process.exit(1);
});

process.on("unhandledRejection", err => {
  log.error({ err }, "Got an unhandled rejection");
  process.exit(1);
});

const db = new PouchDB(INITDB_DATABASE);
db.info()
  .then(info => log.info(info))
  .then(app(db).listen(PORT, () => log.info(`App listening on port ${PORT}!`)));
