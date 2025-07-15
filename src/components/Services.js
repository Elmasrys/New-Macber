  import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTheaterMasks, FaCode, FaBullhorn, FaArrowRight, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './services.css';
import MainHeaderWrapper from '../Layout/MainHeaderWrapper';
import SectionHeader from '../Layout/SectionHeader';
import bg from '../assets/New/service-bg.jpg';
import Jarallax from './homeSections/Jarallax';

const ServiceCard = ({ title, subtitle, description, services, idealFor, icon: Icon, accentColor, imageUrl }) => {
  // Define icon colors based on service type
  const getIconColor = () => {
    if (accentColor === "#EB5B63") return "#EB5B63"; // Amplify
    if (accentColor === "#2C60F4") return "#2C60F4"; // Stage
    if (accentColor === "#07174C") return "#07174C"; // Studio
    return accentColor;
  };

  // Determine which service type this is based on accentColor
  const getServiceType = () => {
    if (accentColor === "#EB5B63") return "amplify";
    if (accentColor === "#2C60F4") return "stage";
    if (accentColor === "#07174C") return "studio";
    return "";
  };

  // Determine if we should reverse the layout (image right, text left)
  const isReversedLayout = getServiceType() === "stage"; // Second card (Stage) will have reversed layout
  
  // Image Column
  const ImageColumn = () => (
    <div className="col-md-4 mt-5">
      <div className="service-image-container">
        <div className="service-image">
          <img src={imageUrl} alt={title} />
          <div className="service-image-overlay">
            <div className="service-icon" style={{ backgroundColor: getIconColor() }}>
              <Icon size={36} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Content Column
  const ContentColumn = () => (
    <div className="col-md-8">
      <div className="p-4 p-md-5">
        <h3 className="mb-2 text-center" style={{ color: getIconColor(), fontWeight: '700', fontSize:'1.5rem' }}>{title}</h3>
        <p className="text-muted fst-italic mb-4 text-center" style={{ fontSize:'1rem' , color: '#6F797A'}}>{subtitle}</p>
        <p className="mb-4 text-center" style={{ color: '#6F797A', fontSize:'1rem'  }}>{description}</p>
        
        <div className="row">
          <div className="col-md-6">
            <div className="mb-4">
              <h5 className="h6 mb-3 fw-bold d-flex align-items-center" style={{ color: '#0D1F2D' }}>
                <span className="me-2" style={{ 
                  width: '3px', 
                  height: '18px', 
                  backgroundColor: getIconColor(), 
                  display: 'inline-block' 
                }}></span>
                Key Services
              </h5>
              <ul className="list-unstyled mb-0 service-list">
                {services.map((service, index) => (
                  <li key={index} className="mb-2 d-flex align-items-start">
                    <FaCheck className="me-2 flex-shrink-0 mt-1" style={{ color: getIconColor(), fontSize: '14px' }} />
                    <span style={{ color: '#555', fontSize: '14px' }}>{service.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="col-md-6">
            <div>
              <h5 className="h6 mb-3 fw-bold d-flex align-items-center" style={{ color: '#0D1F2D' }}>
                <span className="me-2" style={{ 
                  width: '3px', 
                  height: '18px', 
                  backgroundColor: getIconColor(), 
                  display: 'inline-block' 
                }}></span>
                Ideal For
              </h5>
              <ul className="list-unstyled mb-0">
                {idealFor.map((item, index) => (
                  <li key={index} className="mb-2 d-flex align-items-start">
                    <FaCheck className="me-2 flex-shrink-0 mt-1" style={{ color: getIconColor(), fontSize: '14px' }} />
                    <span style={{ color: '#555', fontSize: '14px' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="service-card rounded-4 overflow-hidden" 
      data-service={getServiceType()}
      style={{ 
        backgroundColor: '#FFFFFF',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}>
      <div className="row g-0">
        {/* Conditional rendering based on layout direction */}
        {!isReversedLayout ? (
          // Default layout: Image left, text right
          <>
            <ImageColumn />
            <ContentColumn />
          </>
        ) : (
          // Reversed layout: Text left, image right
          <>
            <ContentColumn />
            <ImageColumn />
          </>
        )}
      </div>
    </div>
  );
};


const Services = () => {
  const servicesData = {
    amplify: {
      title: "Macber Amplify",
      subtitle: "Agile Teams and Engineering Talent to Scale Product Delivery",
      description: "Amplify takes the headache out of technology talent acquisition with pre-vetted developers, designers, and product managers who can scale up your delivery capabilities immediately.",
      services: [
        {
          title: "Dedicated product development teams",
          description: "Fully managed teams of engineers, designers, and PMs."
        },
        {
          title: "Autonomous agile pods",
          description: "Self-contained teams with full delivery ownership."
        },
        {
          title: "Staff augmentation",
          description: "Engineering, DevOps, AI, and data specialists to fill specific skill gaps."
        },
        {
          title: "Embedded team integration",
          description: "Seamless integration into client environments for cohesive collaboration."
        },
        {
          title: "Sprint-based execution",
          description: "Agile delivery with continuous integration and deployment."
        },
        {
          title: "Long-term product evolution",
          description: "Sustained partnerships for ongoing product development and refinement."
        }
      ],
      idealFor: [
        "Startups building MVPs or scaling quickly",
        "Enterprises needing fast team expansion",
        "Product teams seeking delivery acceleration without added overhead"
      ],
      icon: FaBullhorn,
      iconColor: '#eb5b63'
    },
    stage: {
      title: "Macber Stage",
      subtitle: "Next-Gen Event Technology for Physical, Hybrid, and Virtual Experiences",
      description: "Stage delivers the technology backbone for unforgettable events—from custom registration platforms to immersive AR/VR experiences that captivate audiences.",
      services: [
        {
          title: "Custom-branded registration",
          description: "Registration and ticketing platforms tailored to your event needs."
        },
        {
          title: "Attendee management systems",
          description: "Comprehensive solutions for large-scale event management."
        },
        {
          title: "AR/VR-powered activations",
          description: "Immersive virtual booths and interactive experiences."
        },
        {
          title: "Gamified installations",
          description: "Experiential tech that creates memorable engagements."
        },
        {
          title: "Real-time dashboards",
          description: "Event operations and analytics for actionable insights."
        },
        {
          title: "On-site support systems",
          description: "Badge printing, check-in systems, and technical support."
        },
        {
          title: "Technical staffing",
          description: "Logistics coordination and on-the-ground technical expertise."
        }
      ],
      idealFor: [
        "Conferences, expos, and festivals",
        "Government and enterprise-scale events",
        "Creative agencies producing branded activations"
      ],
      icon: FaTheaterMasks,
      iconColor: '#2c60f4'
    },
    studio: {
      title: "Macber Studio",
      subtitle: "Custom Software, Automation, and Digital Product Development",
      description: "Macber Studio is your full-service product development partner. We design, engineer, and scale custom digital solutions—powered by automation, AI, and clean UX.",
      services: [
        {
          title: "Web, mobile, and enterprise software",
          description: "Comprehensive development for all platforms and business needs."
        },
        {
          title: "AI development and automation",
          description: "Intelligent solutions that optimize operations and decision-making."
        },
        {
          title: "SaaS platform engineering",
          description: "Modular, multi-tenant architecture for scalable cloud applications."
        },
        {
          title: "UX/UI design",
          description: "Intuitive digital product interfaces that enhance user satisfaction."
        },
        {
          title: "Backend systems and APIs",
          description: "Robust cloud deployment and infrastructure solutions."
        },
        {
          title: "MVP prototyping",
          description: "Rapid product iterations to validate concepts and gain market traction."
        }
      ],
      idealFor: [
        "Businesses undergoing digital transformation",
        "Product companies building AI-powered tools",
        "Organizations aiming to automate and optimize operations"
      ],
      icon: FaCode,
      iconColor: '#07174C'
    }
  };
  
  // Image URLs for the services
  const serviceImages = {
    amplify: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1411&q=80',
    studio: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  };

  return (
    <div className="overflow">
        <MainHeaderWrapper bg={bg} height="38rem" animate={true}>
                <SectionHeader
                  bg={bg}
                  titleName="w-70"
                  title={"Unlocking Digital Possibilities"}
                  classNameOne={"px_btn"}
                  callToActionOne={"TALK TO US"}
                  to={'/contact-us'}
                />
              </MainHeaderWrapper>
      <Container className="py-5">
       
        
        {/* Service Cards - One per row */}
        <Row className="mb-5">
          <Col lg={12} className="mb-4">
            <ServiceCard 
              {...servicesData.amplify} 
              accentColor="#EB5B63"
              imageUrl={serviceImages.amplify}
            />
          </Col>
          
          <Col lg={12} className="mb-4">
            <ServiceCard 
              {...servicesData.stage} 
              accentColor="#2C60F4"
              imageUrl={serviceImages.stage}
            />
          </Col>
          
          <Col lg={12}>
            <ServiceCard 
              {...servicesData.studio} 
              accentColor="#07174C"
              imageUrl={serviceImages.studio}
            />
          </Col>
        </Row>
        
    
      </Container>
      <div className="container-fluid p-0 m-0">
        <Row className="g-0">
          <Col lg={12}>
          <Jarallax />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Services;
