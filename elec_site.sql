-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 07 juin 2024 à 17:45
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `elec_site`
--

-- --------------------------------------------------------

--
-- Structure de la table `company_references`
--

CREATE TABLE `company_references` (
  `id` int(11) NOT NULL,
  `logo_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `company_references`
--

INSERT INTO `company_references` (`id`, `logo_path`) VALUES
(4, 'uploads\\1717669865974.png'),
(5, 'uploads\\1717669873434.png'),
(6, 'uploads\\1717669893294.png'),
(8, 'uploads\\1717669934688.png'),
(9, 'uploads\\1717669944800.jpeg'),
(10, 'uploads\\1717669955562.png'),
(11, 'uploads\\1717669968490.jpeg'),
(12, 'uploads\\1717669982718.png'),
(13, 'uploads\\1717669990792.webp'),
(14, 'uploads\\1717670014769.png'),
(15, 'uploads\\1717670026156.png'),
(16, 'uploads\\1717670040542.png'),
(17, 'uploads\\1717670057965.png'),
(20, 'uploads\\1717670122364.png'),
(21, 'uploads\\1717670155639.jpg'),
(22, 'uploads\\1717670172280.png');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'root', 'elec123');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `company_references`
--
ALTER TABLE `company_references`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `company_references`
--
ALTER TABLE `company_references`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
