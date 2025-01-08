import "@/styles/ResponsiveImages.module.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const categories = [
  {
    name: "Patio Lighting",
    icon: (
      <LightbulbIcon sx={{ color: "white", width: "35px", height: "35px" }} />
    ),
    color: "#0b9fd4",
  },
  {
    name: "Outdoor Cooking",
    icon: (
      <LunchDiningIcon sx={{ color: "white", width: "35px", height: "35px" }} />
    ),
    color: "#67bbef",
  },
  {
    name: "Patio Heating",
    icon: (
      <LocalFireDepartmentIcon
        sx={{ color: "white", width: "35px", height: "35px" }}
      />
    ),
    color: "#018de4",
  },
  {
    name: "Patio Shading",
    icon: (
      <BeachAccessIcon sx={{ color: "white", width: "35px", height: "35px" }} />
    ),
    color: "#03487a",
  },
  {
    name: "Patio Cooling",
    icon: <AcUnitIcon sx={{ color: "white", width: "35px", height: "35px" }} />,
    color: "#001838",
  },
];

const topHeaterBrands = [
  {
    imageName: "Infratech Heater Buying Guide",
    image: "/infratechheater.png",
    brandImage: "/infratech.png",
  },
  {
    imageName: "Bromic Heater Buying Guide",
    image: "/bromicheater.png",
    brandImage: "/bromic.png",
  },
  {
    imageName: "Innova Heater Buying Guide",
    image: "/innovaheater.png",
    brandImage: "/innova.png",
  },
];

const NewLinkContainer = styled(Box)(({ theme }) => ({
  maxWidth: "80%",
}));

const CustomTextDivider = styled(Divider)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  marginTop: "40px",
  marginBottom: "40px",
  "&::before, &::after": {
    borderTop: "3px solid #0b9fd4",
  },
}));

const FullWidthDivider = styled(Divider)({
  border: "1.5px solid #0b9fd4",
  marginBottom: "40px",
  marginTop: "40px",
});

const CategoryCard = styled("div")(({ theme }) => ({
  textAlign: "center",
  cursor: "pointer",
  marginTop: "10px",
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "5px",
  width: "160px",
  height: "123px",
  "&:hover": {
    color: "#1f3e60",
    textDecoration: "underline",
  },
}));

const CategoryIcon = styled("div")(({ bgColor }) => ({
  backgroundColor: bgColor,
  borderRadius: "50px",
  width: "95px",
  height: "95px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ImageNameContainer = styled("div")({
  border: "2px solid #018de4",
  height: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  wordWrap: "break-word",
  cursor: "pointer",
  "&:hover": {
    color: "#1f3e60",
    textDecoration: "underline",
  },
});

const ImageWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  width: "100%",
});

const StyledImage = styled("img")({
  width: "30%",
  height: "auto",
  maxWidth: "100%",
  objectFit: "contain",
});

const LightingImageWrapper = styled("div")({
  display: "grid",
  gap: "16px",
  gridTemplateColumns: "repeat(4, 1fr)",
  alignItems: "center",
  justifyItems: "center",
  "@media (max-width: 1000px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

const LightingStyledImage = styled("img")({
  width: "100%",
  maxWidth: "60%",
  height: "auto",
  objectFit: "contain",
  "@media (max-width: 1000px)": {
    maxWidth: "300px",
  },
});

const ImageTextStyle = styled("div")({
  fontWeight: 600,
  fontSize: "20px",
  color: "black",
  marginTop: "10px",
  marginBottom: "10px",
  display: "flex",
});

const LightingImageContainer = styled("div")({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

const ContentSection = () => {
  const ImageContainer = () => {
    return (
      <div className="image-container">
        {topHeaterBrands.map((brand, index) => (
          <div className="responsive-image ">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src={brand.image}
                alt={brand.imageName}
                style={{ width: "100%", height: "auto" }}
              />
              <ImageNameContainer>{brand.imageName}</ImageNameContainer>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <img src={brand.brandImage} alt={brand.imageName} />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Box sx={{ margin: "7%" }}>
      <div>
        <a
          href="https://www.patioheatandshade.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/newlink.png"
            alt="Logo"
            style={{ cursor: "pointer", maxWidth: "100%" }}
          />
        </a>
      </div>
      <CustomTextDivider>
        <Typography variant="h5" component="h2" textAlign="center" gutterBottom>
          What are you Shopping for Today?
        </Typography>
      </CustomTextDivider>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {categories.map((category) => (
          <CategoryCard elevation={0} key={category.name}>
            <CategoryIcon bgColor={category.color}>
              <div>{category.icon}</div>
            </CategoryIcon>
            <Typography variant="body1">{category.name}</Typography>
          </CategoryCard>
        ))}
      </div>
      <FullWidthDivider />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center ",
        }}
      >
        <img src={"/bringonheat.png"} style={{ maxWidth: "60%" }} />
      </div>
      <div>
        <ImageContainer />
      </div>
      <CustomTextDivider>
        <Typography variant="h5" component="h2" textAlign="center" gutterBottom>
          Gear up for Umbrella Season
        </Typography>
      </CustomTextDivider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <img src={"/umbrellasizeguide.png"} style={{ maxWidth: "100%" }} />
        <ImageWrapper>
          <StyledImage src="/simplyshade.png" alt="Simply Shade" />
          <StyledImage src="/bambrella.png" alt="Bambrella" />
          <StyledImage src="/galtech.png" alt="Galtech" />
        </ImageWrapper>
      </div>
      <CustomTextDivider>
        <Typography
          variant="h5"
          component="h2"
          textAlign="center"
          color="#0b9fd4"
          gutterBottom
          fontWeight={600}
        >
          Outdoor Patio Lighting
        </Typography>
      </CustomTextDivider>
      <LightingImageWrapper>
        <LightingImageContainer>
          <LightingStyledImage src="/pathlights.png" />
          <ImageTextStyle>
            Path Lights
            <span>
              <ArrowCircleRightIcon />
            </span>
          </ImageTextStyle>
        </LightingImageContainer>
        <LightingImageContainer>
          <LightingStyledImage src="/walllights.png" />
          <ImageTextStyle>
            Outdoor Wall Lights{" "}
            <span>
              <ArrowCircleRightIcon />
            </span>
          </ImageTextStyle>
        </LightingImageContainer>
        <LightingImageContainer>
          <LightingStyledImage src="/postlights.png" />
          <ImageTextStyle>
            Outdoor Post Lights{" "}
            <span>
              <ArrowCircleRightIcon />
            </span>
          </ImageTextStyle>
        </LightingImageContainer>
        <LightingImageContainer>
          <LightingStyledImage src="/ceilinglights.png" />
          <ImageTextStyle>
            Outdoor Ceiling Lights{" "}
            <span>
              <ArrowCircleRightIcon />
            </span>
          </ImageTextStyle>
        </LightingImageContainer>
      </LightingImageWrapper>
    </Box>
  );
};

export default ContentSection;
