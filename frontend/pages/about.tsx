import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Container from "@/components/Container";

const AboutPage = () => (
  <Layout title="About Us">
    <Container>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Container>
  </Layout>
);

export default AboutPage;
