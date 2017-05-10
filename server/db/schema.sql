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
  name VARCHAR(64) NOT NULL DEFAULT 'NOT NULL',
  password VARCHAR(64) NULL DEFAULT 'NOT NULL',
  email VARCHAR(64),
  salt  VARCHAR(64) NULL,
  age INTEGER,
  skill VARCHAR(64)
);


-- ---
-- Table 'Dives'
--
-- ---

DROP TABLE IF EXISTS dives;

CREATE TABLE dives (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name CHAR(40),
  longitude DECIMAL(10, 5) NOT NULL,
  latitude DECIMAL(10, 5) NOT NULL,
  rating CHAR(20),
  description TEXT NULL DEFAULT NULL,
  user_dive INT NULL DEFAULT NULL
);

-- ---
-- Table 'comments'
--
-- ---

DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  diveSite_id INTEGER,
  message  CHAR(255),
  user_id INT,
  date_1 DATETIME
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