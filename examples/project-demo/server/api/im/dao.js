const Database = require('better-sqlite3');
const {DATABASE_PATH} = require('../../settings');

const database = new Database(DATABASE_PATH);

function getMessages(fromId, toId) {
    return database
        .prepare('select * from `IM` where (`from`=:fromId and `to`=:toId) or (`to`=:fromId and `from`=:toId)')
        .all({
            fromId,
            toId
        })
}

function getFriends(userId) {
    let toIds = database
        .prepare('select DISTINCT `to` from `IM` where `from`=:userId')
        .all({userId});
    return database
        .prepare(`select DISTINCT * from \`User\` where id in (${toIds.map(id => id.to).join(',')})`)
        .all();
}

module.exports = {getMessages, getFriends};