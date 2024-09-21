"use client"; // Add this at the top of the file

import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import client from "../../apollo-client";
import { GET_HOME_PAGE } from "../../queries/homePageQuery";

const Header = () => {
  useEffect(() => {
    if (data != undefined) {
      console.log("data=> ", data);
    }
  }, []);

  const { loading, error, data } = useQuery(GET_HOME_PAGE, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <header className="top-area">
      <div className="header-area">
        <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="index.html">
                {data?.homePage?.title}
              </a>
            </div>

            <div
              className="collapse navbar-collapse menu-ui-design"
              id="navbar-menu"
            >
              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className=" smooth-menu active"></li>
                <li className=" smooth-menu">
                  <a href="#education">education</a>
                </li>
                <li className="smooth-menu">
                  <a href="#skills">skills</a>
                </li>
                <li className="smooth-menu">
                  <a href="#experience">experience</a>
                </li>
                <li className="smooth-menu">
                  <a href="#profiles">profile</a>
                </li>
                <li className="smooth-menu">
                  <a href="#portfolio">portfolio</a>
                </li>
                <li className="smooth-menu">
                  <a href="#clients">clients</a>
                </li>
                <li className="smooth-menu">
                  <a href="#contact">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="clearfix"></div>
    </header>
  );
};

export default Header;
