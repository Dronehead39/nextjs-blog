import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import {useState }from "react";
import {motion} from "framer-motion"
import { Example } from "./Example.tsx"

export default function FirstPost() {
	const [count, setCount] = useState(0);

	return (
	  <Layout>
	    <Head>
	      <title>First Posts</title>
	    </Head>

		<h1>First Post</h1>
		<h2>
		  <Link href="/">
		    <a>Back to home</a>
		  </Link>
		</h2>


		<div className="example-container">
		  <Example key={count} />
		</div>


	{/*hooks example */}
		<div>
		  <p>You clicked {count} times</p>
		  <button onClick={() => setCount(count + 1)}>
		    Click me
		  </button>
		</div>

		{/*hooks ends*/}
	  </Layout>

	)
}