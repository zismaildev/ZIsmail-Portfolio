// Components
import React from "react";
import { Card, Container, Typography, Grid } from "@mui/material";
import NavbarComp from "../Components/Navbar";
import CarouselComp from "../Components/Carousel";
import Footer from "../Components/Footer";
import { CodeSection } from "react-code-section-lib";

// Contents
import Profile from "../Assets/Contents/profile.jpg";
import Mes from "../Assets/Contents/Certificateofzismail.jpg";
import Gesult from "../Assets/Contents/LINE_ALBUM_28.jpg";

export default function Portfolio() {
  const value = ` #include "DHT.h"

    #define DHTPIN 2                        // พินดิจิตอลเชื่อมต่อกับเซ็นเซอร์ DHT
    #define DHTTYPE DHT11                   // เวอร์ชั่นของ เซนเซอร์ DHT 22  (AM2302), AM2321
    
    int relay1 = 12;                        // พินดิจิตอลเชื่อมต่อกับ Relay ช่องที่ 1
    //int relay2 = 13;                      // พินดิจิตอลเชื่อมต่อกับ Relay ช่องที่ 2
    
    DHT dht(DHTPIN, DHTTYPE);
    
    void setup() {
      Serial.begin(9600);
      Serial.println("Sensor Is runing!");
      pinMode(relay1, OUTPUT);
      //pinMode(relay2,OUTPUT);
    
      dht.begin();
    }
    
    void loop() {
      // รอสักครู่ระหว่างการวัด
      delay(1000);                          // ดีเลย์ในการตรวจสอบ 1000 = 1 วินาที
      float h = dht.readHumidity();         // การกำหนดตัวแปรที่ใช้รับค่าความชื้น
      float t = dht.readTemperature();      // การกำหนดตัวแปรที่ใช้รับค่าอุณหภูมิ
    
      // ตรวจสอบว่าการอ่านล้มเหลวและออกก่อนกำหนด (เพื่อลองอีกครั้ง)
      if (isnan(h) || isnan(t)) {
        Serial.println("เซ็นเซอร์มีปัญหา !");
        return;
      }
    
      // ตรวจสอบค่าความชื้น ถ้าต่ำกว่า 70 จะทำการเปิดสวิท
      if (h >= 70) {
        digitalWrite(relay1, HIGH);
      }
      else {
        digitalWrite(relay1, LOW);
      }
    
      Serial.print(F("ความชื้น: "));
      Serial.print(h);
      Serial.print(F("%  อุณหภูมิ: "));
      Serial.print(t);
      Serial.println(F("°C "));
    }
  `;

  return (
    <div>
      <NavbarComp />
      <CarouselComp />
      <Container sx={{ pt: 5 }}>
        <Card md={6} p={3} mt={5}>
          <div className="condiv home">
            <img src={Profile} alt="profile" className="profilepic" />
            <h1>My Portfolio</h1>
            <Typography
              variant="h7"
              color="text.secondary"
              component="p"
              className="text-indent"
            >
              เว็บไซต์นี้สร้างขึ้นมาเพื่อนำเสนอ
              ความสามารถและผลงานของกระผมโดยการใช้งาน React Framework ร่วมกับ
              Firebase เพื่อทำให้เว็บไซต์นี้สามารถเข้าชมได้
              และเว็บไซต์นี้ได้พัฒนาให้ลองรับในทุกขนาดหน้าจอเพื่อตอบสนอง
              กับผู้เยี่ยมชมในทุกอุปกรณ์
            </Typography>
          </div>

          <Grid container p={5}>
            <Grid md={6} p={3} mt={2}>
              <img src={Mes} alt="profile" className="ContentsImg" />
            </Grid>
            <Grid md={6} p={3} mt={15}>
              <Typography
                component="h1"
                variant="h5"
                align="center"
                color="text.primary"
              >
                ชนะเลิศการแข่งขันประกวดโครงงาน
              </Typography>
            </Grid>
          </Grid>

          <Container>
            <Card container p={5}>
              <Typography align="center" variant="h5" gutterBottom>
                โครงงาน เครื่องรดน้ำต้นไม้อัตโนมัติ
              </Typography>
              <Grid container p={5}>
                <Grid md={6} p={3} mt={2}>
                  <img src={Gesult} alt="Gesult" className="ContentsImg" />
                </Grid>
                <Grid md={6} p={3} mt={15}>
                  <Typography
                    variant="h7"
                    component="p"
                    className="text-indent"
                  >
                    ผมทำได้นำทักษะและความรู้ ที่ไม่ได้สอนในห้องเรียน
                    เพื่อมาบูรณาการเกิดเป็นองค์ความรู้
                    เพื่อเพิ่มทักษะความสามารถในการทำงาน โดยการพัฒนาและสร้างสรรค์
                    นวัตกรรมใหม่ เพื่อเพิ่มทักษะในการปฏิบัติงาน
                    เสริมสร้างประสบการ์ให้ได้มาตฐานและนำความรู้จากการหาข้อมูลด้วยตนเอง
                  </Typography>
                </Grid>
              </Grid>
              <Typography align="center" variant="h5" gutterBottom>
                ตัวอย่างโค้ด Arudino ในโครงงาน
              </Typography>
              <CodeSection showLineNumbers theme="dark" lang="C#">
                {value}
              </CodeSection>
            </Card>
          </Container>
        </Card>
      </Container>
      <Footer />
    </div>
  );
}
