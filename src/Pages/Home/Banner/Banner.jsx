import "@fontsource/josefin-sans";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="">
      <div className="container-fluid p-0">
        <div
          id="carouselExampleInterval"
          class="carousel slide image-container"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner ">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="images/img-8.jpg" className="d-block w-100" alt="..." />
              <div className="img-content">
                <p className="banner-h1">
                  Complete Care, Complete Health
                  <br /> Go Health!
                </p>
                <p className="banner-h6">
                  We're here to help you access the finest post-surgery
                  <br /> care to promote a swift and smooth recovery.
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="images/img-4.jpg" className="d-block w-100" alt="..." />
              <div className="img-content">
                <p className="banner-h1">
                  Complete Care, Complete Health - Go Health!
                </p>
                <p className="banner-h6">
                  We ensure you pick the right doctor and hospital to receive
                  the best possible treatment.
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src="images/img-5.jpg" className="d-block w-100" alt="..." />
              <div className="img-content">
                <p className="banner-h1">
                  Complete Care, Complete Health - Go Health!
                </p>
                <p className="banner-h6">
                  We're focused on delivering top-tier post-operative care to
                  accelerate your healing.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
