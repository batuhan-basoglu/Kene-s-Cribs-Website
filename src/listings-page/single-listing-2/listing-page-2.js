import React from "react";
import "./listing-page-2.css";
import { Link } from "react-router-dom";

// import house images
import house_img1 from "../../images/house2.jpg";
import house_img2 from "../../images/house2-2.jpg";
import house_img3 from "../../images/house2-3.jpg";
const ListingPage2 = () => {
  return (
    <div className="single-listing-2">
      {/* Listing header */}
      <div className="row listing-header">
        <div className="col-12">
          <h2 className="listing-title">
            <i class="fas fa-home title-icon"></i> 1490 Youville Drive
          </h2>
        </div>
      </div>

      {/* Carousel for images of the listings */}
      <div className="listing-carousel">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active carousel-img">
              <img
                src={house_img1}
                class="d-block w-100"
                alt="listing-img"
              ></img>
            </div>
            <div class="carousel-item carousel-img">
              <img
                src={house_img2}
                class="d-block w-100"
                alt="listing-img"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                src={house_img3}
                class="d-block w-100"
                alt="listing-img"
              ></img>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/* Text box for listing amenities */}
      <div className="amentities">
        <span className="amentities-text">1</span>
        <i class="fas fa-bed fa-3x amentities-icon"></i>
        <span className="amentities-text">1</span>
        <i class="fas fa-bath fa-3x amentities-icon"></i>
      </div>

      {/* Description for the listing */}
      <div className="description-box">
        <h2 className="description-title">Description</h2>
        <p className="listing-description">
          Nature at its Finest The Shores of Toney Bay are located at the mouth
          of River Phillip where it meets the Northumberland Straight with
          direct access to the incredible recreational waterways of River
          Phillip and nature rich Toney Bay. This nature lovers paradise boasts
          a plethora of migratory bird life and the rich fish stock of River
          Philip. The warm waters of the Northumberland Straight are swimmable
          from your shorefront, easy access to year-around activities and close
          proximity to the quaint community of Pugwash make this an ideal spot
          for a permeant residence or cottage. There are also ocean view /
          deeded access lots available. Large lots with unobstructed views and
          well away from highway noise. Swim in the warm waters at beautiful
          Heather's Beach just 4km away, fly fishing in the spring on River
          Phillip, book at tee time at Northumberland links, 16km away or enjoy
          a day at the Luxury Fox Harb'r Resort and Spa less then 30 mins away,
          and in winter enjoy skiing at Ski Wentworth a short 30 minutes drive.
          Lots are flat, cleared and ready for your dream home. All septic and
          building lot approvals are in place, good roads, and power to the lot
          line are included. Please take a few minutes to watch the video of the
          stunning Shores at Toney Bay
        </p>
        <div className="booking-btn">
          <Link to="/contact-us">
            <button type="button" class="btn btn-lg btn-info">
              Book Showing
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// sources for the images used
//images.adsttc.com/media/images/524c/2511/e8e4/4e67/bf00/03c3/large_jpg/Tetris_House_03.jpg?1380721927

//House description
// ->Link 1 -https://www.realtor.ca/real-estate/23018057/9811-elbow-drive-calgary-haysboro
// images
// 1 ->house1.jpg
// 2 ->//images.adsttc.com/media/images/524c/2511/e8e4/4e67/bf00/03c3/large_jpg/Tetris_House_03.jpg?1380721927
// 3 ->https://s3.amazonaws.com/on1-wp/wp-content/uploads/2018/08/3191-NW-Jenna-22-of-49v2-1024x683.jpg
//-> Link2 -> https://www.realtor.ca/real-estate/23020015/lot-14-67-seastone-drive-port-howe-port-howe
// 1 ->house2.jpg
// 2 ->https://static.photocdn.pt/images/articles/2019/12/24/How_to_Take_Gorgeous_Interior_Real_Estate_Photos.jpg
// 3 ->https://i.pinimg.com/originals/f3/72/87/f372870f4f99d3278193a3970aa394ce.jpg
//->Link3 -> https://www.realtor.ca/real-estate/23020040/1035-butler-boulevard-petawawa-laurentian-highlands
// 1 ->house3.jpg
// 2 ->https://miro.medium.com/max/1200/1*EyGqOwy0wQwKHUgi3xpQZA.png
// 3 ->https://i.pinimg.com/originals/9b/fe/76/9bfe76b23f7ed9dcb35f7553b8255f48.jpg
//->Link4 -> https://www.realtor.ca/real-estate/23020103/62-riddle-court-north-bay
// 1 ->house4.jpg
// 2 ->https://pictureitsoldfl.com/wp-content/uploads/2016/07/305-Rudder-Cay-Way-Jupiter-FL-print-014-28-Family-Room-4200x2800-300dpi-1170x780.jpg
// 3 ->https://www.tlcinteriors.com.au/wp-content/uploads/2018/06/hamptons-style-kitchen-from-metricon-bayville-display-home.jpg

export default ListingPage2;
