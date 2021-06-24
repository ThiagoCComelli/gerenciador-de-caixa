-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: gerenciador_de_caixa
-- ------------------------------------------------------
-- Server version	8.0.25-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `transaction_id` int NOT NULL,
  `account_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `transaction_id` (`transaction_id`),
  KEY `account_id` (`account_id`),
  CONSTRAINT `tags_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `tags_ibfk_2` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=320 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (89,'salario',26,5),(90,'salario',27,5),(91,'informatica',28,5),(92,'salario',29,5),(93,'salario',30,5),(94,'asd',31,6),(95,'asd',32,6),(235,'asd',103,6),(236,'asd',104,6),(237,'asd',105,6),(238,'asd',106,6),(239,'asd',107,6),(240,'asd',108,6),(241,'asd',109,6),(242,'asd',110,6),(243,'asd',111,6),(244,'asd',112,6),(245,'asd',113,6),(246,'asd',114,6),(247,'asd',115,6),(248,'asd',116,6),(249,'asd',117,6),(250,'asd',118,6),(251,'asd',119,6),(252,'asd',120,6),(253,'asd',121,6),(254,'asd',122,6),(255,'asd',123,6),(256,'asd',124,6),(257,'asd',125,6),(258,'asd',126,6),(259,'asd',127,6),(260,'asd',128,6),(261,'asd',129,6),(262,'asd',130,6),(263,'asd',131,6),(264,'asd',132,6),(265,'asd',133,6),(266,'asd',134,6),(267,'asd',135,6),(268,'asd',136,6),(269,'asd',137,6),(270,'asd',138,6),(271,'asd',139,6),(272,'asd',140,6),(273,'asd',141,6),(274,'asd',142,6),(275,'asd',143,6),(276,'asd',144,6),(277,'asd',145,6),(278,'asd',146,6),(279,'asd',147,6),(280,'asd',148,6),(281,'asd',149,6),(282,'asd',150,6),(283,'asd',151,6),(284,'asd',152,6),(285,'asd',153,6),(286,'asd',154,6),(287,'asd',155,6),(288,'asd',156,6),(289,'asd',157,6),(290,'asd',158,6),(291,'asd',159,6),(292,'asd',160,6),(293,'asd',161,6),(294,'asd',162,6),(295,'asd',163,6),(296,'asd',164,6),(297,'asd',165,6),(298,'asd',166,6),(299,'asd',167,6),(300,'asd',168,6),(301,'asd',169,6),(302,'asd',170,6),(303,'asd',171,6),(304,'asd',172,6),(305,'asd',173,6),(306,'asd',174,6),(307,'asd',175,6),(308,'asd',176,6),(309,'zxc',215,6),(311,'gasto',255,5),(312,'cartao',255,5);
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-23 19:27:31
