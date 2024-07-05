
import SearchBar from "../../components/SearchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Your Perfect Home Today</h1>
          <p>
            Welcome to Nest, the ultimate destination for all your real estate
            needs. Whether you're looking to buy your dream home or rent a cozy
            apartment, we offer a seamless experience tailored to your
            preferences. Explore our extensive listings, connect with trusted
            agents, and discover the perfect place to call home. Start your
            journey with us and unlock the door to your future.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
