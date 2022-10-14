import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "react-daisyui";

const HeaderSearch = ({ className = "", basePath = "" }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  // update query state
  useEffect(() => {
    if (router.query?.q) {
      setQuery(router.query?.q);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query?.q]);

  const handleChange = (value) => {
    let path = "";

    // define the path
    if (value && typeof value == "string" && value.length) {
      path = `/${basePath}?q=${value}`;
    } else {
      path = basePath;
    }

    // push this route
    router.push(path, String, { shallow: true });

    // update state
    setQuery(value);
  };

  return (
    <form className={`input-group relative ${className}`}>
      <input
        type="text"
        placeholder="Search here…"
        className="input bg-slate-800 flex-1 pl-10 focus:outline-none"
        name="query"
        onChange={(e) => handleChange(e.target.value)}
        value={query}
      />
      {query && query.length && (
        <Button shape="square" onClick={() => handleChange("")}>
          <i className="bx bx-x icon"></i>
        </Button>
      )}
      <i className="bx bx-search absolute top-2/4 left-3 -translate-y-2/4"></i>
    </form>
  );
};

export default HeaderSearch;
