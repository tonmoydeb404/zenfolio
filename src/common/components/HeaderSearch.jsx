import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "react-daisyui";
import { BiSearch, BiX } from "react-icons/bi";

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
      path = `${basePath}?q=${value}`;
    } else {
      path = basePath;
    }

    // push this route
    router.push(path, String, { shallow: true });

    // update state
    setQuery(value);
  };

  return (
    <form
      className={`input-group relative ${className}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="Search here…"
        className="input bg-secondary flex-1 pl-10 focus:outline-none"
        name="query"
        onChange={(e) => handleChange(e.target.value)}
        value={query}
      />
      {query && query.length && (
        <Button type="button" shape="square" onClick={() => handleChange("")}>
          <BiX className="icon" />
        </Button>
      )}
      <BiSearch className="absolute top-2/4 left-3 -translate-y-2/4" />
    </form>
  );
};

export default HeaderSearch;