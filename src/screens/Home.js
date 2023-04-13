import React from "react";
import p1 from "../asset/hero1.jpg";
import Layout from "../component/Layout";

const Home = () => {
  return (
    <Layout>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">This is Home Page</h1>
              <p className="main-hero-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                officiis tempora recusandae voluptate quam, nisi odio officiis
                tempora recusandae
              </p>
              <h3>Get early access for you</h3>
              <p className="main-hero-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                officiis tempora recusandae voluptate quam, nisi odio officiis
                tempora recusandae
              </p>
            </div>
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img src={p1} alt="heroimg" className="img-fluid" />
            </div>
          </div>
        </section>
      </header>
    </Layout>
  );
};

export default Home;
