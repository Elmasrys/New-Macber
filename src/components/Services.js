
import React from 'react';
import SectionHeader from '../Layout/SectionHeader';
import bg from '../assets/New/service-bg.jpg';
import MainHeaderWrapper from '../Layout/MainHeaderWrapper';
import './Services.css';
import { FaUsers, FaRocket, FaLaptopCode } from 'react-icons/fa';

const ServiceCard = ({ title, description, services, idealFor, icon: Icon }) => (
  <div className="service-card">
    <div className="service-icon">
      <Icon size={40} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="service-details">
      <h4>Key Services:</h4>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <h5>{service.title}</h5>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
      <h4>Ideal For:</h4>
      <ul className="ideal-for">
        {idealFor.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Services = () => {
  const servicesData = {
    amplify: {
      title: "Macber Amplify",
      description: "Agile Teams. Enterprise Delivery. Startup Agility.",
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
      icon: FaUsers
    },
    stage: {
      title: "Macber Stage",
      description: "Next-Gen Event Technology for Memorable Experiences",
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
      icon: FaRocket
    },
    studio: {
      title: "Macber Studio",
      description: "Intelligent Software, Tailored to You",
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
      icon: FaLaptopCode
    }
  };

  return (
    <>
      <div className="overflow">
        <MainHeaderWrapper bg={bg} height="38rem" animate={true}>
          <SectionHeader
            titleName="w-80"
            title="Strategic Technology Solutions Built for Scale"
            desc="At Macber, we don't just build software—we partner with you to create impact. Through our three specialized verticals, we offer comprehensive digital services that help you scale your business, optimize operations, and innovate faster."
            callToActionOne="Talk to us"
            classNameOne="px_btn"
            to="/contact-us"
          />
        </MainHeaderWrapper>
      </div>
      
      <div className="services-container">
        <div className="services-grid">
          {Object.values(servicesData).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="why-macber">
          <h2>Why Work With Macber?</h2>
          <div className="benefits">
            <div className="benefit">
              <h4>✅ Global-Quality Talent</h4>
              <p>Our teams combine engineering excellence with product thinking.</p>
            </div>
            <div className="benefit">
              <h4>✅ Modular Engagement Models</h4>
              <p>From full outsourcing to hybrid squads and on-site support.</p>
            </div>
            <div className="benefit">
              <h4>✅ Regionally Grounded, Globally Aligned</h4>
              <p>Deep experience across MENA with delivery hubs in the UK, Egypt, KSA, and UAE.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
