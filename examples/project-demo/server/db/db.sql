/*
 Navicat Premium Data Transfer

 Source Server         : demo
 Source Server Type    : SQLite
 Source Server Version : 3008008
 Source Database       : main

 Target Server Type    : SQLite
 Target Server Version : 3008008
 File Encoding         : utf-8

 Date: 08/18/2018 15:59:22 PM
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
INSERT INTO "User" VALUES (1, '哈迪斯宝宝', 'M', 30, 'https://static.jk.cn/T1UoYTByhT1RCvBVdK.jpg', '全宇宙一切生命的支配者，感叹人间被污染而决定毁灭万物，每当在地面复活时，冥王总是挑选一个最纯洁的人作为自己的躯体，这回他选中了仙女座 瞬，哈迪斯从神话时代起就把自己真正的躯体安置在极乐净土，他与雅典娜进行过的几次圣战都相当惨烈，特别是243年前的那次，雅典娜方面八十八圣斗士只有两名（白羊座 史昂和天秤座 童虎）幸存了下来。
    在极乐净土一战中苏醒，欲以剑把雅典娜直接杀死，但被阻止，接着以压倒性的力量把穿上“神圣衣”的星矢、紫龙、冰河、瞬、一辉全数击倒，在星矢五人危在旦夕之时突然被雅典娜以“生命之球”保护，而雅典娜穿起圣衣苏醒了，哈迪斯和雅典娜两神展开命运的最后战役，两人斗得势均力敌，难分难解，在雅典娜不敌时星矢以“天马流星拳”把哈迪斯打飞，但星矢也中了哈迪斯的“无明之剑”倒下，哈迪斯更耻笑星矢有勇无谋终有此下场，最后雅典娜、紫龙、冰河、瞬、一辉集中小宇宙在“胜利女神权杖”上把哈迪斯消灭，极乐净土崩溃了，但哈迪斯的怨念化成“无明之剑”依然刺在星矢的胸口，生命危在旦夕，迫使雅典娜穿越时空去上代摧毁“无明之剑”');
INSERT INTO "User" VALUES (2, '''睡神''许普诺斯宝宝', 'F', 20, 'https://static.jk.cn/T125CTByJT1RCvBVdK.jpg', '辅佐冥王的双子神之一，司掌睡眠的神，与死亡之神 塔纳托斯是双胞胎兄弟。眼睛和头发的颜色为金色，额头有空心的六芒星，行事冷静沉着，不喜杀生。
    用“永恒的睡眠”催眠了穿着了“仙女座神圣衣”的仙女座 瞬，与穿着了“天龙座神圣衣”和“天鹅座神圣衣”的天龙座 紫龙与天鹅座 冰河展开激烈交战，最后“永恒的睡眠”被看穿，被他们用“庐山昇龙霸”、“钻石星尘”合力击败。');
INSERT INTO "User" VALUES (3, '''死神''塔纳托斯宝宝', 'M', 29, 'https://static.jk.cn/T19kYTByJT1RCvBVdK.jpg', '辅佐冥王 的双子神之一，司掌死亡的神，与睡眠之神 休普诺斯是双胞胎兄弟。眼睛和头发的颜色为银色，额头有实心的五角星，与休普诺斯相反，性格暴躁并极端蔑视人类，冷酷无情，不管敌人距离有多远，也可以随意杀人。
    轻松把星矢、紫龙、冰河、瞬、一辉五人秒杀，更把五件“黄金圣衣”完全粉碎，与穿着了“天马座神圣衣”的星矢展开激烈交战，最后被他以“天马流星拳”重创再使出“天马彗星拳”击败。');
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
