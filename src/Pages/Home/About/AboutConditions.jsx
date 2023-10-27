import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Box, Button, Typography } from "@mui/material";
import "./About.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AboutConditions = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  const [startIndex, setStartIndex] = useState(0);
  const [procedureIndex, setProcedureIndex] = useState(0);

  const images = [
    "images/hernia-icon.png",
    "images/piles.png",
    "images/gallstones.png",
    "images/gynaecomastia.png",
    "images/varicose-veins.png",
    "images/breast_abscess.png",
    "images/pregnancy.png",
    // Add more image paths here
  ];

  const names = [
    "Hernia",
    "Piles",
    "Gallstones",
    "Gynaecomastia",
    "Varicose Veins",
    "Breast Abscess",
    "Pregnancy",
    // Add more names here
  ];

  const images1 = [
    "images/angioplasty.png",
    "images/TKR.png",
    "images/IVF.png",
    "images/pacemaker-icon.png",
    "images/arthroscopy.png",
    "images/hysterectomy.png",
    "images/circumcision.png",
    // Add more image paths here
  ];

  const names1 = [
    "Angioplasty",
    "Knee Replacement",
    "IVF",
    "Pacemaker",
    "Arthroscopy",
    "Hysterectomy",
    "Circumcision",
    // Add more names here
  ];

  const displayImages = images.slice(startIndex, startIndex + 6);
  const displayNames = names.slice(startIndex, startIndex + 6);

  const handleNext = () => {
    if (startIndex + 6 < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleBack = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const displayImages1 = images1.slice(procedureIndex, procedureIndex + 6);
  const displayNames1 = names1.slice(procedureIndex, procedureIndex + 6);

  const handleNext1 = () => {
    if (procedureIndex + 6 < images.length) {
      setProcedureIndex(procedureIndex + 1);
    }
  };

  const handleBack1 = () => {
    if (procedureIndex - 1 >= 0) {
      setProcedureIndex(procedureIndex - 1);
    }
  };

  return (
    <section className="about-wrapper">
      <Box>
        <Row>
          <Col md={12} lg={12}>
            <div className="content">
              <div className="about-right mt-5 mt-lg-0">
                <div className="about-content text-start " data-aos="zoom-in">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "bold", p: 4 }}>
                      Conditions
                    </Typography>
                    <div className="arrow-buttons">
                      <Button onClick={handleBack}>
                        <ArrowBackIosIcon />
                      </Button>
                      <Button onClick={handleNext}>
                        <ArrowForwardIosIcon />
                      </Button>
                    </div>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: { xs: 0, sm: "0px 80px" },
                    }}
                  >
                    {displayImages.map((image, index) => (
                      <div key={index}>
                        <div className="img_background">
                          <img className="condition_img" src={image} alt="" />
                        </div>
                        <p className="text-center text-black my-2">
                          {displayNames[index]}
                        </p>
                      </div>
                    ))}
                  </Box>
                </div>
              </div>
            </div>

            <div className="line">
              <div className="about-right mt-5 mt-lg-0">
                <div className="about-content text-start " data-aos="zoom-in">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "bold", p: 4 }}>
                      Procedures
                    </Typography>
                    <div className="arrow-buttons">
                      <Button onClick={handleBack1}>
                        <ArrowBackIosIcon />
                      </Button>
                      <Button onClick={handleNext1}>
                        <ArrowForwardIosIcon />
                      </Button>
                    </div>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: "0px 80px",
                    }}
                  >
                    {displayImages1.map((image1, index) => (
                      <div key={index}>
                        <div className="img_background1">
                          <img className="procedure_img" src={image1} alt="" />
                        </div>
                        <p className="text-center text-black my-2">
                          {displayNames1[index]}
                        </p>
                      </div>
                    ))}
                  </Box>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Box>
    </section>
  );
};

export default AboutConditions;
