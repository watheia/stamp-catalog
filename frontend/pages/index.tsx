import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Container from "@/components/Container";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Container>
      <h2>Hello Next.js 👋</h2>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Container>
  </Layout>
);

export default IndexPage;
