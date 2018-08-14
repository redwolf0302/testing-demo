const Database = require('better-sqlite3');
const {DATABASE_PATH} = require('../../settings');

const database = new Database(DATABASE_PATH);

function getMessages(fromId, toId) {
    return database.prepare('select * from `IM` where (`from`=:fromId and `to`=:toId) or (`to`=:fromId and `from`=:toId)').all({fromId, toId})
}

module.exports = {getMessages};