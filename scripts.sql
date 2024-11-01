CREATE database db_marketing;

 use db_marketing;
 
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

 
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `campaigns`
--

DROP TABLE IF EXISTS `campaigns`;
CREATE TABLE IF NOT EXISTS `campaigns` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `process_date` date NOT NULL,
  `process_hour` time NOT NULL,
  `process_status` int NOT NULL DEFAULT '1',
  `message_text` text COLLATE utf8mb4_general_ci NOT NULL,
  `phone_list` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_45455b21195721407322ddce007` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `campaigns`
--

INSERT INTO `campaigns` (`id`, `user_id`, `name`, `process_date`, `process_hour`, `process_status`, `message_text`, `phone_list`) VALUES
(1, 1, 'Capaña navideña', '2024-10-31', '17:00:00', 3, 'Te deseaños feliz navidad', '[\"655454\",\"99254654\",\"9854534\"]'),
(2, 1, 'Campaña halloween.', '2024-11-01', '17:00:00', 1, 'Te deseaños feliz halloween', '[\"655454\",\"99254654\",\"9854534\"]'),
(3, 1, 'Feliz día', '2024-10-31', '17:00:00', 1, 'Feliz dia :)', '[\"655454\",\"99254654\",\"9854534\"]'),
(4, 1, 'X', '2024-10-31', '23:34:00', 3, 'XD', '[\"655454\",\"99254654\",\"9854534\"]'),
(5, 2, 'prueba x', '2024-11-01', '00:15:00', 3, 'prueba', '[\"987874465\",\"654654\",\"654564\",\"5453134\"]'),
(6, 1, 'prueba HAPPY', '2024-11-08', '00:47:00', 1, 'x', '[\"123123123\",\"123123\",\"123123\"]'),
(7, 1, 'prueba x', '2024-11-01', '01:42:00', 3, 'xd', '[\"87854654\",\"545456\",\"655445\"]'),
(8, 1, 'xd', '2024-11-01', '02:40:00', 3, 'xd', '[\"8456465\",\"5494564\",\"4655465\"]');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` tinyint NOT NULL DEFAULT '1',
  `name` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`id`, `status`, `name`) VALUES
(2, 1, 'Cliente 2'),
(6, 1, 'Cliente 3'),
(7, 1, 'cliente 4'),
(8, 1, 'cliente 5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `campaign_id` int DEFAULT NULL,
  `text` text COLLATE utf8mb4_general_ci NOT NULL,
  `shipping_status` int NOT NULL DEFAULT '1',
  `process_date` date NOT NULL,
  `process_hour` time NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_7ee9933e7f3d3f6c5a4cfeb154b` (`campaign_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `messages`
--

INSERT INTO `messages` (`id`, `campaign_id`, `text`, `shipping_status`, `process_date`, `process_hour`, `phone`) VALUES
(1, 1, 'Feliz navidad', 1, '2024-10-31', '17:00:00', '980896791'),
(2, 1, 'Feliz navidad', 1, '2024-10-31', '17:00:00', '99999992'),
(3, 5, 'prueba', 2, '2024-11-01', '00:15:00', '987874465'),
(4, 5, 'prueba', 2, '2024-11-01', '00:15:00', '654654'),
(5, 5, 'prueba', 2, '2024-11-01', '00:15:00', '654564'),
(6, 5, 'prueba', 2, '2024-11-01', '00:15:00', '5453134'),
(7, 1, 'Te deseaños feliz navidad', 1, '2024-10-31', '17:00:00', '655454'),
(8, 1, 'Te deseaños feliz navidad', 1, '2024-10-31', '17:00:00', '99254654'),
(9, 1, 'Te deseaños feliz navidad', 1, '2024-10-31', '17:00:00', '9854534'),
(10, 4, 'XD', 1, '2024-10-31', '23:34:00', '655454'),
(11, 4, 'XD', 1, '2024-10-31', '23:34:00', '9854534'),
(12, 4, 'XD', 1, '2024-10-31', '23:34:00', '99254654'),
(13, 7, 'xd', 2, '2024-11-01', '01:42:00', '87854654'),
(14, 7, 'xd', 2, '2024-11-01', '01:42:00', '655445'),
(15, 7, 'xd', 2, '2024-11-01', '01:42:00', '545456'),
(16, 8, 'xd', 2, '2024-11-01', '02:40:00', '8456465'),
(17, 8, 'xd', 2, '2024-11-01', '02:40:00', '5494564'),
(18, 8, 'xd', 2, '2024-11-01', '02:40:00', '4655465');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int DEFAULT NULL,
  `status` tinyint NOT NULL DEFAULT '1',
  `username` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_c7bc1ffb56c570f42053fa7503b` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `customer_id`, `status`, `username`) VALUES
(1, 2, 1, 'Usuario 1'),
(2, 2, 1, 'Usuario 2');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `campaigns`
--
ALTER TABLE `campaigns`
  ADD CONSTRAINT `FK_45455b21195721407322ddce007` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `FK_7ee9933e7f3d3f6c5a4cfeb154b` FOREIGN KEY (`campaign_id`) REFERENCES `campaigns` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_c7bc1ffb56c570f42053fa7503b` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);
COMMIT;
 