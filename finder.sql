-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 11, 2013 at 03:25 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `finder`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `content` varchar(225) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `user_id` (`user_id`),
  KEY `room_id` (`room_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `more_images`
--

CREATE TABLE IF NOT EXISTS `more_images` (
  `image_id` int(11) NOT NULL AUTO_INCREMENT,
  `room_id` int(11) NOT NULL,
  `image_addr` varchar(40) NOT NULL DEFAULT 'images/default.jpg',
  PRIMARY KEY (`image_id`),
  KEY `room_id` (`room_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE IF NOT EXISTS `room` (
  `room_id` int(11) NOT NULL AUTO_INCREMENT,
  `posted_id` int(11) DEFAULT '7',
  `verified_id` int(11) DEFAULT '7',
  `room_name` varchar(40) NOT NULL,
  `addr` varchar(225) NOT NULL,
  `area` varchar(40) NOT NULL,
  `city` varchar(20) NOT NULL,
  `gender` int(1) NOT NULL DEFAULT '3',
  `img` varchar(40) NOT NULL DEFAULT 'images/default.jpg',
  `phone` varchar(10) NOT NULL DEFAULT '0000000000',
  `date` datetime NOT NULL,
  `longitude` varchar(20) NOT NULL DEFAULT '-74.02533710002899',
  `latitude` varchar(20) NOT NULL DEFAULT '40.74468029701054',
  PRIMARY KEY (`room_id`),
  KEY `posted_id` (`posted_id`),
  KEY `posted_id_2` (`posted_id`),
  KEY `verified_id` (`verified_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=40 ;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`room_id`, `posted_id`, `verified_id`, `room_name`, `addr`, `area`, `city`, `gender`, `img`, `phone`, `date`, `longitude`, `latitude`) VALUES
(1, 7, 7, 'Manhattan Mall', 'Manhattan Mall, 33rd St., New York, NY 1', 'Korean Town', 'New Your City', 0, 'images/5.jpg', '2147483647', '2013-05-09 02:07:02', '-74.02533710002899', '40.74468029701054'),
(2, 7, 7, 'Debaun Auditorium', '500 Hudson St., Hoboken, NJ 07307', 'Hoboken', 'Hoboken', 0, 'images/6.jpg', '2014567890', '2013-05-09 03:12:17', '-74.02533710002899', '40.74468029701054'),
(3, 7, 7, 'Charmin Restrooms', '142 West 42nd St., New York, NY 10036', 'Times Square', 'New York City', 0, 'images/7.jpg', '9184567890', '2013-05-08 14:23:12', '-74.02533710002899', '40.74468029701054'),
(4, 7, 7, 'Babbio Center', '1 Castle Point on Hudson, Hoboken, NJ 070', 'Hoboken', 'Hoboken', 0, 'images/8.jpg', '2012165000', '2013-05-07 05:08:17', '-74.02533710002899', '40.74468029701054'),
(5, 7, 7, 'Samuel C. Williams Library', 'Washington St at 7th St, Hoboken, NJ 07030', 'Hoboken', 'Hoboken', 3, 'images/9.jpg', '2012165000', '2013-05-06 03:18:00', '-74.02533710002899', '40.74468029701054'),
(6, 7, 7, 'Computer Center Lab', 'Washington St at 7th St, Hoboken, NJ 07030', 'Hoboken', 'Hoboken', 1, 'images/10.jpg', '2012165000', '2013-05-08 16:14:38', '-74.02533710002899', '40.74468029701054'),
(7, 7, 7, 'Howe Center', 'Washington St at 8th St, Hoboken, NJ 07030', 'Hoboken', 'Hoboken', 0, 'images/1.jpg', '2012165000', '2013-05-06 20:34:14', '-74.02533710002899', '40.74468029701054'),
(8, 7, 7, 'Lieb Bldg', 'Stevens Institute of Technology, Hoboken, NJ 07030', 'Hoboken', 'Hoboken', 0, 'images/2.jpg', '2012165000', '2013-05-08 19:22:40', '-74.02533710002899', '40.74468029701054'),
(9, 7, 7, 'IchiUmi', '6 E 32nd St New York, NY 10016?', 'Korean Town', 'New York City', 0, 'images/3.jpg', '2127251333', '2013-05-06 02:14:00', '-74.02533710002899', '40.74468029701054'),
(10, 7, 7, 'IchiUmi', '6 E 32nd St New York, NY 10016?', 'Korean Town', 'New York City', 0, 'images/4.jpg', '2127251333', '2013-05-09 05:27:50', '-74.02533710002899', '40.74468029701054'),
(11, 7, 7, 'Hangawi', '12 E 32nd St New York, NY 10016?', 'Korean Town', 'New York City', 2, 'images/5.jpg', '2122130077', '2013-05-06 06:15:10', '-74.02533710002899', '40.74468029701054'),
(12, 7, 7, 'Hangawi', '12 E 32nd St New York, NY 10016?', 'Korean Town', 'New York City', 2, 'images/6.jpg', '2122130077', '2013-05-08 19:27:38', '-74.02533710002899', '40.74468029701054'),
(13, 7, 7, 'Hot Kitchen', '104 2nd Avenue, Manhatton, NY 10003', 'East Villiage', 'New York City', 2, 'images/7.jpg', '2122283090', '2013-05-07 05:05:00', '-74.02533710002899', '40.74468029701054'),
(14, 7, 7, 'Crif Dogs', '113 Saint Marks Place #2, New York, NY 10009', 'East Villiage', 'New York City', 3, 'images/8.jpg', '2126142728', '2013-05-07 16:34:26', '-74.02533710002899', '40.74468029701054'),
(15, 7, 7, 'Legend Bar and Restaurant', '88 7th Avenue, New York, NY 10011', 'West Villiage', 'New York City', 3, 'images/9.jpg', '2129291778', '2013-05-09 05:08:00', '-74.02533710002899', '40.74468029701054'),
(16, 7, 7, 'Sabon Store', '78 7th Avenue, New York, NY 100011', 'West Villiage', 'New York City', 3, 'images/10.jpg', '6464861809', '2013-05-09 11:16:35', '-74.02533710002899', '40.74468029701054'),
(17, 7, 7, 'Shipyard Park', '1 14th Street, Hoboken, NJ 07030', 'Hoboken', 'Hoboken', 3, 'images/default.jpg', '2014202012', '2013-05-09 04:12:10', '-74.02533710002899', '40.74468029701054'),
(39, 7, 7, 'Hudson River', '212121212', 'Hoboken', 'Hoboken', 3, 'images/new.jpg', '2175506624', '2013-05-09 18:39:53', '-74.02443587779999', '40.742757892996956');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  `privilege` int(1) NOT NULL DEFAULT '2',
  `active` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `first_name`, `last_name`, `email`, `password`, `privilege`, `active`) VALUES
(5, 'Dora', 'Dong', 'missdxy@gmail.com', '66UKI8qrx8iDI', 2, 1),
(7, 'Binzhe', 'Liu', 'liubinzhe@gmail.com', '66UKI8qrx8iDI', 0, 0),
(8, 'Binzhe', 'Liu', 'bliu6@stevens.edu', '66UKI8qrx8iDI', 2, 1),
(9, 'mmmm', 'qqqqq', 'a@a.com', '11kkvQQiMAh9w', 2, 1),
(10, '2121', '21212', '1@123', '12IbR.gJ8wcpc', 2, 1),
(11, 'asd', '123', 'bliu6@stevensssss', '66UKI8qrx8iDI', 2, 1),
(12, '123', '123', '1@2.com', '66UKI8qrx8iDI', 2, 1),
(13, 'Binzh', 'LIU', 'liubinzhe2@gmail.com', '66UKI8qrx8iDI', 2, 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `more_images`
--
ALTER TABLE `more_images`
  ADD CONSTRAINT `more_images_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`posted_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `room_ibfk_2` FOREIGN KEY (`verified_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
