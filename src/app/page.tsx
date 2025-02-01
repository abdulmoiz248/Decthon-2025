'use client'
import { useEffect } from 'react';
import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/Contact";
import Hero from "@/components/Hero";
import OfferSection from "@/components/Offer";
import Pricing from "@/components/Pricing";
import { ReviewSection } from "@/components/ReviewSection";
import ClientSatisfaction from "@/components/SatisfiedClients";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in');
    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Hero />
      <div className="fade-in bg-black">
        <AboutUs />
      </div>
      <div className="fade-in">
        <OfferSection />
      </div>
      <div className="fade-in bg-black">
        <ClientSatisfaction />
      </div>
      <div className="fade-in">
        <ReviewSection />
      </div>
      <div className="fade-in bg-black">
        <Pricing />
      </div>
      <div className="fade-in">
        <ContactForm />
      </div>
    </>
  );
}
