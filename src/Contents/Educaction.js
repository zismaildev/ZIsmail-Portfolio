// Components
import React from "react";
import { Card, Container, Typography, Grid, CardContent } from "@mui/material";
import NavbarComp from "../Components/Navbar";
import Footer from "../Components/Footer";

// Contents
import { EducactionData } from "../Data/Data";
import EducationJpg from "../Assets/Contents/education.jpg";

export default function Educaction() {
  return (
    <div>
      <NavbarComp />
      <Container sx={{ pt: 5 }}>
        <Card>
          <div className="condiv home">
            <Typography variant="h4" component="h1" gutterBottom mt={5}>
              Educaction
            </Typography>
            <img src={EducationJpg} alt="profile" className="profilepic" />

            {EducactionData.map((item) => (
              <Container sx={{ pt: 5 }}>
                <Card className="School-card" mt={5}>
                  <CardContent p={5}>
                    <Grid container p={3}>
                      <Grid item key={item} xs={12} sm={6} md={6}>
                        <img
                          src={item.src}
                          alt="school"
                          className="SchoolImg"
                        />
                      </Grid>
                      <Grid xs={12} sm={6} md={6} mt={5}>
                        <Typography align="center">
                          {item.title} <br />
                          {item.contentss}
                        </Typography>
                        <Typography align="center">{item.time}</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Container>
            ))}
          </div>
        </Card>
      </Container>
      <Footer />
    </div>
  );
}
