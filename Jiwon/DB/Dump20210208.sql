-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: recyclable
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `비닐류`
--

DROP TABLE IF EXISTS `비닐류`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `비닐류` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `비닐류`
--

LOCK TABLES `비닐류` WRITE;
/*!40000 ALTER TABLE `비닐류` DISABLE KEYS */;
INSERT INTO `비닐류` VALUES (1,'과자 봉지','투명 비닐봉투에 넣어 재활용품으로 배출. 음식물 등 이물질이 묻은 경우 깨끗이 씻어서 배출. ※이물질 제거가 어려운 경우는 일반 종량제 봉투에 배출'),(2,'라면 봉지','투명 비닐봉투에 넣어 재활용품으로 배출. 음식물 등 이물질이 묻은 경우 깨끗이 씻어서 배출. ※이물질 제거가 어려운 경우는 일반 종량제 봉투에 배출'),(3,'빵 봉지','투명 비닐봉투에 넣어 재활용품으로 배출. 음식물 등 이물질이 묻은 경우 깨끗이 씻어서 배출. ※이물질 제거가 어려운 경우는 일반 종량제 봉투에 배출'),(4,'1회용 비닐','투명 비닐봉투에 넣어 재활용품으로 배출. 음식물 등 이물질이 묻은 경우 깨끗이 씻어서 배출. ※이물질 제거가 어려운 경우는 일반 종량제 봉투에 배출'),(5,'뽁뽁이','투명 비닐봉투에 넣어 재활용품으로 배출. 음식물 등 이물질이 묻은 경우 깨끗이 씻어서 배출. ※이물질 제거가 어려운 경우는 일반 종량제 봉투에 배출');
/*!40000 ALTER TABLE `비닐류` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `섬유류`
--

DROP TABLE IF EXISTS `섬유류`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `섬유류` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `섬유류`
--

LOCK TABLES `섬유류` WRITE;
/*!40000 ALTER TABLE `섬유류` DISABLE KEYS */;
INSERT INTO `섬유류` VALUES (1,'헌옷','투명 봉투에 담아 재활용품으로 배출하거나 재사용 가능한 의류의 경우 의류수거함에 배출.'),(2,'신발','투명 봉투에 담아 재활용품으로 배출하거나 재사용 가능한 의류의 경우 의류수거함에 배출.'),(3,'가방','투명 봉투에 담아 재활용품으로 배출하거나 재사용 가능한 의류의 경우 의류수거함에 배출.'),(4,'담요','투명 봉투에 담아 재활용품으로 배출하거나 재사용 가능한 의류의 경우 의류수거함에 배출.'),(5,'누비이불','투명 봉투에 담아 재활용품으로 배출하거나 재사용 가능한 의류의 경우 의류수거함에 배출.'),(6,'커튼','투명 봉투에 담아 재활용품으로 배출하거나 재사용 가능한 의류의 경우 의류수거함에 배출.'),(7,'카페트','투명 봉투에 담아 재활용품으로 배출하거나 재사용 가능한 의류의 경우 의류수거함에 배출.'),(8,'솜이불','투명 봉투에 담아 재활용품으로 배출.'),(9,'베개','투명 봉투에 담아 재활용품으로 배출.'),(10,'방석','투명 봉투에 담아 재활용품으로 배출.'),(11,'롤러스케이트','투명 봉투에 담아 재활용품으로 배출.');
/*!40000 ALTER TABLE `섬유류` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `유리병류`
--

DROP TABLE IF EXISTS `유리병류`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `유리병류` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `유리병류`
--

LOCK TABLES `유리병류` WRITE;
/*!40000 ALTER TABLE `유리병류` DISABLE KEYS */;
INSERT INTO `유리병류` VALUES (1,'맥주병','할인점, 소매점 등에 되돌려 주고 빈 용기 보증금 환불 받을 수 있음'),(2,'소주병','할인점, 소매점 등에 되돌려 주고 빈 용기 보증금 환불 받을 수 있음'),(3,'청량음료병','할인점, 소매점 등에 되돌려 주고 빈 용기 보증금 환불 받을 수 있음'),(4,'음료수 병, 기타 병류','플라스틱이나 알루미늄 뚜껑 제거 후 내용물을 깨끗이 비운 후 배출. 담배꽁초 등 이물질을 넣지 말 것.');
/*!40000 ALTER TABLE `유리병류` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `전등`
--

DROP TABLE IF EXISTS `전등`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `전등` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `전등`
--

LOCK TABLES `전등` WRITE;
/*!40000 ALTER TABLE `전등` DISABLE KEYS */;
INSERT INTO `전등` VALUES (1,'형광등','깨어지지 않도록 주의하여 주요거점(동주민센터, 아파트, 주택가 골목 등)에 설치된 폐형광등 전용수거함에 배출');
/*!40000 ALTER TABLE `전등` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `전자제품`
--

DROP TABLE IF EXISTS `전자제품`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `전자제품` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `전자제품`
--

LOCK TABLES `전자제품` WRITE;
/*!40000 ALTER TABLE `전자제품` DISABLE KEYS */;
INSERT INTO `전자제품` VALUES (1,'소형폐가전','재활용품과 함께 배출. 동주민센터 및 아파트 내 비치된 전용수거함으로 배출.'),(2,'대형폐가전','대형폐가전 무상방문수거 서비스 사전 예약하여 배출.');
/*!40000 ALTER TABLE `전자제품` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `종이류`
--

DROP TABLE IF EXISTS `종이류`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `종이류` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `종이류`
--

LOCK TABLES `종이류` WRITE;
/*!40000 ALTER TABLE `종이류` DISABLE KEYS */;
INSERT INTO `종이류` VALUES (1,'신문지','물기에 젖지 않도록 하고 끈으로 묶거나 박스류에 담아서 배출'),(2,'책자','비닐 코팅된 표지, 스프링 제본된 책자류의 스트링은 가급적 제거 후 종이류로 배출'),(3,'노트','비닐 코팅된 표지, 스프링 제본된 책자류의 스트링은 가급적 제거 후 종이류로 배출'),(4,'전단지','비닐 코팅된 표지, 스프링 제본된 책자류의 스트링은 가급적 제거 후 종이류로 배출'),(5,'쇼핑백','비닐 코팅된 표지, 스프링 제본된 책자류의 스트링은 가급적 제거 후 종이류로 배출'),(6,'달력','비닐 코팅된 표지, 스프링 제본된 책자류의 스트링은 가급적 제거 후 종이류로 배출'),(7,'포장지','비닐 코팅된 표지, 스프링 제본된 책자류의 스트링은 가급적 제거 후 종이류로 배출'),(8,'상자류(종이 박스, 기타 골판지 상자 등)','상자에 붙어 있는 테이프나 철핀을 제거한 후 끈으로 묶어 배출');
/*!40000 ALTER TABLE `종이류` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `종이컵,종이팩`
--

DROP TABLE IF EXISTS `종이컵,종이팩`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `종이컵,종이팩` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `종이컵,종이팩`
--

LOCK TABLES `종이컵,종이팩` WRITE;
/*!40000 ALTER TABLE `종이컵,종이팩` DISABLE KEYS */;
INSERT INTO `종이컵,종이팩` VALUES (1,'종이컵','상자에 내용물을 비운 뒤 일반 종이류와 혼합되지 않게 구분하여 배출. 담배꽁초, 음식물 등 이물질이 있을 경우 일반 종량제 봉투로 배출. ※종이팩 분리배출함이 없는 경우 다른 재활용품과 함께 배출'),(2,'종이팩','내용물을 비운 뒤 가급적 물로 헹군 후 압착하여 배출. 일반 종이류와 혼합되지 않게 구분하여 배출. ※종이팩 분리배출함이 없는 경우 다른 재활용품과 함께 배출');
/*!40000 ALTER TABLE `종이컵,종이팩` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `캔,고철류`
--

DROP TABLE IF EXISTS `캔,고철류`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `캔,고철류` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `캔,고철류`
--

LOCK TABLES `캔,고철류` WRITE;
/*!40000 ALTER TABLE `캔,고철류` DISABLE KEYS */;
INSERT INTO `캔,고철류` VALUES (1,'철캔, 알루미늄캔','겉 또는 속의 플라스틱 뚜껑 등 제거 후 내용물을 비우고 배출. 담배꽁초 등 이물질을 넣지 말아야 함.'),(2,'기타 캔류(부탄가스 용기, 살충제 용기 등)','구멍을 뚫어 남은 가스를 비운 후 배출'),(3,'고철(공구류, 철사, 못, 전선, 알루미늄, 스텐 등)','투명 비닐봉투에 넣어 배출');
/*!40000 ALTER TABLE `캔,고철류` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `플라스틱류`
--

DROP TABLE IF EXISTS `플라스틱류`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `플라스틱류` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `플라스틱류`
--

LOCK TABLES `플라스틱류` WRITE;
/*!40000 ALTER TABLE `플라스틱류` DISABLE KEYS */;
INSERT INTO `플라스틱류` VALUES (1,'페트병, 플라스틱 용기류','내용물을 깨끗이 비우고 가능한 압착하여 배출.'),(2,'폐스티로폼','스티로폼 상자의 내용물은 깨끗이 비우고 이물질 제거 후 배출. 음식물 등 이물질이 묻은 스티로폼은 일반 종량제 봉투로 배출. ※단, 건축용 자재로 쓰인 내연재, 공작용 우드락 재질로 된 것은 재활용 안 됩니다.');
/*!40000 ALTER TABLE `플라스틱류` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-08  0:45:00
