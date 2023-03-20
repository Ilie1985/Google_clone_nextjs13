import React, { Fragment } from "react";
import Link from "next/link";

const WebSearchPage = async ({ searchParams }) => {
  const res = await fetch(
    ` https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  const data = await res.json();
 
  const results = data.items;

  if (!results) {
    return <div className="flex flex-col justify-center items-center pt-10  ">
       <h1 className="text-3xl mb-4">No results for this search</h1>
       <p className="text-lg">Try search something else or go back to home page</p>
       <Link href="/" className="text-blue-500">
       Home
       </Link>
    </div>
  }
  return (
    <Fragment>
      {results &&
        results.map((result) => {
          return <h1 key={result.id}>{result.title}</h1>;
        })}
    </Fragment>
  );
};

export default WebSearchPage;
