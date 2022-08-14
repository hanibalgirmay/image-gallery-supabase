import type { NextPage } from "next";
import Head from "next/head";
import CustomImage from "../components/Image";
import { createClient } from "@supabase/supabase-js";

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_SUPABASE_ROLE_KEY || "",
  );

  console.log(supabaseAdmin)
  const { data } = await supabaseAdmin.from("images").select("*").order("id");
    console.log(data);
  return {
    props: {
      images: data,
    },
  };
}

type Image = {
  id: number;
  name: string,
  username: string,
  imageSrc: string,
  href: string
}

const Home = ({ images }: { images: Image[] }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl font-bold">
          Gallery with supbase and Next.js{" "}
        </h1>

        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {images.map((image) => (
              <CustomImage key={image.id} image={image} />
            ))}
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Develop by Hanibal
        </a>
      </footer>
    </div>
  );
};

export default Home;
