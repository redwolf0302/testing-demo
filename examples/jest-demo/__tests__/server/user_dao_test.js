import fs from 'fs'
import Database from 'better-sqlite3'
import {DATABASE_PATH} from '../../dist/server/settings';

const DATABASE_BACKUP_PATH = `${DATABASE_PATH}.bak`;
const mockSettings = {DATABASE_PATH: DATABASE_BACKUP_PATH};

Database.prototype.begin    = function() { this.prepare('BEGIN'   ).run(); }
Database.prototype.commit   = function() { this.prepare('COMMIT'  ).run(); }
Database.prototype.rollback = function() { this.prepare('ROLLBACK').run(); }

const SQL = `
PRAGMA foreign_keys = false;

-- ----------------------------
--  Table structure for IM
-- ----------------------------
DROP TABLE IF EXISTS "IM";
CREATE TABLE "IM" (
	 "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	 "from" INTEGER NOT NULL,
	 "to" INTEGER NOT NULL,
	 "type" INTEGER DEFAULT 0,
	 "content" TEXT,
	 "attachment" text
);
INSERT INTO "main".sqlite_sequence (name, seq) VALUES ("IM", '5');

-- ----------------------------
--  Records of IM
-- ----------------------------
BEGIN;
INSERT INTO "IM" VALUES (1, 1, 2, 1, '你好吗？在不？', null);
INSERT INTO "IM" VALUES (2, 2, 1, 1, '我在的', '');
INSERT INTO "IM" VALUES (3, 1, 2, 2, '', 'https://static.jk.cn/T18.YTByhT1RCvBVdK.jpg');
INSERT INTO "IM" VALUES (4, 1, 3, 1, '你咋不开心？', null);
INSERT INTO "IM" VALUES (5, 3, 1, 1, '暑假作业被台风吹走了！', null);
COMMIT;

-- ----------------------------
--  Table structure for User
-- ----------------------------
DROP TABLE IF EXISTS "User";
CREATE TABLE "User" (
	 "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	 "name" TEXT NOT NULL,
	 "gender" TEXT DEFAULT 'M',
	 "age" INTEGER DEFAULT 0,
	 "avatar" TEXT,
	 "description" TEXT,
	UNIQUE ("name" ASC)
);
INSERT INTO "main".sqlite_sequence (name, seq) VALUES ("User", '3');

-- ----------------------------
--  Records of User
-- ----------------------------
BEGIN;
INSERT INTO "User" VALUES (1, 'Evan', 'F', 30, 'https://static.jk.cn/T1UoYTByhT1RCvBVdK.jpg', 'Description');
COMMIT;

-- ----------------------------
--  Indexes structure for table IM
-- ----------------------------
CREATE INDEX "im_type_idx" ON IM ("type" ASC);
CREATE INDEX "im_to_idx" ON IM ("to" ASC);
CREATE INDEX "im_from_idx" ON IM ("from" ASC);

-- ----------------------------
--  Indexes structure for table User
-- ----------------------------
CREATE INDEX "user_name_idx" ON User ("name" ASC);

PRAGMA foreign_keys = true;
`
xdescribe('user dao correctly', () => {
    beforeAll(() => {
        // if (fs.existsSync(DATABASE_PATH)) {
        //     fs.copyFileSync(DATABASE_PATH, DATABASE_BACKUP_PATH);
        //     fs.unlinkSync(DATABASE_PATH);
        // }
    });

    beforeEach(() => {
        console.log(DATABASE_PATH);
        let database = new Database(DATABASE_PATH);
        database.begin();
        database.exec(SQL);
        database.commit();
        database.close();
        // fs.readdirSync(DATABASE_PATH);
    });

    afterEach(() => {
        // fs.unlinkSync(DATABASE_PATH);
    });

    afterAll(() => {
        // if (fs.existsSync(DATABASE_BACKUP_PATH)) {
        //     fs.copyFileSync(DATABASE_BACKUP_PATH, DATABASE_PATH);
        //     fs.unlinkSync(DATABASE_BACKUP_PATH)
        // }
    });
    test('user list', () => {
        // jest.mock('../../dist/server/api/user/dao', () => {
        //     return {
        //         getUsers: jest.fn(() => {
        //             return {id: 1}
        //         })
        //     }
        // });
        const {getUsers} = require('../../dist/server/api/user/dao');
        let users = getUsers();
        expect(users).toMatchSnapshot();
    });
});