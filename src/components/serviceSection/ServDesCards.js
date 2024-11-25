import React from 'react';
import Card from "../../UI/Card";
import SectionTitle from "../../Layout/SectionTitle";
import ui from "../../assets/icons/UX_NEW.svg";
import web from "../../assets/icons/Web_Dev_new.svg";
function ServDesCards() {
  return (
    <>
      <div className="py-4">
        <SectionTitle sectTilte={"  Learn more about  our other services:"} />
        <div className="row pt-5">
          <div className="col-xl-4 my-2">
            <Card
              className="card-service p-5 wow animate__animated animate__fadeInUp"
              image={ui}
              title={"UX/UI Design"}
              titleStyle={"lightBlue3 bold-700 font-sm"}
              desc={
                "We help with web and mobile apps, marketing websites, landing pages and two-sided platforms."
              }
              descStyle={"opacity-50"}
              link={"Learn more"}
              linkStyle={"linkHover"}
              arrowColor={"#000"}
            />
          </div>
          <div className="col-xl-4 my-2">
            <Card
              className="card-service p-5 wow animate__animated animate__fadeInUp animate__delay-1s"
              image={web}
              title={"Web Design"}
              titleStyle={"lightBlue3 bold-700 font-sm"}
              desc={
                "We help with web and mobile apps, marketing websites, landing pages and two-sided platforms."
              }
              descStyle={"opacity-50"}
              link={"Learn more"}
              linkStyle={"linkHover"}
              arrowColor={"#000"}
            />
          </div>
          <div className="col-xl-4 my-2 empty_card">
            <a
              class="border-0 p-0 align-self-start linkHover btn op_7"
              href="/services/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  opacity="0.5"
                  d="M4.97058 11.4667C4.77167 11.4667 4.5809 11.5456 4.44025 11.6861C4.2996 11.8266 4.22058 12.0172 4.22058 12.2159C4.22058 12.4146 4.2996 12.6052 4.44025 12.7457C4.5809 12.8862 4.77167 12.9651 4.97058 12.9651L4.97058 11.4667ZM4.97058 12.9651L20.9706 12.9651L20.9706 11.4667L4.97058 11.4667L4.97058 12.9651Z"
                  fill="#000"
                ></path>
                <path
                  d="M14.9706 6.22238L20.9706 12.2159L14.9706 18.2095"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span class="">Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServDesCards
