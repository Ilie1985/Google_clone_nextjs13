import React, { Fragment } from "react";

const WebSearchPage = async ({ searchParams }) => {
  const res = await fetch(
    ` https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  const data = await res.json();

  const results = data.items;
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
