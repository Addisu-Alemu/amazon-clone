import React from "react";
import "./Home.css";
import wallpaper from "./wallpaper.jpg";
import Product from "./Product";
import speaker from "./Speaker.webp";
import theLeanStartUp from "./theLeanStartUp.jpg";
import Monitor from "./Monitor.jpg";
import mixer from "./mixer.jpg";
import phone from "./techno.jpg";
import spark from "./spark8c-mobile.png";
import Header from "./Header";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <img src={wallpaper} alt="background image" className="home__image" />
          <div className="home__row">
            <Product
              id="123450"
              image={theLeanStartUp}
              title="The Lean Startup: How Contstant Innovation Creates Radically Successfull Businesses Paperback"
              rating={5}
              price="87"
            />
            <Product
              id="123451"
              image={speaker}
              title="Honeywell Trueno U200 Wireless Bluetooth Speaker, 
            Upto 15 Hours Playtime, Voice Assistant Enabled, 
            IPX6 Rating with Premium Stereo Sound & Deep Bass (Olive Green)"
              rating={5}
              price="52"
            />
          </div>
          <div className="home__row">
            <Product
              id="123452"
              image={mixer}
              title="KitchenAid KSM150PSAQ Artisan Series 5-Qt. Stand Mixer with Pouring Shield - Aqua Sky"
              rating={5}
              price="29"
            />
            <Product
              id="123453"
              image={phone}
              title="Samsung Galaxy M32 Prime Edition (Light Blue, 6GB RAM, 128GB)k"
              rating={5}
              price="50"
            />
            <Product
              id="123454"
              image={spark}
              title="Tecno Spark 7P brings 90Hz display, 5,000mAh battery and Helio G70 chip"
              rating={5}
              price="100"
            />
          </div>
          <div className="home__row">
            <Product
              id="123455"
              image={Monitor}
              title="49 Odyssey Neo G9 240hz / 1ms / 5120 x 1440 / 1000R / G-Sync Compatible & 
            FreeSync Premium Pro / QLED / Infinity Core / HDR10+)"
              rating={5}
              price="200"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
