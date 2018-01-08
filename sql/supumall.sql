/*
 Navicat Premium Data Transfer

 Source Server         : localhost_330
 Source Server Type    : MySQL
 Source Server Version : 50714
 Source Host           : localhost:3306
 Source Schema         : supumall

 Target Server Type    : MySQL
 Target Server Version : 50714
 File Encoding         : 65001

 Date: 08/01/2018 20:07:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car`  (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `qty` float(255, 0) DEFAULT NULL,
  `add_time` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `userid` varchar(11) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `price` float(10, 2) DEFAULT NULL,
  `sales` float(255, 0) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 63 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES (12, 'http://localhost:1234/img/xie3.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.7cm', 3, '2018-01-08 20:04:36', '18877136500', 555.00, 797);
INSERT INTO `car` VALUES (19, 'http://localhost:1234/img/xie2.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.6cm', 5, '2018-01-08 20:05:04', '18877136500', 460.00, 743);
INSERT INTO `car` VALUES (24, 'http://localhost:1234/img/xie2.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.6cm', 5, '2018-01-08 17:22:49', '18877136500', 460.00, 743);

-- ----------------------------
-- Table structure for carlist
-- ----------------------------
DROP TABLE IF EXISTS `carlist`;
CREATE TABLE `carlist`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsId` float(255, 0) DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `add_time` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of carlist
-- ----------------------------
INSERT INTO `carlist` VALUES (1, NULL, '18877136500', '2018-01-06 20:10:31');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int(255) DEFAULT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `describe` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `sales` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `count` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `news` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, '../img/nav_1.jpg', 'Heinz亨氏 苹果胡萝卜泥113g', '5.9', '9.5', '88', '任购4罐立减60');
INSERT INTO `goods` VALUES (2, '../img/nav_2.jpg', 'Balic贝莱康 产妇专用卫生巾L5片', '19.9', '39', '30', '3包立减30');
INSERT INTO `goods` VALUES (3, '../img/nav_3.jpg', 'Beiens贝恩施 梦幻梳妆台88017D14pcs', '69', '120', '22', '满79立减15');
INSERT INTO `goods` VALUES (4, '../img/nav_4.jpg', 'AVENT飞利浦新安怡 宝宝餐具套装', '139', '240', '0', '99立减15');
INSERT INTO `goods` VALUES (5, '../img/nav_5.jpg', 'Lelch露安适 婴儿薄护适动纸尿裤XL36片', '140', '208', '999', '家有萌宝，湿巾少不了');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list`  (
  `id` int(255) DEFAULT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `describe` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `price` float(255, 0) DEFAULT NULL,
  `news` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `sales` float(255, 0) DEFAULT NULL
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES (1, '../img/xie1.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.5cm', 365, '新品上市', 689);
INSERT INTO `list` VALUES (2, '../img/xie2.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.6cm', 460, '新品上市', 743);
INSERT INTO `list` VALUES (3, '../img/xie3.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.7cm', 555, '新品上市', 797);
INSERT INTO `list` VALUES (4, '../img/xie4.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.8cm', 650, '新品上市', 851);
INSERT INTO `list` VALUES (5, '../img/xie5.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.9cm', 745, '新品上市', 905);
INSERT INTO `list` VALUES (6, '../img/xie6.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.10cm', 840, '新品上市', 959);
INSERT INTO `list` VALUES (7, '../img/xie7.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.11cm', 935, '新品上市', 1013);
INSERT INTO `list` VALUES (8, '../img/xie8.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.12cm', 1030, '新品上市', 1067);
INSERT INTO `list` VALUES (9, '../img/xie9.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.13cm', 1125, '新品上市', 1121);
INSERT INTO `list` VALUES (10, '../img/xie10.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.14cm', 1220, '新品上市', 1175);
INSERT INTO `list` VALUES (11, '../img/xie11.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.15cm', 1315, '新品上市', 1229);
INSERT INTO `list` VALUES (12, '../img/xie12.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.16cm', 1410, '新品上市', 1283);
INSERT INTO `list` VALUES (13, '../img/xie13.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.17cm', 1505, '新品上市', 1337);
INSERT INTO `list` VALUES (14, '../img/xie14.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.18cm', 299, '新品上市', 430);
INSERT INTO `list` VALUES (15, '../img/xie15.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.19cm', 399, '新品上市', 610);
INSERT INTO `list` VALUES (16, '../img/xie16.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.20cm', 499, '新品上市', 790);
INSERT INTO `list` VALUES (17, '../img/xie17.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.21cm', 599, NULL, 970);
INSERT INTO `list` VALUES (18, '../img/xie18.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.22cm', 699, NULL, 1150);
INSERT INTO `list` VALUES (19, '../img/xie19.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.23cm', 799, NULL, 1330);
INSERT INTO `list` VALUES (20, '../img/xie20.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.24cm', 899, '新品上市', 1510);
INSERT INTO `list` VALUES (21, '../img/xie21.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.25cm', 999, '新品上市', 1690);
INSERT INTO `list` VALUES (22, '../img/xie22.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.26cm', 1099, '新品上市', 1870);
INSERT INTO `list` VALUES (23, '../img/xie23.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.27cm', 1199, '新品上市', 2050);
INSERT INTO `list` VALUES (24, '../img/xie24.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.28cm', 1299, '新品上市', 2230);
INSERT INTO `list` VALUES (25, '../img/xie25.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.29cm', 1399, '新品上市', 2410);
INSERT INTO `list` VALUES (26, '../img/xie26.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.30cm', 1499, '新品上市', 2590);
INSERT INTO `list` VALUES (27, '../img/xie27.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.31cm', 1599, '新品上市', 2770);
INSERT INTO `list` VALUES (28, '../img/xie28.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.32cm', 1699, '新品上市', 2950);
INSERT INTO `list` VALUES (29, '../img/xie29.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.33cm', 1799, '新品上市', 3130);
INSERT INTO `list` VALUES (30, '../img/xie30.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.34cm', 1899, '新品上市', 3310);
INSERT INTO `list` VALUES (31, '../img/xie31.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.35cm', 1999, '新品上市', 3490);
INSERT INTO `list` VALUES (32, '../img/xie32.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.36cm', 2099, '新品上市', 3670);
INSERT INTO `list` VALUES (33, '../img/xie33.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.37cm', 2199, '新品上市', 3850);
INSERT INTO `list` VALUES (34, '../img/xie34.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.38cm', 2299, '新品上市', 4030);
INSERT INTO `list` VALUES (35, '../img/xie35.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.39cm', 2399, '新品上市', 4210);
INSERT INTO `list` VALUES (36, '../img/xie36.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.40cm', 2499, '新品上市', 4390);
INSERT INTO `list` VALUES (37, '../img/xie37.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.41cm', 2599, NULL, 4570);
INSERT INTO `list` VALUES (38, '../img/xie38.jpg', 'EVER UGG 11607澳洲皮羊毛一体保暖显瘦包子鞋雪地鞋酒红色24.42cm', 2699, NULL, 4750);

-- ----------------------------
-- Table structure for recommend
-- ----------------------------
DROP TABLE IF EXISTS `recommend`;
CREATE TABLE `recommend`  (
  `id` int(255) DEFAULT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `price` float(255, 0) DEFAULT NULL
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of recommend
-- ----------------------------
INSERT INTO `recommend` VALUES (1, '../img/recommend1.jpg', 'Wyeth惠氏 澳洲金装S26配方奶粉4段', 139);
INSERT INTO `recommend` VALUES (2, '../img/recommend2.jpg', '泰迪熊 呼吸特薄纸尿裤胶袋大包装XL50片', 116);
INSERT INTO `recommend` VALUES (3, '../img/recommend3.jpg', '维达 倍韧抽取式面巾纸150抽8包', 20);
INSERT INTO `recommend` VALUES (4, '../img/recommend4.jpg', '绵心 婴幼儿抑菌洗衣皂洋槐香200g', 6);
INSERT INTO `recommend` VALUES (5, '../img/recommend5.jpg', 'Aptamil爱他美 澳洲奶粉4段2岁以上900g', 208);
INSERT INTO `recommend` VALUES (6, '../img/recommend6.jpg', '妙洁 优悠杯215ml30只', 6);
INSERT INTO `recommend` VALUES (7, '../img/recommend7.jpg', 'goodbaby好孩子 婴儿卫生湿巾（海洋水润）80片', 12);
INSERT INTO `recommend` VALUES (8, '../img/recommend8.jpg', 'Nutrilon牛栏 荷兰奶粉3段800g', 155);
INSERT INTO `recommend` VALUES (9, '../img/recommend9.jpg', 'Nestle雀巢 德国超级能恩3段奶粉800g', 268);

-- ----------------------------
-- Table structure for sale
-- ----------------------------
DROP TABLE IF EXISTS `sale`;
CREATE TABLE `sale`  (
  `id` int(255) DEFAULT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `imgurls` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `introduce` text CHARACTER SET utf8 COLLATE utf8_bin,
  `news` text CHARACTER SET utf8 COLLATE utf8_bin,
  `content` text CHARACTER SET utf8 COLLATE utf8_bin
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sale
-- ----------------------------
INSERT INTO `sale` VALUES (1, '../img/sale1.jpg', '../img/sales1.jpg', 'EVER UGG专场', '温暖一冬', 'UGG一直是美国高端时尚生活方式的国际知名品牌，采用上乘材质与精湛工艺，让您体验奢华舒适。');
INSERT INTO `sale` VALUES (2, '../img/sale2.jpg', '../img/sales2.jpg', '双旦雀巢专场', '2罐立减40', 'NESTLE/雀巢，为世界上较大的食品制造商。140年来，先进的研发体系，让雀巢始终处于母婴营养领域的前沿，帮爸爸妈妈们给予小宝宝更多的健康与关爱。“宝宝的健康，我们的承诺”，雀巢140年来用心聆听宝宝的心声，守护一代代宝宝健康成长。');
INSERT INTO `sale` VALUES (3, '../img/sale3.jpg', '../img/sales3.jpg', '双旦澳洲奶粉专场', '任购4罐立减60', '澳洲奶粉大集合');
INSERT INTO `sale` VALUES (4, '../img/sale4.jpg', '../img/sales4.jpg', '双旦花王纸尿裤专\n场', '3包立减30', 'Merries花王是深受妈妈们青睐的纸尿裤品牌。它的透气性、柔软性以及吸水性都很棒，宝宝不管怎么动、怎么玩，就算出再多的汗都不用担心！用柔软的内衬棉凹凸点状设计，透气性很好，可以有效的预防尿布疹。还有防漏护围、变色尿显、棉柔魔术贴等各种贴心设计！');
INSERT INTO `sale` VALUES (5, '../img/sale5.jpg', '../img/sales5.jpg', '双旦大王纸尿裤专', '3包立减100', '大王是日本性价比非常高的纸尿裤，以薄著称，夏天再也不用担心捂到了！手感软到让人想哭！含有天然维E能体贴的呵护宝宝的敏感肌肤，裤裤柔软、蓬松、锁水不回渗、透气性很好而且弹力十足，有多层弹力环贴，贴合腰围和大腿围，全面防漏！');
INSERT INTO `sale` VALUES (6, '../img/sale6.jpg', '../img/sales6.jpg', '双旦湿巾专场', '家有萌宝，湿巾少不了', '婴儿湿巾是专门给宝宝用的湿巾，和成人的湿巾相比，婴儿湿巾的要求相对更高，因为宝宝的皮肤是非常娇嫩的，很容易过敏。婴儿湿巾又分为普通湿巾和手口专用湿巾，普通婴儿湿巾通常用来擦宝宝的小屁屁，手口湿巾用来擦宝宝的嘴和手的');
INSERT INTO `sale` VALUES (7, '../img/sale7.jpg', '../img/sales7.jpg', '双旦贝亲专场', '99立减15', '贝亲是来自日本的著名母婴用品品牌，1957年创立以来，一直秉承爱的理念，致力于为消费者提供高品质和种类齐全的母婴用品和服务，贝亲产品涵盖了母乳喂养、奶瓶奶嘴、宝宝肌肤护理、衣物清洗、水杯餐具等抚育宝宝的方方面面。');
INSERT INTO `sale` VALUES (8, '../img/sale8.jpg', '../img/sales8.jpg', '双旦保宁&得琪专场', '满79立减15', '保宁米迪恩作为韩国婴童市场的第一企业，经营范围已从哺乳用品、婴儿专用护 肤品、生活卫生用品、婴童服装、婴儿用品专门卖场发展成为了为宝宝及全家提供全方面综合护理服务的专门企业。');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `add_time` datetime(0) DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0)
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('18877136500', 'e99a18c428cb38d5f260853678922e03', '2018-01-06 18:57:44');
INSERT INTO `user` VALUES ('18888888777', '0e16ffd2fbb1d47ddee85c3b0c2fd149', '2018-01-05 19:12:32');
INSERT INTO `user` VALUES ('18888888990', 'd78ff0ef526543e2174540afdfea0154', '2018-01-05 19:12:32');
INSERT INTO `user` VALUES ('18888888991', 'd78ff0ef526543e2174540afdfea0154', '2018-01-05 19:12:32');
INSERT INTO `user` VALUES ('18877136510', 'e99a18c428cb38d5f260853678922e03', '2018-01-06 09:26:50');

SET FOREIGN_KEY_CHECKS = 1;
