import { Carousel } from './Carousel';

export const Section2 = () => {
  return (
    <section className="container-md my-5 px-3" id="section-2">
      <div className="row my-lg-5 py-lg-5 my-3 py-3"></div>

      <div className="row gx-5">
        <div className="col col-12 col-lg-6 mb-5">
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis adipisci dolores laborum excepturi eum
            laudantium exercitationem. Blanditiis, mollitia eius excepturi laboriosam iusto illum voluptatum accusamus
            delectus veniam velit ipsam aliquid a placeat aperiam obcaecati earum vero nobis! Inventore illo sequi modi
            quod molestias! Ad tenetur placeat, perspiciatis optio nobis veritatis.
          </p>
          <button>More about us</button>
        </div>

        <div className="col col-12 col-lg-6">
          <Carousel />
        </div>
      </div>
      <div className="row my-lg-5 py-lg-5 my-3 py-3"></div>
    </section>
  );
};
