-- MariaDB dump 10.17  Distrib 10.5.5-MariaDB, for Android (armv7-a)
--
-- Host: localhost    Database: shopwebstore
-- ------------------------------------------------------
-- Server version	10.5.5-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `paginas`
--

DROP TABLE IF EXISTS `paginas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paginas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `numerodescargas` int(11) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `fecha` varchar(22) DEFAULT NULL,
  `totalGanancia` int(11) DEFAULT NULL,
  `file` mediumblob DEFAULT NULL,
  `imagenMuestra` mediumblob DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paginas`
--

LOCK TABLES `paginas` WRITE;
/*!40000 ALTER TABLE `paginas` DISABLE KEYS */;
INSERT INTO `paginas` VALUES (1,'A_minimalista.js',NULL,9,NULL,NULL,'class Pagina{\n  constructor(idDiv){\n    this.idDiv=idDiv;\n    this.show();\n  }\n  show(){\n    let container=document.getElementById(this.idDiv);\n    let parrafo=document.createElement(\"P\");\n    let parrafo2=document.createElement(\"P\");\n    parrafo.innerHTML=\"Hola mundo\";\n    parrafo2.innerHTML=\"Hola Locos\";\n    parrafo.id=\"A_minimalista_P\";\n    parrafo2.id=\"A_minimalista_P2\";\n    parrafo.style=\"background:red;color:black\";\n    parrafo2.style=\"background:orange;color:black\";\n    container.appendChild(parrafo2);\n    container.appendChild(parrafo);\n  }\n  drop(){\n    let container=document.getElementById(this.idDiv);\n    while(container.children.length>0){\n      container.children[0].remove();\n    }\n  }\n}',NULL);
/*!40000 ALTER TABLE `paginas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-18 16:08:18
