import type { NextPage } from "next";

import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="d-flex justify-content-center align-items-center">
      <Link href="/product/1">
        <a>Product 1</a>
      </Link>
    </main>
  );
};

export default Home;
