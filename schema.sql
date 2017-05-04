-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
		
CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Name` MEDIUMTEXT(medium) NOT NULL DEFAULT 'NOT NULL',
  `password` MEDIUMTEXT(medium) NULL DEFAULT 'NOT NULL',
  `salt ` MEDIUMTEXT(medium) NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Dives'
-- 
-- ---

DROP TABLE IF EXISTS `Dives`;
		
CREATE TABLE `Dives` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Name` MEDIUMTEXT(medium) NULL DEFAULT NULL,
  `x-coordinate` DECIMAL NULL DEFAULT NULL,
  `y-coordinate` DECIMAL NULL DEFAULT NULL,
  `rating` INT NULL DEFAULT NULL,
  `description` MEDIUMTEXT NULL DEFAULT NULL,
  `user_dive` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'comments'
-- 
-- ---

DROP TABLE IF EXISTS `comments`;
		
CREATE TABLE `comments` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `diveSite_id` INTEGER NULL DEFAULT NULL,
  `message ` INTEGER NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Dives` ADD FOREIGN KEY (user_dive) REFERENCES `Users` (`id`);
ALTER TABLE `comments` ADD FOREIGN KEY (diveSite_id) REFERENCES `Dives` (`id`);
ALTER TABLE `comments` ADD FOREIGN KEY (user_id) REFERENCES `Users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Dives` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `comments` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`Name`,`password`,`salt `) VALUES
-- ('','','','');
-- INSERT INTO `Dives` (`id`,`Name`,`x-coordinate`,`y-coordinate`,`rating`,`description`,`user_dive`) VALUES
-- ('','','','','','','');
-- INSERT INTO `comments` (`id`,`diveSite_id`,`message `,`user_id`) VALUES
-- ('','','','');