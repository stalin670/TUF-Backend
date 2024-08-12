CREATE DATABASE banner_db;

USE banner_db;

CREATE TABLE banner (
  id INT PRIMARY KEY AUTO_INCREMENT,
  visible BOOLEAN NOT NULL,
  description TEXT,
  timer INT NOT NULL,
  link VARCHAR(255)
);

INSERT INTO banner (visible, description, timer, link) VALUES (false, '', 0, '');
