"use client"; // Add this at the top of the file

import client from "@/apollo-client";
import { GET_HOME_PAGE_BANNER } from "@/queries/homePageQuery";
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

const HeroBanner = () => {
  const { loading, error, data } = useQuery(GET_HOME_PAGE_BANNER, { client });

  const [first, setfirst] = useState<any>();

  console.log("data=>", data);

  useEffect(() => {
    if (data != undefined) {
      setfirst(data?.homePage?.bannerBlock[0]);
    }
  }, [data]);

  if (error) return <p>Error: {error.message}</p>;
  return (
    <section id="welcome-hero" className="welcome-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="header-text">
              <h2>
                hi <span>,</span> i am <br /> browny <br /> star <span>.</span>{" "}
              </h2>
              <p>{first?.subHeading}</p>
              <a href="assets/download/browney.txt" download>
                download resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
