import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx"

const root = document.getElementById("app");

const phones = [{
    "imgSrc":"https://i.ebayimg.com/thumbs/images/m/mm8CRMI3Gzp8Cf7im_9fMqA/s-l225.jpg",
    "title":"Apple iPhone 7 - 32GB/128GB/256GB - All Colours - UNLOCKED - Various Grades ",
    "price":"$249.17 to $323.92", "category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mhlZSV_afUI2YUIQKvGg0YA/s-l225.jpg","title":"Samsung Galaxy S10+ Plus Smartphone 6.4 inch 256 512 GB Storage Top Offer","price":"$687.10","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/bhYAAOSwqDpdf0xJ/s-l225.webp","title":"New ListingApple iPhone 7 Plus - 32GB - Black (Unlocked)","price":"$286.56","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m6nU6zZl1lFh4wXS3cPhgAw/s-l225.jpg","title":"Samsung Galaxy S7 Edge SM-G935F - 32GB - (Unlocked) Smartphone Colours Grades","price":"$149.45 to $211.74","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mkXfuLyfk24GnmocgA71oKw/s-l225.jpg","title":"SONY XPERIA XZ2 64GB - BLACK - Unlocked  - Smartphone Mobile Phone","price":"$185.64 to $210.56","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/FqEAAOSwYuJdf0Bn/s-l225.webp","title":"New ListingiPhone X 256GB Space Grey - Unlocked - Owned from new","price":"$747.54","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/aHYAAOSw2O1df1Bq/s-l225.webp","title":"New ListingApple iPhone 8 Plus - 64GB - Rose Gold (UNLOCKED)","price":"$436.05","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mIVK8SBLBNdfhERCxfr9okg/s-l225.jpg","title":"APPLE iPHONE 6 16GB / 64GB / 128GB - Unlocked / Voda -  Smartphone Mobile Phone ","price":"$130.82 to $160.72","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ZGIAAOSwydNdIu1Q/s-l225.webp","title":"OnePlus 7 GM1900 Dual 8GB RAM 256GB Mirror Gray (Aisa) ship from EU Auténtic","price":"$463.97","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/muGAbzfCc0g96Des2xNMzyg/s-l225.jpg","title":"Apple iPhone 7 Smartphone 32GB 128GB 256GB Factory Unlocked 4G LTE WiFi iOS","price":"$184.00 to $244.00","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mnqTyGthiW5QMFFGiY_6HpA/s-l225.jpg","title":"Google Pixel 2 Smartphone 64GB 128GB Verizon GSM AT&T T-Mobile Unlocked 4G LTE","price":"$159.00 to $224.00","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/t0IAAOSwPJxdfzvp/s-l225.webp","title":"New ListingApple iPhone X 64GB Smartphone - Space Grey (Unlocked)","price":"$184.39","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/A-wAAOSwaAlcj5Fn/s-l225.webp","title":"Microsoft LUMIA 950 XL - 32GB-Black (without Simlock) Smartphone","price":"$98.65","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m_WPatqx8pqT55tD1EyIqfw/s-l225.jpg","title":"GOOGLE PIXEL XL 32GB / 128GB UNLOCKED - Quite Black / Very Silver / Really Blue ","price":"$123.34 to $135.80","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mFKe9ztaRmi8Rd-5YRlLDaQ/s-l225.jpg","title":"Apple iPhone 6s Plus  - 16GB 32GB 64GB - Unlocked Smartphone Various Colours","price":"$124.58 to $224.25","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mA9DYIMF1zic_CF2F6fuXkA/s-l225.jpg","title":"LG V20 Smartphone AT&T Sprint T-Mobile Verizon or Unlocked 4G LTE","price":"$80.00","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/4fcAAOSwrSpdQYhB/s-l225.webp","title":"XiaoMI REDMI NOTE 7,4GB+64GB,ESPAÑA VERSION,ROSA CAMARA 48MpX,Snapdragon 660","price":"$182.87","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qLoAAOSwF9pdfRG8/s-l225.webp","title":"New ListingApple iPhone X 256GB Unlocked Space Grey","price":"$512.16","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mOn4Z2VVgVxAHOezPunJJNA/s-l225.jpg","title":"Samsung Galaxy S9+ Plus 64GB - Unlocked Smartphone Choose color/Condition in Box","price":"$349.00 to $369.00","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m5tN-Xmw3C8u-f2xXagcMDg/s-l225.jpg","title":"APPLE iPHONE 6 - 16GB / 64GB / 128GB - Unlocked  Smartphone GOLD SILVER GREY","price":"$87.20 to $180.64","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ieIAAOSwEv9dft~O/s-l225.webp","title":"New ListingLG G6 32GB H872 \"Factory Unlocked\" 4G LTE Android Smartphone AT&T+ ICE","price":"$79.95","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mWRPg_oYbLiIG8SpIzx0XiQ/s-l225.jpg","title":"Samsung Galaxy S8+ Plus SM-G955F - 64GB - (Unlocked) Smartphone Colours Grades","price":"$224.20 to $269.05","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qgIAAOSwL4ldfrsq/s-l225.webp","title":"New ListingPerfect Samsung Galaxy S10 SM-G973U - 128GB - Prism White (Verizon) (Single SIM)","price":"$485.00","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/aE8AAOSw9aJdOb99/s-l225.webp","title":"Smartphone xiaomi mi a3 6.09''hd+ oc 4gb/64gb 4g-lte 32/48+8+2mpx a8.1 blue","price":"$199.50","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mx9Kia_X4ytSqYlMCOfynxQ/s-l225.jpg","title":"Apple iPhone 6 Plus Smartphone 16GB 64GB 128GB Factory Unlocked 4G LTE WiFi iOS","price":"$129.00 to $194.00","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/khUAAOSwKf9dfzt-/s-l225.webp","title":"New ListingApple iPhone X - 64GB - Space Gray (Unlocked) A1865 (CDMA + GSM)","price":"$56.00","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m5-3hCAAjrfkjL2eowvPV5g/s-l225.jpg","title":"Grade B Apple iPhone SE 16GB 64GB 128GB Unlocked SILVER ROSE BLACK GOLD A1723","price":"$93.43 to $174.41","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mQnubbztVjzT5zR0NaB87EQ/s-l225.jpg","title":"Apple iPhone 6s 16GB 32GB 64GB 128GB Unlocked SIM Free Smartphone Various Grades","price":"$136.99 to $249.12","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/vJEAAOSwalBdeUaQ/s-l225.webp","title":"New ListingCell Phone Samsung Smartphone Unlocked Dual Sim GT-S7262 4GB Dark Red Android ","price":"$1.00","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mSngJsBv76gfufRIuZCLClg/s-l225.jpg","title":"APPLE iPHONE SE 16GB / 64GB -  Unlocked / EE / O2 / Voda Smartphone Mobile","price":"$85.97 to $185.64","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mOnkfuXkfUeVMsKRHsaNwRw/s-l225.jpg","title":"Apple iPhone 8 - 64GB 256GB Unlocked Smartphone Silver Grey Gold Colours Grades ","price":"$367.48 to $498.30","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mXanjjSc_TIBWFm8a2mE7wA/s-l225.jpg","title":"Apple iPhone 7 Plus 32GB 128GB 256GB 12.0MP iOS Mobile Smartphone All Colours","price":"$373.78 to $479.66","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mPt8mYJgMZgYYeTKGWVet1g/s-l225.jpg","title":"APPLE iPHONE 5C 8GB / 16GB / 32GB - Unlocked - Pink, Blue, White. Mobile Phone","price":"$61.05 to $105.90","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/WacAAOSwEDxdZ4NX/s-l225.webp","title":"New ListingApple iPhone 7 Plus - 256GB - Jet Black (Unlocked) A1661 (CDMA + GSM)","price":"$350.00","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mU5uBFAEA9KkfQxyx1qlmpA/s-l225.jpg","title":"Apple iPhone 7 - 32GB 128GB 256GB - Unlocked SIM Free Smartphone Colours Grades","price":"$180.59 to $317.64","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/fB0AAOSwSn1df1Ck/s-l225.webp","title":"New ListingGenuine Apple iPhone 7 128gb Product Red Smartphone Unlocked Original Box","price":"$286.54","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mPVOlUVEGK642jC7sPt_4Yg/s-l225.jpg","title":"APPLE iPHONE 5S 16GB / 32GB / 64GB - Unlocked - Black / White Smartphone Mobile","price":"$98.43 to $123.34","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mwGQ_60RlA6pX2kr-iHt1Yg/s-l225.jpg","title":"Apple iPhone 6s 16/32/64/128GB Gold/Rose/Silver/Grey Unlocked","price":"$147.00 to $249.17","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/tcAAAOSwRmhdfYBe/s-l225.webp","title":"New ListingApple iPhone XR - 64GB - White (AT&T) A1984 (CDMA + GSM)","price":"$485.00","category":"Cell Phones & Smartphones for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mf01AjU1VoEWA-_w8dPC7-Q/s-l225.jpg","title":"P30 PRO 6.3'' Android 9.0 Phone 6GB+256GB Dual SIM Smartphone Free TF Card 128G","price":"$94.99","category":"Cell Phones & Smartphones for sale"}]
const laptops = [{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/t50AAOSwo5ZdfnFj/s-l225.webp","title":"New ListingNOTEBOOK LENOVO THINKPAD T430 INTEL CORE i5-3320M 2x 2.6GHz 4GB RAM 320GB HDD","price":"$37.79","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7AkAAOSwPXFcMJO7/s-l225.webp","title":"Dell Latitude E6230 Intel i5-3320M 2,60GHz 4GB 320GB BT WiFi 1366x768 Windows 10","price":"$155.07","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Ii4AAOSwuxRdd5IW/s-l225.webp","title":"Lenovo ThinkPad X230 12.5\" (500GB, Intel Core i5 3rd Gen., 2.5GHz, 4GB)...","price":"$119.61","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m_2CoFXBQaz_1uIQIJjUJuQ/s-l225.jpg","title":"MEGA DEAL Lenovo ThinkPad Office Laptop X220 Core i5 8GB Ram SSD/HDD Windows 10","price":"$161.95 to $311.46","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/H0QAAOSwGB1dYWlV/s-l225.webp","title":"Lenovo legion y530-15ich 81 CV 00 Dysp-i7-8750h 2.2ghz - 8gb - 1tb-GEF","price":"$686.10","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/tjUAAOSwHGxdJFTq/s-l225.webp","title":"NEW PC Laptop Notebook HP 6hm00ea 255 g7 AMD 4gb RAM 500gb Windows 10 Pro","price":"$242.63","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Ju8AAOSwmRBdfiQM/s-l225.webp","title":"New ListingNOTEBOOK HP ELITEBOOK 840 G1 INTEL CORE i5-4300U 2x 1.9GHz 4GB RAM 500GB HDD","price":"$7.20","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/m5AAAOSw4tldfpuU/s-l225.webp","title":"New ListingNOTEBOOK LENOVO THINKPAD T450 INTEL CORE i5-5300U 2x 2.3GHz 4GB RAM 500GB HDD","price":"$7.20","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/TuQAAOSwXhRdcek6/s-l225.webp","title":"New ListingStone nt310-h - A quick Intel i5 laptop 8gb ram 240gb ssd","price":"$124.59","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/fiMAAOSw-ZRcqLQT/s-l225.webp","title":"New ListingHP Pro Business Laptop - with 16GB RAM, Office, SSD, i7, illustrator, Windows 10","price":"$355.08","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/lU4AAOSwpO5dfjKx/s-l225.webp","title":"New ListingDell Latitude 3180 Laptop Netbook 11.3\" Intel N4200 8Gb RAM 128Gb SSD Windows 10","price":"$199.34","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m24aeQcnd5TYkAHkjGbwsZA/s-l225.jpg","title":"HP ZBook 15 Intel Core i7-4900mq ✔ SSD ✔ 16gb Ram spots ✔ Quadro k2100m ✔ win10 ✅ B-Ware","price":"$409.00 to $519.84","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3C8AAOSwAvVdderD/s-l225.webp","title":"New ListingDell XPS 13\" 9350 i7-6500U 8gb 256gb SSD see description","price":"$560.66","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3OYAAOSw1btdfkAq/s-l225.webp","title":"New ListingNOTEBOOK LENOVO THINKPAD T430 INTEL CORE i5-3320M 2x 2.6GHz 4GB RAM 320GB HDD","price":"$8.31","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ppEAAOSwZuxdfjki/s-l225.webp","title":"New ListingNOTEBOOK LENOVO THINKPAD T440p INTEL CORE i5-4300M 2x 2.6GHz 4GB RAM 128GB SSD","price":"$12.75","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~xUAAOSwiBRdffLQ/s-l225.webp","title":"NOTEBOOK LENOVO THINKPAD X230 CORE i5-3320M 2x 2.6GHz 4GB RAM 320GB HDD","price":"$9.42","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/myAyqwf5_I1ekfeiqDiO6qA/s-l225.jpg","title":"HP EliteBook 820 G1 12.5\" Laptop Intel i5-4300u 1.9GHz 4th gen - Options ","price":"$124.58 to $305.23","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ulIAAOSwgpJdfgDg/s-l225.webp","title":"NOTEBOOK LENOVO THINKPAD T440p INTEL CORE i5-4300M 2x 2.6GHz 4GB RAM 128GB SSD","price":"$27.16","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/r6QAAOSwYUldfgfr/s-l225.webp","title":"New ListingNOTEBOOK HP ELITEBOOK 8470p INTEL CORE i5-3230M 2x 2.6GHz 4GB RAM 320GB HDD","price":"$25.49","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mu8AAOSw0BZded7h/s-l225.webp","title":"New ListingHP Pavilion Ts Sleekbook 15 15.6' Laptop 55M APU 4GB 1 TB HDD Windows 10 Pro","price":"$24.92","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3zYAAOSw-tldeeBp/s-l225.webp","title":"New ListingDell Xps L322X 13.3' Laptop i7-3687U 2.10 GHz 8GB 256 GB SSD Windows 10 Pro","price":"$142.03","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/LiMAAOSwJuhdfkcy/s-l225.webp","title":"New ListingNOTEBOOK LENOVO THINKPAD X230 TABLET CORE i7-3520M 2x 2.9GHz 4GB RAM 128GB SSD","price":"$50.43","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/cDYAAOSwDQ1ceDWN/s-l225.webp","title":"ASUS ZenBook 3 14\" FUll HD Ultra Slim Laptop i7-8550U 16GB 512GB SSD, Win 10 Pro","price":"$1,087.99","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~OkAAOSwhEhcSusV/s-l225.webp","title":"Lenovo ThinkPad X1 Carbon Laptop Core i7 4600U 240GB SSD 8GB RAM W10 Ultrabook","price":"$348.84","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mPET5JeYHcSP9lCofsPVkmA/s-l225.jpg","title":"CHEAP LAPTOP DELL LATITUDE E6410 CORE i5 WINDOWS 10 & MS OFFICE - 1YR WARRANTY","price":"$124.58 to $236.72","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/q9oAAOSwpO9c8WRE/s-l225.webp","title":"New ListingLaptop Lenovo Thinkpad T450 i5-5300U 2.3GHZ 12GB DDR3 512GB SSD","price":"$128.33","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/WPcAAOSwkwJdPwZ0/s-l225.webp","title":"14\" New Laptop Notebook HP 640 g1 Core i5 RAM 4gb HDD 500gb Windows 10 Pro","price":"$332.41","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/9bAAAOSwZ3Bdcstg/s-l225.webp","title":"New ListingASUS VivoBook X541UV-BB7 15.6\" Intel Core i7-7500 8GB RAM Laptop Computer (BA12)","price":"$26.00","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qIAAAOSwihlc9ioh/s-l225.webp","title":"New ListingDell Latitude E7450","price":"$173.18","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mkJLxlQNr9VtJB96Wl_azAA/s-l225.jpg","title":"HP ZBook 15 Intel Core i7-4800mq ✔ SSD ✔ RAM is 8gb ✔ Quadro k610m ✔ win10 ✅ B-Ware","price":"$409.00 to $515.41","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mbbrduiI8slLJDj_GbCdd7Q/s-l225.jpg","title":"NEW HP 15-BS289WM Laptop Touchscreen Laptop Intel Pentium N5000 ","price":"$318.88 to $649.99","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/m0BuFEG7DglFF-hAaxfPEyA/s-l225.jpg","title":"MEGA DEAL Lenovo ThinkPad Office Laptop X200 Core2 8GB Ram SSD/HDD Windows 10","price":"$112.12 to $199.33","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Ej8AAOSwMjBdauzx/s-l225.webp","title":"New ListingDell Latitude E7450 i7-5600U @3.2GHz 16GB RAM 500GB SSD Win10Pro UltraBook B++!","price":"$299.00","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/kE4AAOSw44db7KtL/s-l225.webp","title":"Microsoft Surface Laptop 2 13.5  Intel Core i5 8GB RAM 256GB SSD (Latest Model)","price":"$989.99 to $1,009.99","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/P9wAAOSwLJldedqk/s-l225.webp","title":"New ListingLenovo Thinkpad X1 Carbon 14.0 Laptop i7-3667U 2.00 GHz 8GB 180GB SSD Win 10 Pro","price":"$64.79","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/m/mAS3ddm1aRVIIJUwKFxktVw/s-l225.jpg","title":"Laptop 12,1\" HD | i7-3687u 3.3Ghz | 4GB RAM Spots | 128GB SSD | WIN10 extremely robust!","price":"$276.99 to $443.25","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/9k0AAOSwZ11dfsLD/s-l225.webp","title":"New ListingPanasonic Cf-31 Toughbook Laptop Cf-31 MK5 Intel Core i5-5300U 500GB 8Gb Dock","price":"$434.99","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/AEIAAOSwwD5dSgCn/s-l225.webp","title":"New ListingDell latitude e7420 Laptop - Intel i5, 2GHz, 12GB RAM. Clean and in great shape!","price":"$49.99","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/uBIAAOSw9Gdcj4rE/s-l225.webp","title":"PC Notebook Laptop Refurbished HP 6470b Core i3 RAM 4gb HDD 250gb","price":"$155.16","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/OMwAAOSwEv9ded0a/s-l225.webp","title":"New ListingHP Zbook 17 G2 17.3' Laptop i7-4710MQ 2.50 GHz 16GB 960 GB SSD Windows 10 Pro","price":"$128.33","category":"PC Laptops & Netbooks for sale"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/aikAAOSw0tNdIUDF/s-l225.webp","title":"New Listing✅ HP EliteBook 840 G3 2.60GHz ✅ i7-6600U 16GB RAM 512GB SSD Windows 10 Pro USB-C","price":"$449.95","category":"PC Laptops & Netbooks for sale"}]

class App extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            items: phones,
        }
    }

    handleChange(event){
        console.log(event.target.value);
        switch (event.target.value) {
            case "phones": {
                this.setState({
                    items: phones,
                });
                break;
            }
            case "laptops": {
                this.setState({
                    items: laptops,
                });
                break;
            }
        }
    };

    render(){
        return (
            <>
                <Header />
                <select onChange={this.handleChange.bind(this)}>
                    <option value="phones">Phones</option>
                    <option value="laptops">Laptops</option>
                </select>
                <ItemList items={this.state.items} />
            </>
        )
    }
}



ReactDOM.render(
    <App />,
    root
);