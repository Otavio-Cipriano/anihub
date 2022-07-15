import Head from "next/head";

export default function Layout({children}) {
  return (
    <div>
        <Head>
            <title>Anihub</title>
        </Head>
        {children}
    </div>
  )
}
