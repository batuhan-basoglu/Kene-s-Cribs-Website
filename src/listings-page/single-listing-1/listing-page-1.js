import React from "react";
import "./listing-page-1.css";
import { Link } from "react-router-dom";

// import house images
import house_img1 from "../../images/house3.jpg";
import house_img2 from "../../images/house1-2.jpg";
import house_img3 from "../../images/house1-3.jpg";
const ListingPage1 = () => {
  return (
    <div className="single-listing-1">
      {/* Listing header */}
      <div className="row listing-header">
        <div className="col-12">
          <h2 className="listing-title">
            <i class="fas fa-home title-icon"></i> 8720 Russell Road
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
        <span className="amentities-text">2</span>
        <i class="fas fa-bed fa-3x amentities-icon"></i>
        <span className="amentities-text">4</span>
        <i class="fas fa-bath fa-3x amentities-icon"></i>
      </div>

      {/* Description for the listing */}
      <div className="description-box">
        <h2 className="description-title">Description</h2>
        <p className="listing-description">
          RUN DON'T WALK to this beautiful former Jayman show home. This home
          has every feature and convenience you could want in a home. When you
          enter you will be greeted with a large entry way, open concept main
          floor with a very spacious chef-like kitchen, the big eat in dinning
          area is an entertainers dream and plenty of room in the living room as
          to cozy up to the fireplace. When you head upstairs the owner 's suite
          will impress with a gorgeous ensuite consisting of a large soaker tub,
          oversized shower, separate vanities, in-floor heating and 2 separate
          closest. You will also find a nice sized flex room, spacious laundry
          room up stairs, 4 piece main bathroom and 2 more bedrooms. Then head
          downstairs where you will find another bedroom, bathroom and Theatre
          room with wet bar and beverage station that is perfect for any movie
          lover. Must not forget that this home is air conditioned, has front
          and back irrigation outside and speakers throughout the house. All of
          this can be yours in the lake community of Auburn Bay close to all
          amenities and year round lake access just a short distance away
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

export default ListingPage1;
