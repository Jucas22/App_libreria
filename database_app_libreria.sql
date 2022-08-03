-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-08-2022 a las 20:09:12
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `database_app_libreria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `publishing` varchar(100) NOT NULL,
  `genre` varchar(50) NOT NULL,
  `author` varchar(100) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  `pag` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `title`, `publishing`, `genre`, `author`, `createdAt`, `updatedAt`, `pag`) VALUES
(1, 'Gerónimo Stilton: En el Reino de la Fantasía I', 'Destino', 'Fantasia Infantil', 'Elisabetta Dami', '0000-00-00', '0000-00-00', 377),
(2, 'Zig Zag', 'Debolsillo', 'CienciaFiccion Suspense', 'José Carlos Somoza', '0000-00-00', '0000-00-00', 569),
(3, 'Harry Potter y la Cámara Secreta', 'Salamandra', 'Fantasia', 'J.K. Rowling', '0000-00-00', '0000-00-00', 286),
(4, 'Diccionario Español-Italiano', '', 'Diccionario', '', '0000-00-00', '0000-00-00', 475),
(5, 'Enciclopedia Salvat de los Grandes Comspositores', 'Salvat S.A.', 'enciclopedia', '', '0000-00-00', '0000-00-00', 200),
(6, 'Biblia de Jerusalén', 'Desclée De Brouwer', 'Religioso', '', '2022-08-01', '2022-08-01', 1891),
(65, '', '', '', '', '2022-08-03', '2022-08-03', 0),
(74, 'r', 'r', 'r', 'r', '2022-08-03', '2022-08-03', 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
