// Components
import React from "react";
import {
  Card,
  Container,
  Grid,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import NavbarComp from "../Components/Navbar";
import Footer from "../Components/Footer";

// Contents
import AboutmeJpg from "../Assets/Contents/aboutme.jpg";
import html from "../Assets/Skill/html.png";
import css from "../Assets/Skill/css.png";
import javascript from "../Assets/Skill/javascript.png";
import reactImage from "../Assets/Skill/react.png";
import arduino from "../Assets/Skill/arduino.png";
import python from "../Assets/Skill/python.png";
import mysql from "../Assets/Skill/mysql.png";
import lua from "../Assets/Skill/lua.png";
import nodejs from "../Assets/Skill/node.png";

export default function Testpage() {

  // Data
  const zismail = [
    {
      id: 1,
      src: html,
      title: "HTML",
      level: "95",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      level: "35",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      level: "85",
    },
    {
      id: 4,
      src: nodejs,
      title: "Nodejs",
      level: "50",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      level: "70",
    },
    {
      id: 6,
      src: arduino,
      title: "Arduino",
      level: "35",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      level: "85",
    },
    {
      id: 8,
      src: mysql,
      title: "Mysql",
      level: "70",
    },
    {
      id: 9,
      src: lua,
      title: "lua",
      level: "35",
    },
  ];
  // EndData

  // Progressbar

  return (
    <div>
      <NavbarComp />
      <Container sx={{ pt: 5 }}>
        <Card p={5}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            gutterBottom
            mt={10}
          >
            About Me
          </Typography>
          <Grid container p={5}>
            <Grid md={6} p={3} mt={2}>
              <img src={AboutmeJpg} alt="profile" className="profilepic" />
            </Grid>
            <Grid md={6} p={3} mt={15}>
              <Typography
                component="h1"
                variant="h3"
                align="center"
                color="text.primary"
              >
                Nattapong Panthiya
              </Typography>
            </Grid>
          </Grid>

          <Container>
            <Card className="Card-Bg">
              <Grid container p={5}>
                <Grid md={6} p={3} mt={5}>
                  <Typography
                    style={{ color: "white" }}
                    component="h1"
                    variant="h5"
                  >
                    ชื่อ : นาย ณัฐพงษ์ ปันธิยะ
                  </Typography>
                  <h5 style={{ color: "white" }}>ชื่อเล่น : หนึ่ง</h5>
                  <h5 style={{ color: "white" }}>อายุ : 18 ปี</h5>
                  <h5 style={{ color: "white" }}>
                    เกิดวันที่ : 13 กุมภาพันธ์ พ.ศ. 2547
                  </h5>
                  <h5 style={{ color: "white" }}>บุคลิกภาพ : ISTP</h5>
                  <h5 style={{ color: "white" }}>หมู่เลือด : O</h5>
                  <h5 style={{ color: "white" }}>วิชาที่ชอบ : คอมพิวเตอร์</h5>
                  <h5 style={{ color: "white" }}>
                    งานอดิเรก : ทำเว็บไซต์ ซ่อมคอม เรียนเขียนโปรแกรม
                  </h5>
                </Grid>
                <Grid md={6} p={3} mt={5}></Grid>
              </Grid>

              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="white"
              >
                Skills
              </Typography>

              <Container p={5}>
                <Grid>
                  <Grid container spacing={2}>
                    {zismail.map((item) => (
                      <Grid item key={item} xs={6} md={3}>
                        <Card
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                          style={{ color: "gray", textAlign: "center" }}
                          gutterBottom
                        >
                          <CardMedia
                            className="Skill-Image"
                            component="img"
                            sx={{
                              // 16:9
                              pt: "10.9%",
                            }}
                            image={item.src}
                            alt="random"
                          />
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="h4" component="h4">
                              {item.title}
                            </Typography>
                            <Typography variant="p" component="p">
                              ระดับความสามารถ : {item.level} %
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Container>
              <br />
            </Card>
          </Container>
        </Card>
      </Container>
      <Footer />
    </div>
  );
}
