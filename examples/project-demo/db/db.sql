/*
 Navicat Premium Data Transfer

 Source Server         : demo
 Source Server Type    : SQLite
 Source Server Version : 3008008
 Source Database       : main

 Target Server Type    : SQLite
 Target Server Version : 3008008
 File Encoding         : utf-8

 Date: 08/14/2018 23:02:12 PM
*/

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
INSERT INTO "main".sqlite_sequence (name, seq) VALUES ("IM", '3');

-- ----------------------------
--  Records of IM
-- ----------------------------
BEGIN;
INSERT INTO "IM" VALUES (1, 1, 2, 1, '你好吗？在不？', null);
INSERT INTO "IM" VALUES (2, 2, 1, 1, '我在的', null);
INSERT INTO "IM" VALUES (3, 1, 2, 2, '', 'https://static.jk.cn/T18.YTByhT1RCvBVdK.jpg');
COMMIT;

-- ----------------------------
--  Table structure for User
-- ----------------------------
DROP TABLE IF EXISTS "User";
CREATE TABLE `User` (
	`id`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`name`	TEXT NOT NULL UNIQUE,
	`gender`	TEXT DEFAULT 'M',
	`age`	INTEGER DEFAULT 0,
	`avatar`	TEXT
);
INSERT INTO "main".sqlite_sequence (name, seq) VALUES ("User", '3');

-- ----------------------------
--  Records of User
-- ----------------------------
BEGIN;
INSERT INTO "User" VALUES (1, '宝宝1', 'M', 30, 'https://static.jk.cn/T1UoYTByhT1RCvBVdK.jpg');
INSERT INTO "User" VALUES (2, '宝宝2', 'F', 20, 'https://static.jk.cn/T125CTByJT1RCvBVdK.jpg');
INSERT INTO "User" VALUES (3, '宝宝3', 'M', 29, 'https://static.jk.cn/T125CTByJT1RCvBVdK.jpg');
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
CREATE INDEX `user_name_idx` ON `User` (
	`name`	ASC
);

PRAGMA foreign_keys = true;
