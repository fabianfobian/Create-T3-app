import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Layout from "../components/Layout";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 text-4xl font-bold">
          Welcome to Your E-Commerce Store
        </h1>
        <p>Browse our products and enjoy shopping!</p>
      </div>
    </Layout>
  );
};

export default Home;
