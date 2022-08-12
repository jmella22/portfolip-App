import React, { useContext, useRef, useState } from "react";

//Next
import { useRouter } from "next/router";

//Other Library
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

//Material Ui
import {
  Avatar,
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

//Personal
import { HomeLayout } from "../components/layouts";
import { UiContext } from "../contexts";
import { SkillsList } from "../components/skills";
const SkillsPage = ({ menu, title, footer, skills }) => {
  return (
    <HomeLayout menu={menu} title={title} footer={footer}>
      <Box mt={10} sx={{ minHeight: "calc(100vh - 136px)" }}>
        <Typography
          textAlign={"center"}
          variant="h1"
          color={"secondary"}
          fontSize={"5vw"}
          mb={2}
        >
          {skills.title}
        </Typography>
        <SkillsList skills={skills} />
      </Box>
    </HomeLayout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const response = await import(`../languages/${locale}.json`); // your fetch function here

  return {
    props: {
      title: response.skills.titlePage,
      menu: response.menu,
      contact: response.contact,
      footer: response.footer,
      skills: response.skills,
    },
  };
};

export default SkillsPage;
