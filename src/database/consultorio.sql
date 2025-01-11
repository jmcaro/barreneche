-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.1.0 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para consultorio
CREATE DATABASE IF NOT EXISTS `consultorio` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `consultorio`;

-- Volcando estructura para tabla consultorio.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `categoria` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla consultorio.categorias: ~7 rows (aproximadamente)
DELETE FROM `categorias`;
INSERT INTO `categorias` (`id`, `categoria`, `descripcion`, `createdAt`, `updatedAt`) VALUES
	('1cf5c344-2c64-4513-899a-c177233d82ab', 'Contabilidad', 'Categoria de Contabilidad', '2024-01-23 00:33:06', '2024-01-23 03:29:18'),
	('43bf7212-f7af-48aa-a2d8-3a05893e401d', 'Regimen Simple De Tributación', 'RST          ', '2024-10-01 14:57:17', '2024-11-13 17:02:25'),
	('5ba03f9c-4290-4875-801f-e2d963a97a40', 'Exógena', 'Categoría sobre medios magnéticos y procesos eléctronicos DIAN', '2024-01-23 03:31:44', '2024-01-23 03:31:44'),
	('6ff15334-b506-450f-909b-2cf1388ceb28', 'CONTROL FISCAL', 'CONTROL A LA EVSIÓN, GESTIÓN Y RESULTADOS', '2024-02-02 15:48:36', '2024-02-02 15:48:36'),
	('7fb8cdb8-c5b7-4c65-afc0-4d6e9d2c7739', 'Finanzas', 'Categoría de finanzas', '2024-01-23 01:47:39', '2024-01-23 01:47:39'),
	('92ce7017-e68b-48dd-8ef8-339881ac14ea', 'Costos', 'Categoria de costos', '2024-01-23 01:46:51', '2024-01-23 01:46:51'),
	('f1e8416a-1071-4610-86e6-bfc95c3e5c0f', 'IMPUESTO DE RENTA', 'IMPUESTO DE RENTA', '2024-11-13 17:03:17', '2024-11-13 17:03:17'),
	('fee37482-0a06-4d55-bda5-e68910f97e64', 'IVA', 'Categoría de Impuestos                        ', '2024-01-23 00:36:56', '2024-11-13 17:03:35');

-- Volcando estructura para tabla consultorio.consultas
CREATE TABLE IF NOT EXISTS `consultas` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `correo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `consulta` text COLLATE utf8mb4_general_ci NOT NULL,
  `tipoPersona` varchar(255) COLLATE utf8mb4_general_ci DEFAULT 'NULL',
  `primerNombre` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `segundoNombre` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `primerApellido` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `segundoApellido` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `razonSocial` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tipoIdentificacion` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `numeroIdentificacion` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `sexo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `estado` enum('Pendiente de revisión','En proceso','Esperando información adicional','En revisión','Resuelta','Cerrada','Rechazada','Derivada') COLLATE utf8mb4_general_ci DEFAULT 'Pendiente de revisión',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoriaId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `ticketNumber` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ticketNumber` (`ticketNumber`),
  KEY `categoriaId` (`categoriaId`),
  CONSTRAINT `consultas_ibfk_1` FOREIGN KEY (`categoriaId`) REFERENCES `categorias` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla consultorio.consultas: ~6 rows (aproximadamente)
DELETE FROM `consultas`;
INSERT INTO `consultas` (`id`, `correo`, `telefono`, `consulta`, `tipoPersona`, `primerNombre`, `segundoNombre`, `primerApellido`, `segundoApellido`, `razonSocial`, `tipoIdentificacion`, `numeroIdentificacion`, `sexo`, `estado`, `createdAt`, `updatedAt`, `categoriaId`, `ticketNumber`) VALUES
	('118c2b19-4cfd-4d7f-9a10-6b29c7611284', 'britanny@gmail.com', '3026912958', 'Como han evolucionado los costos en la medida que las tecnologías  han facilitado los procesos industriales', 'NULL', 'Brithany', '', 'Sandoval', 'Vasquez', '', 'CC', '104565521', 'F', 'Pendiente de revisión', '2024-11-14 21:36:42', '2024-11-14 21:36:42', '92ce7017-e68b-48dd-8ef8-339881ac14ea', 5),
	('8071e894-235b-404e-a839-856dce38be20', 'juanito@mail.com', '35050550', 'Quisiera saber si soy declarante de renta porque me llego un comunicado de la Dian', 'NULL', 'Juanito', '', 'Perz', '', 'xxx', 'CC', '321321321', 'M', 'En proceso', '2024-10-01 15:01:02', '2024-11-14 22:53:55', '5ba03f9c-4290-4875-801f-e2d963a97a40', 1),
	('9cefdbb9-89e2-4413-9bad-f90d245e4a9d', 'jcaroa3@ucentral.edu.co', '3138214481', 'Es legal el cobro del impuesto de seguridad en los pasajes aéreos', 'NULL', 'Floridalba', 'Patricia', 'Olmos ', '', '', 'CC', '222222222', 'F', 'En proceso', '2024-01-24 15:12:15', '2024-11-13 17:00:47', 'fee37482-0a06-4d55-bda5-e68910f97e64', 2),
	('ded2770a-a5cb-41c2-b50b-807f15b4cb4e', 'reiholt@gmail.com', '3023278582', 'Que es el control fiscal', 'NULL', 'Reiholt', 'Jose', 'Coronado', 'Arevalo', 'Reiholt SAS', 'CC', '1043584772', 'E', 'Pendiente de revisión', '2024-11-14 22:22:51', '2024-11-14 22:22:51', '6ff15334-b506-450f-909b-2cf1388ceb28', 6),
	('e14baf77-9b1c-49be-9ce5-920bde74d44f', 'carlos.casado199@gmail.com', '3243311780', '¿Cómo realizo mi declaración de renta?', 'NULL', 'Carlos ', 'Andrés', 'Casado', 'Crispín', 'AMACEM SAS', 'CC', '1097099429', 'M', 'Pendiente de revisión', '2024-08-21 22:34:41', '2024-08-21 22:34:41', '1cf5c344-2c64-4513-899a-c177233d82ab', 3),
	('fdcc353f-1a5a-4822-ab5e-173aae566f69', 'jmcaro88@gmail.com', '3508521908', 'quiero que la dian me devuelva un IVA', 'NULL', 'jose', 'miguel', 'caro', 'arroyo', '', 'CC', '104567552', 'M', 'Pendiente de revisión', '2024-01-24 04:19:26', '2024-01-24 04:19:26', 'fee37482-0a06-4d55-bda5-e68910f97e64', 4);

-- Volcando estructura para tabla consultorio.responses
CREATE TABLE IF NOT EXISTS `responses` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `contenido` text COLLATE utf8mb4_general_ci NOT NULL,
  `fechaRespuesta` datetime DEFAULT NULL,
  `observaciones` text COLLATE utf8mb4_general_ci,
  `ConsultaId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ConsultaId` (`ConsultaId`),
  CONSTRAINT `responses_ibfk_1` FOREIGN KEY (`ConsultaId`) REFERENCES `consultas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla consultorio.responses: ~0 rows (aproximadamente)
DELETE FROM `responses`;
INSERT INTO `responses` (`id`, `contenido`, `fechaRespuesta`, `observaciones`, `ConsultaId`) VALUES
	('1', 'dfdfdfgdgd', '2024-11-12 16:09:46', 'ninguna', 'e14baf77-9b1c-49be-9ce5-920bde74d44f');

-- Volcando estructura para tabla consultorio.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `rol` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla consultorio.roles: ~4 rows (aproximadamente)
DELETE FROM `roles`;
INSERT INTO `roles` (`id`, `rol`, `createdAt`, `updatedAt`) VALUES
	('05fac6a6-d063-4650-8856-da49902fa54b', 'Decano', '2024-11-13 17:04:50', '2024-11-13 17:04:50'),
	('40eceb20-af62-4d5b-997e-b27b11dd1e52', 'Rector', '2024-01-24 15:06:53', '2024-01-24 15:06:53'),
	('8f469cd0-5c53-43c6-9481-e55727b1e6ac', 'Estudiante', '2024-01-01 00:20:24', '2024-01-01 00:20:24'),
	('af6460d9-669f-4610-865d-f463a587e5ec', 'Administrador', '2023-08-03 02:13:57', '2023-08-03 02:13:57'),
	('c3cc14a7-5f62-4ce9-9e0d-7203d23d7182', 'Profesor', '2024-01-01 02:46:52', '2024-01-01 02:46:52');

-- Volcando estructura para tabla consultorio.user_consultation
CREATE TABLE IF NOT EXISTS `user_consultation` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `UsuarioId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `ConsultaId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UsuarioId` (`UsuarioId`),
  KEY `ConsultaId` (`ConsultaId`),
  CONSTRAINT `user_consultation_ibfk_1` FOREIGN KEY (`UsuarioId`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `user_consultation_ibfk_2` FOREIGN KEY (`ConsultaId`) REFERENCES `consultas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla consultorio.user_consultation: ~8 rows (aproximadamente)
DELETE FROM `user_consultation`;
INSERT INTO `user_consultation` (`id`, `UsuarioId`, `ConsultaId`, `createdAt`, `updatedAt`) VALUES
	('02a465b1-d0cb-4973-9bcd-738600b5f678', 'cb0389f9-df91-4cc1-8e1b-80c3f37625f4', 'e14baf77-9b1c-49be-9ce5-920bde74d44f', '2024-11-10 22:47:14', '2024-11-10 22:47:14'),
	('272eada2-4e03-45c1-8fda-bff906540071', 'fca785ba-3167-4bcf-b7c2-8a2a0eff4420', '9cefdbb9-89e2-4413-9bad-f90d245e4a9d', '2024-11-10 22:42:05', '2024-11-10 22:42:05'),
	('9a00c77f-4298-4e08-8115-345838ff7191', '1104f7e5-c28e-44d0-9460-41321b3eb2c3', '8071e894-235b-404e-a839-856dce38be20', '2024-11-10 22:46:39', '2024-11-10 22:46:39'),
	('9c3607b2-7d4f-4c12-bf78-752843f5b66e', '1f0f2ff0-de39-4157-99d2-c4c43a867340', 'fdcc353f-1a5a-4822-ab5e-173aae566f69', '2024-11-10 22:47:33', '2024-11-10 22:47:33'),
	('a367c67d-b442-403e-97d7-4ad4a14fa8ca', 'cb0389f9-df91-4cc1-8e1b-80c3f37625f4', '9cefdbb9-89e2-4413-9bad-f90d245e4a9d', '2024-11-10 22:42:05', '2024-11-10 22:42:05'),
	('aa70fe2f-0602-46ea-9fa1-7c01fd69e29e', '1f0f2ff0-de39-4157-99d2-c4c43a867340', '8071e894-235b-404e-a839-856dce38be20', '2024-11-10 22:46:39', '2024-11-10 22:46:39'),
	('ae9f9db8-2b0c-4010-8b3e-7e2cf4d6db7a', 'fca785ba-3167-4bcf-b7c2-8a2a0eff4420', 'fdcc353f-1a5a-4822-ab5e-173aae566f69', '2024-11-10 22:47:33', '2024-11-10 22:47:33'),
	('be2e4ee2-eb1b-406d-9f9c-82e482680ca3', '1104f7e5-c28e-44d0-9460-41321b3eb2c3', 'e14baf77-9b1c-49be-9ce5-920bde74d44f', '2024-11-10 22:47:14', '2024-11-10 22:47:14');

-- Volcando estructura para tabla consultorio.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `tipoDocumento` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `numeroDocumento` bigint DEFAULT NULL,
  `correo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `primerNombre` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `segundoNombre` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `primerApellido` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `segunApellido` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `nacimento` datetime DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `rolesId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `correo` (`correo`),
  UNIQUE KEY `numeroDocumento` (`numeroDocumento`),
  KEY `rolesId` (`rolesId`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`rolesId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla consultorio.usuarios: ~6 rows (aproximadamente)
DELETE FROM `usuarios`;
INSERT INTO `usuarios` (`id`, `tipoDocumento`, `numeroDocumento`, `correo`, `password`, `telefono`, `primerNombre`, `segundoNombre`, `primerApellido`, `segunApellido`, `nacimento`, `isActive`, `createdAt`, `updatedAt`, `rolesId`) VALUES
	('1104f7e5-c28e-44d0-9460-41321b3eb2c3', 'CC', 1044618775, 'emaariza915@gmail.com', '$2a$10$d.diE6czNHNiUWcHIjouJ..B/FF8jegh4JuyhQZKONkiWJTDiln5K', '3105419089', 'Emanuel ', 'Agustín', 'Ariza', 'Guerrero', '2006-09-08 00:00:00', 1, '2024-08-21 22:39:01', '2024-08-21 22:39:01', '8f469cd0-5c53-43c6-9481-e55727b1e6ac'),
	('1f0f2ff0-de39-4157-99d2-c4c43a867340', 'CC', 1222252525, 'dominga@gmail.com', '$2a$10$fSNzW21n5mmgIZUaP1By1uvdRCysCT54jdqIY2oogfQ0dK4YQfhsu', '350821', 'Dominga', '', 'Ariza', 'Rodriguez', '2021-08-04 00:00:00', 1, '2024-10-01 14:53:18', '2024-10-01 14:53:18', 'c3cc14a7-5f62-4ce9-9e0d-7203d23d7182'),
	('26fe9d83-5092-470c-9e58-1cb2777d0901', 'Ms.', 9637812306, 'Peter_Wisozk77@gmail.com', '$2a$10$GyoKw5S.160.7tY6G62zkuUWLs.YXHM1DjdOkrHENz1DOD253BPZ.', '625-309-0866 x054', 'Nikita', 'Jordan', 'Brown', 'Simonis', '1987-09-26 18:41:45', 1, '2023-08-03 02:16:38', '2023-08-03 02:16:38', 'af6460d9-669f-4610-865d-f463a587e5ec'),
	('6822b581-3e38-4cf1-8720-8275d5a037e2', 'Dr.', 8816308616, 'Bryon_Cartwright-Rogahn@yahoo.com', '$2a$10$ZLETPcswpGGdgg8WECMwKuU/3qU58VtIw.PeHFDLdX054HPc6Mow2', '1-853-375-7321 x19286', 'Nicole', 'Dakota', 'Tremblay', 'Stokes', '1990-12-12 00:48:29', 1, '2023-08-03 02:15:26', '2023-08-03 02:15:26', 'af6460d9-669f-4610-865d-f463a587e5ec'),
	('cb0389f9-df91-4cc1-8e1b-80c3f37625f4', 'CC', 1, 'q@q.com', '$2a$10$jrhCYfRQumfikTtVwokuu.ACT24gJAD/1ysFA.DgWgDEoJDIXrawi', '1', 'q', 'q', 'q', 'q', '2024-01-02 00:00:00', 1, '2024-01-22 01:18:03', '2024-01-22 01:21:33', 'c3cc14a7-5f62-4ce9-9e0d-7203d23d7182'),
	('d1952390-38eb-4099-958c-0ab2f03bbadd', 'CC', 1045675521, 'jmcaro88@gmail.com', '$2a$10$/0UdtNd39EZZl47JKxMgGeqYy0QzpUO1x0SuKOgi9aa5EavVv.bv2', '3508521908', 'jose', 'miguel', 'caro', 'arroyo', '1988-09-19 00:00:00', 1, '2024-01-22 01:26:23', '2024-01-22 04:05:40', 'af6460d9-669f-4610-865d-f463a587e5ec'),
	('fca785ba-3167-4bcf-b7c2-8a2a0eff4420', 'Ms.', 7014367231, 'Damien99@gmail.com', '$2a$10$rXfhV61sgavlz1RFUVx5ueWjGTfHTAUtyInD.EuNy3cmqnR6jgsc2', '949.291.2766 x7946', 'Vincent', 'Shiloh', 'Herzog', 'Toy', '2000-12-24 00:00:00', 1, '2023-08-03 02:15:11', '2024-11-10 01:48:37', '8f469cd0-5c53-43c6-9481-e55727b1e6ac');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
