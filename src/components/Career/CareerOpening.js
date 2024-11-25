import Paragraph from "../../UI/Paragraph";
import CarerHireMob from "../MobDesign/CarerHireMob";
import './Career.css';
import Experience from "./Experince";
const CarrerOpening = () =>{

    return (
      <>
        <section className="py-5 career backGround_light">
          <div className="container px-5">
            <div className="text-center mb-5">
              <Paragraph className="lightGrey5 mb-1">Come join us</Paragraph>
              <Paragraph className="font-normalize primaryBlue mb-1">
                Career Openings
              </Paragraph>
              <Paragraph className="lightGrey5">
                We're always looking for creative, talented self-starters to
                join Macber family.
                <br /> Check out our open roles below and fill out an
                application.
              </Paragraph>
            </div>
            <div class="row carer-deckop">
              <div className="col-xl-3 col-md-3 col-sm-12">
                <div
                  class="nav flex-column nav-pill  me-3 ex-btn"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    class=" text-capitalize nav-link bold-500 black active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Design
                  </button>
                  <button
                    class=" text-capitalize nav-link bold-500 black"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    development
                  </button>
                  <button
                    class=" text-capitalize nav-link bold-500 black"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    gaming
                  </button>
                  <button
                    class="text-capitalize nav-link bold-500 black"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    operation
                  </button>
                </div>
              </div>
              <div
                class="tab-content col-xl-8 col-md-8"
                id="v-pills-tabContent"
              >
                <div
                  class="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <Experience
                    title={"Senior front end "}
                    Experience={"Experience"}
                    Years={"2 Years"}
                    Deadline={"Deadline"}
                    date={"2024-01-15"}
                  />
                </div>
                <div
                  class="tab-pane fade row"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <Experience
                    title={"Javascript"}
                    Experience={"Experience"}
                    Years={"1 Years"}
                    Deadline={"Deadline"}
                    date={"2024-01-15"}
                  />
                </div>
                <div
                  class="tab-pane row fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <Experience
                    title={"Apps Developer"}
                    Experience={"Experience"}
                    Years={"3 Years"}
                    Deadline={"Deadline"}
                    date={"2024-01-15"}
                  />
                </div>
                <div
                  class="tab-pane fade row"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <Experience
                    title={"IOS Developer"}
                    Experience={"Experience"}
                    Years={"2 Years"}
                    Deadline={"Deadline"}
                    date={"2024-01-15"}
                  />
                </div>
                <div
                  class="tab-pane fade row"
                  id="v-pills-marketing"
                  role="tabpanel"
                  aria-labelledby="v-pills-marketing-tab"
                >
                  <Experience
                    title={"Node JS Developer"}
                    Experience={"Experience"}
                    Years={"3 Years"}
                    Deadline={"Deadline"}
                    date={"2024-01-15"}
                  />
                </div>
              </div>
            </div>
            <CarerHireMob/>
          </div>
        </section>
      </>
    );
}
export default CarrerOpening;