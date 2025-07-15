import React from 'react';
import SectionHeader from '../Layout/SectionHeader';
import MainHeaderWrapper from '../Layout/MainHeaderWrapper';
import { FaUsers, FaLaptopCode, FaRegCalendarCheck, FaCircle, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './services.css';

// Import service images
import amplifyImage from '../assets/New/amplify-service.jpg';
import stageImage from '../assets/New/stage-service.jpg';
import studioImage from '../assets/New/studio-service.jpg';

const ServiceCard = ({ title, subtitle, description, services, idealFor, icon: Icon, iconColor, image }) => (
  <div className="service-card">
    <div className="service-image">
      <img src={image} alt={title} />
    </div>
    
    <div className="service-header">
      <div className="icon-wrapper" style={{ color: iconColor }}>
        <Icon />
      </div>
      <div className="service-title-area">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
    
    <p className="service-description">{description}</p>
    
    <div className="service-content">
      <div className="service-section">
        <div className="section-header">
          <FaCircle size={8} style={{ color: iconColor }} />
          <h4>Key Services:</h4>
        </div>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index}>
              <h5>{service.title}</h5>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="service-section">
        <div className="section-header">
          <FaCircle size={8} style={{ color: iconColor }} />
          <h4>Ideal For:</h4>
        </div>
        <ul className="ideal-list">
          {idealFor.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ServicesWithImages = () => {
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
      iconColor: '#eb5b63',
      image: amplifyImage
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
      iconColor: '#2c60f4',
      image: stageImage
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
      iconColor: '#07174C',
      image: studioImage
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
      
      <div className="services-section">
        <div className="container">
          <div className="section-title-container">
            <h2>Our Services</h2>
            <div className="title-line"></div>
          </div>
          
          <div className="services-grid">
            {Object.values(servicesData).map((service, index) => (
              <div key={index} className="service-item">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="get-in-touch-banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text">
              <h2>Ready to Start Your Project?</h2>
              <p>Let's discuss how Macber can help you achieve your business goals with tailored technology solutions.</p>
            </div>
            <div className="banner-action">
              <Link to="/contact-us" className="contact-btn">
                Get in Touch <FaArrowRight className="arrow-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesWithImages; 