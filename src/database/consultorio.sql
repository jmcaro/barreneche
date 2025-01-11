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

-- La exportación de datos fue deseleccionada.

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

-- La exportación de datos fue deseleccionada.

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

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla consultorio.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `rol` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

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

-- La exportación de datos fue deseleccionada.

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

-- La exportación de datos fue deseleccionada.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
