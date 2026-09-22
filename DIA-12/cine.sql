-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 10-09-2026 a las 15:56:53
-- Versión del servidor: 5.7.24
-- Versión de PHP: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cine`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cine`
--

CREATE TABLE `cine` (
  `idpeliculas` varchar(20) NOT NULL,
  `peliculas` varchar(20) NOT NULL,
  `funciones` varchar(20) NOT NULL,
  `salas` varchar(20) NOT NULL,
  `asientos` int(20) NOT NULL,
  `reservas` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cine`
--

INSERT INTO `cine` (`idpeliculas`, `peliculas`, `funciones`, `salas`, `asientos`, `reservas`) VALUES
('', 'La aventura', '12pm', ' sala 4', 20, 12),
('', 'La conquista', ' 3pm', 'sala 1', 40, 32),
('', 'El abogado', ' 11am', 'sala 2', 34, 23),
('', 'Los Amigos', ' 2pm y 5pm', 'sala 10', 50, 47),
('', 'El regreso', ' 10am', 'sala 6', 45, 32),
('', 'La Anaconda', '10pm', 'sala 12', 25, 20),
('', 'El bosque', '11am y 3pm', 'sala 7', 54, 42),
('', 'El fraude', '3pm', 'sala 11', 65, 45),
('', 'El conjuro', '4pm', 'sala 3', 34, 34),
('', 'El amor', '5pm', 'sala 1', 45, 23);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
