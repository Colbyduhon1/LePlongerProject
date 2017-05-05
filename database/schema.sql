-- ---
-- Globals
-- ---
DROP DATABASE IF EXISTS dive_team;
CREATE DATABASE dive_team;
USE dive_team;

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS users;
		
CREATE TABLE users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  Name varchar(255) NOT NULL DEFAULT 'NOT NULL',
  password varchar(255) NULL DEFAULT 'NOT NULL',
  salt  varchar(255) NULL
);

-- ---
-- Table 'Dives'
-- 
-- ---

DROP TABLE IF EXISTS dives;
		
CREATE TABLE dives (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name MEDIUMTEXT NULL DEFAULT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  lattitude DECIMAL(10, 8) NOT NULL,
  rating INT NULL DEFAULT NULL,
  description MEDIUMTEXT NULL DEFAULT NULL,
  user_dive INT NULL DEFAULT NULL
);

-- ---
-- Table 'comments'
-- 
-- ---

DROP TABLE IF EXISTS comments;
		
CREATE TABLE comments (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  diveSite_id INTEGER NULL DEFAULT NULL,
  message  INTEGER NULL DEFAULT NULL,
  user_id INT NULL DEFAULT NULL
);

-- ---
-- Foreign Keys 
-- ---

-- ALTER TABLE `Dives` ADD FOREIGN KEY (user_dive) REFERENCES `Users` (`id`);
-- ALTER TABLE `comments` ADD FOREIGN KEY (diveSite_id) REFERENCES `Dives` (`id`);
-- ALTER TABLE `comments` ADD FOREIGN KEY (user_id) REFERENCES `Users` (`id`);

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