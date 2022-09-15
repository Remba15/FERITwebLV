import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Carousel } from "react-bootstrap";

const Home = () => {
  let carousel = document.querySelector('#carousel');
  
  return (
    <Carousel id="carousel"
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://firebasestorage.googleapis.com/v0/b/league-of-legends-list.appspot.com/o/1.jpg?alt=media&token=eb7040b0-f79c-46d2-b80b-7b83aee287c3"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>League of Legends Worlds Trophy</h3>
          <p>Fnatic was the team that won first Worlds Championship in 2011</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://firebasestorage.googleapis.com/v0/b/league-of-legends-list.appspot.com/o/2.jpg?alt=media&token=b7cc3030-9687-4fed-bbf7-067e39c78738"}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://firebasestorage.googleapis.com/v0/b/league-of-legends-list.appspot.com/o/3.jpg?alt=media&token=29b38910-1115-49c6-aec0-ac84cd03a31a"}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Dreamhack Summer 2011</h3>
          <p>
          8 teams from Europe, North America and Southeast Asia were competing for a prize pool of US$100,000
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://firebasestorage.googleapis.com/v0/b/league-of-legends-list.appspot.com/o/4.jpg?alt=media&token=37a74bde-0f41-4b80-aabf-b30676b95417"}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://firebasestorage.googleapis.com/v0/b/league-of-legends-list.appspot.com/o/5.jpg?alt=media&token=55ae0bbe-c6d1-4dec-996e-b8a8aae74c54"}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://firebasestorage.googleapis.com/v0/b/league-of-legends-list.appspot.com/o/6.jpg?alt=media&token=97a0a121-3a60-4c59-a079-0da5a22ae02a"}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
