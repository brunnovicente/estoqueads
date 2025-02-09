-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.32-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para estoque
CREATE DATABASE IF NOT EXISTS `estoque` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `estoque`;

-- Copiando estrutura para tabela estoque.pessoas
CREATE TABLE IF NOT EXISTS `pessoas` (
                                         `id` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(150) DEFAULT NULL,
    `telefone` varchar(20) DEFAULT NULL,
    `email` varchar(150) NOT NULL,
    `cpf` varchar(20) NOT NULL,
    `status` int(11) DEFAULT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `email` (`email`),
    UNIQUE KEY `cpf` (`cpf`)
    ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela estoque.pessoas: ~3 rows (aproximadamente)
INSERT INTO `pessoas` (`id`, `nome`, `telefone`, `email`, `cpf`, `status`, `createdAt`, `updatedAt`) VALUES
                                                                                                         (1, 'Mariazinha Area Leão', '(59) 59595-9595', 'mariazinha@gmail.com', '036.033.533-78', 1, '2024-12-24 00:02:47', '2024-12-24 00:02:47'),
                                                                                                         (2, 'Pedro Manoel Pereira', '(44) 98549-9529', 'pedro@gmail.com', '262.629.292-92', 1, '2024-12-24 00:35:14', '2024-12-24 00:35:14'),
                                                                                                         (3, 'Fernanda Bandeira Duarte', '(45) 95959-5959', 'fernanda.bandeira@gmail.com', '965.959.595-95', 1, '2024-12-24 00:37:05', '2024-12-24 00:37:05');

-- Copiando estrutura para tabela estoque.produtos
CREATE TABLE IF NOT EXISTS `produtos` (
                                          `id` int(11) NOT NULL AUTO_INCREMENT,
    `descricao` varchar(255) DEFAULT NULL,
    `preco` float DEFAULT NULL,
    `estoque` int(11) DEFAULT NULL,
    `status` int(11) DEFAULT NULL,
    `foto` varchar(255) DEFAULT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Copiando dados para a tabela estoque.produtos: ~23 rows (aproximadamente)
INSERT INTO `produtos` (`id`, `descricao`, `preco`, `estoque`, `status`, `foto`, `createdAt`, `updatedAt`) VALUES
                                                                                                               (1, 'Mouse Óptico', 2200.72, 48, 1, '/img/mouse.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (2, 'Teclado Mecânico', 2516.66, 59, 1, '/img/teclado.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (3, 'Monitor Full HD', 1449.64, 84, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (4, 'HD Externo 1TB', 163.21, 65, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (5, 'Pendrive 64GB', 2356.25, 64, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (6, 'Notebook i5', 1462.52, 90, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (7, 'Placa Mãe ATX', 1970.52, 10, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (8, 'Gabinete Gamer Com Led', 1000.22, 40, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-23 22:22:41'),
                                                                                                               (9, 'Fonte 500W', 2022.19, 19, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (10, 'Processador Ryzen 5', 379.4, 77, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (11, 'Memória RAM 16GB', 2072.88, 18, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (12, 'SSD 512GB', 519.62, 87, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (13, 'Headset Gamer', 1495.2, 15, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (14, 'Placa de Vídeo RTX 3060', 491.1, 45, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (15, 'Webcam HD', 2023.18, 89, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (16, 'Roteador Wi-Fi 6', 543.78, 75, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (17, 'Teclado Sem Fio', 124.19, 62, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (18, 'Mousepad RGB', 2125.33, 41, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (19, 'Microfone Condensador', 2690.69, 21, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (20, 'Suporte para Monitor', 1406.48, 85, 1, '/img/produto.png', '2024-12-06 17:29:33', '2024-12-06 17:29:33'),
                                                                                                               (21, 'Pen Drive 16 GB', 20, 10, 1, '/img/produto.png', '2024-12-23 21:47:42', '2024-12-23 21:47:42'),
                                                                                                               (22, 'Adaptador VGA para HDMI', 20, 5, 1, '/img/produto.png', '2024-12-23 21:49:04', '2024-12-23 22:28:29'),
                                                                                                               (23, 'Porta Fone de Ouvido', 35, 20, 1, '/img/produto.png', '2024-12-23 22:32:34', '2024-12-23 22:32:34');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
