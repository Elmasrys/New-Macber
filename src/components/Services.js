
import React from 'react';
import SectionHeader from '../Layout/SectionHeader';
import bg from '../assets/New/service-bg.jpg';
import MainHeaderWrapper from '../Layout/MainHeaderWrapper';
import { FaUsers, FaLaptopCode, FaRegCalendarCheck } from 'react-icons/fa';

const ServiceCard = ({ title, subtitle, description, services, idealFor, icon: Icon, iconColor }) => (
  <div className="card-service p-5">
    <div className="service-icon">
      <Icon size={40} color={iconColor} />
    </div>
    <h3 className="darkBlue bold-700 font-sm">{title}</h3>
    <h4 className="lightBlue3 bold-500">{subtitle}</h4>
    <p className="lightGrey5">{description}</p>
    <div className="service-details">
      <h4 className="darkBlue bold-500">Key Services:</h4>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <h5 className="lightBlue3 bold-500">{service.title}</h5>
            <p className="lightGrey5">{service.description}</p>
          </li>
        ))}
      </ul>
      <h4 className="darkBlue bold-500">Ideal For:</h4>
      <ul className="ideal-for">
        {idealFor.map((item, index) => (
          <li key={index} className="lightGrey5">{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Services = () => {
  const servicesData = {
    amplify: {
      title: "Macber Amplify",
      subtitle: "Agile Teams. Enterprise Delivery. Startup Agility.",
      description: "Macber Amplify provides dedicated development teams and specialized talent to extend your technical capacity. Whether you're launching a new product or scaling an existing one, we help you move faster—with flexibility and focus.",
      services: [
        {
          title: "Dedicated Development Teams",
          description: "End-to-end squads tailored to your product vision—engineers, designers, PMs, QA, and more."
        },
        {
          title: "Staff Augmentation",
          description: "Add high-performing developers, DevOps, or data experts to your existing teams."
        },
        {
          title: "Agile Pods",
          description: "Fully autonomous agile teams that take ownership of delivery and velocity."
        }
      ],
      idealFor: [
        "Startups building MVPs or scaling",
        "Enterprises needing rapid team expansion",
        "Product teams that need delivery muscle without overhead"
      ],
      icon: FaUsers,
      iconColor: '#eb5b63'
    },
    stage: {
      title: "Macber Stage",
      subtitle: "Next-Gen Event Technology for Memorable Experiences",
      description: "Macber Stage helps organizers digitize, streamline, and elevate their events—whether physical, virtual, or hybrid. Our robust infrastructure and experiential tech turn events into seamless, engaging experiences.",
      services: [
        {
          title: "Event Registration Platform",
          description: "Custom-branded registration, ticketing, and attendee management built for scale."
        },
        {
          title: "Event Operations & Support",
          description: "Real-time dashboards, badge printing, on-site support, and tech staffing for reliable execution."
        },
        {
          title: "AR/VR & Experiential Tech",
          description: "Immersive installations, virtual booths, and gamified experiences that create lasting impressions."
        }
      ],
      idealFor: [
        "Conferences, expos, and festivals",
        "Government and enterprise events",
        "Agencies producing branded experiences"
      ],
      icon: FaRegCalendarCheck,
      iconColor: '#2c60f4'
    },
    studio: {
      title: "Macber Studio",
      subtitle: "Intelligent Software, Tailored to You",
      description: "Macber Studio is your full-service product development partner. We design, engineer, and scale custom digital solutions—powered by automation, AI, and clean UX.",
      services: [
        {
          title: "AI Development & Automation",
          description: "Build intelligent systems that reduce manual work and optimize decision-making."
        },
        {
          title: "Custom Software Development",
          description: "Web, mobile, and enterprise-grade platforms—from architecture to deployment."
        },
        {
          title: "SaaS Platform Engineering",
          description: "Design and scale cloud-native SaaS products with modular architecture and multi-tenant support."
        },
        {
          title: "UI/UX Design",
          description: "Beautiful, intuitive interfaces that improve user satisfaction and engagement."
        }
      ],
      idealFor: [
        "Businesses undergoing digital transformation",
        "Product companies building AI-powered tools",
        "Organizations seeking to streamline operations through automation"
      ],
      icon: FaLaptopCode,
      iconColor: '#07174C'
    }
  };

  return (
    <>
      <div className="overflow">
        <MainHeaderWrapper bg={bg} height="45rem" animate={true}>
          <SectionHeader
            titleName="w-80"
            title="Strategic Technology Solutions Built for Scale"
            desc="At Macber, we don't just build software—we partner with you to create impact. Through our three specialized verticals, we offer comprehensive digital services that help you scale your business, optimize operations, and innovate faster."
            callToActionOne="Talk to us"
            classNameOne="px_btn animate__animated animate__fadeInUp"
            to="/contact-us"
          />
        </MainHeaderWrapper>
      </div>
      
      <div className="container py_5">
        <div className="row g-4">
          {Object.values(servicesData).map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="why-macber mt-5 py-5 backGround_light rounded">
          <h2 className="darkBlue bold-700 mb-4">Why Work With Macber?</h2>
          <div className="row g-4 px-4">
            <div className="col-md-4">
              <div className="benefit">
                <h4 className="lightBlue3 bold-600">✅ Global-Quality Talent</h4>
                <p className="lightGrey5">Our teams combine engineering excellence with product thinking.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefit">
                <h4 className="lightBlue3 bold-600">✅ Modular Engagement Models</h4>
                <p className="lightGrey5">From full outsourcing to hybrid squads and on-site support.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="benefit">
                <h4 className="lightBlue3 bold-600">✅ Regionally Grounded, Globally Aligned</h4>
                <p className="lightGrey5">Deep experience across MENA with delivery hubs in the UK, Egypt, KSA, and UAE.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
