const Database = require('better-sqlite3');
const {DATABASE_PATH} = require('../../settings');

const database = new Database(DATABASE_PATH);

function getUsers() {
    return database.prepare('select * from `User`').all()
}

function getUserById(id) {
    return database.prepare('select * from `User` where id=:id').get({id});
}

module.exports = {getUsers, getUserById};