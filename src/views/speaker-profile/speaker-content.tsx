import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import Button from "@/components/button";

const SpeakerContent = () => {
  return (
    <div id="speaker-content">
      {/* Speaker Header Section with Image */}
      <div className="relative">
        {/* Background section */}
        <div className="bg-midnight text-white w-screen py-10 mt-20">
          <Container>
            <div className="flex flex-col md:flex-row items-start relative">
              {/* Left side - Image positioned outside the background */}
              <div className="md:w-1/3 relative">
                {/* Image positioned with 25% above the background but below navbar */}
                <div className="w-80 h-80 rounded relative overflow-hidden md:absolute md:left-0 md:-top-2">
                  <Image 
                    src="/mc.jpg" 
                    alt="Dr. Marco  Veneziani" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="md:w-4/5 px-6 flex flex-col justify-start mt-5 md:mt-0 md:pl-1">
                <h2 className="text-3xl font-bold text-primary mb-4">Dr. Marco Veneziani</h2>
                <div className="bg-midnight mb-6 max-w-full">
                  <p className="mb-4 text-primary">Injection Moulding Technique: The &quot;Customised Hybid Index&quot; <br /> And Updated Clinical Procedures.</p>
                  <div className="bg-white text-black px-6 py-2 inline-block">
                    FRIDAY 30TH JANUARY TIME: 09:00 - 10:00
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        
        {/* Extra spacing to accommodate the image extending below */}
        <div className="hidden md:block h-16"></div>
      </div>

      <Container>
        {/* Session Summary */}
        <div className="py-8 mt-16">
          <h3 className="text-5xl mb-4">
            <span className="text-outline">Session</span>
            <span className="ml-2 text-midnight">Summary</span>
          </h3>
          <p className="text-base mb-6">
            Injection Moulding Technique is a powerful therapeutic option in the restorative field, aiming to improve the aesthetics and function of teeth. It is a repeatable and predictable technique, which requires a direct/indirect procedure to transform the digital tooth design and the wax-up (analog or digital) into a definitive composite restoration. The author has developed the technique in an innovative way with the help of a new index dedicated to the injection procedure and called 2025 n1. The technique requires the use of Voglzone and throughout the country and Customised Hybrid Index, published in the IJED flowable composites or thermoviscous composites and allows the restoration of the shape, surface and texture of the elements by replicating shapes defined in the laboratory through accurate waxing and tested with mock-ups before being injected.
            The technique is particularly indicated in aesthetic cases (e.g. diastemas, amelogenesis etc.), in multiple restorations of all some frontal elements up to full mouth adhesive rehabilitation, in the restoration of the function of the posterior elements, in the restoration of the vertical dimension, in the restoration of the occlusal plane, in the restoration of the anterior guidance. The technique is also indicated in the restoration of the function of the posterior elements, in the restoration of the vertical dimension, in the restoration of the occlusal plane, in the restoration of the anterior guidance. The technique is particularly indicated in aesthetic cases (e.g. diastemas, amelogenesis etc.), in multiple restorations of all some frontal elements up to full mouth adhesive rehabilitation.
            The evolution of the injection moulding technique has led to the development of the innovative customised hybrid index, which by closing back triangles and partially splitting together the elements with significant mobility. It is therefore clear that the fields of application are truly numerous and the technique, as described, constitutes has extraordinary therapeutic opportunity in an increasingly conservative and minimally invasive perspective.
          </p>
        </div>
      </Container>

      {/* Learning Aims & Objectives - Full Width Background */}
      <div className="py-8 bg-primary w-full">
        <Container>
          <h3 className="text-5xl mb-4">
            <span className="text-outline">Learning</span>
            <span className="ml-2 text-midnight">Aims & Objectives</span>
          </h3>
          <ul className="space-y-4 pl-6">
            <li>• Description of the operative sequences for the Injection Moulding technique</li>
            <li>• The monolithic one stage approach or the layered two stage approach: presentation of the cases to understand when to use each one.</li>
            <li>• The Innovative customised Hybrid Index: what it is and how to use it</li>
            <li>• The different updated clinical application: restorative, pre-and post-ortho, periodontal case, full mouth adhesive rehabilitations.</li>
          </ul>
          <div className="mt-6">
            <Button href="#booking">
              BOOK NOW
            </Button>
          </div>
        </Container>
      </div>

      <Container>
        {/* About The Speaker */}
        <div className="py-8 text-center">
          <h3 className="text-5xl mb-4">
            <span className="text-outline">About</span>
            <span className="ml-2 text-midnight">The Speaker</span>
          </h3>
          <p className="text-base mb-6 text-left">
            Born in Piacenza, Italy, on 19 Nov, class of 1964. Graduated in &quot;Dentistry and Dental Prosthesis at the University of Milan 1988 with 110 cum laude. Active member of the Accademia Italiana di Conservativa e Restaurativa (AIC) since 1996 Member of the Membership Acceptance Commission Active member of the Italian Academy of Esthetic Dentistry (IAED) since 2012 and member of the board of director. Active member of the International Academy for Digital Dental Medicine (IADDM) since 2015. Visiting Professor at the University of Pavia (Italy). He has held Master Courses of Restorative Dentistry at the University of Torino, Bologna, Milano (Humanitas University). Speaker on topics of Restorative Dentistry and Periodontology at several courses and congresses at national and international level. Author of conservative and prosthetic dentistry publications in national and international journals. Author of some chapter of the book Esthetic Restorative Dentistry by AIC, Quintessence Pub. 2021. Author of the innovative book entitled &quot;Solutions - Adhesive Restoration Techniques and Integrated Surgical Procedures&quot; Edra Ed. 2021 translated into seven languages. Finalist (3rd place) at the international AIOP-APS Excellence in Prosthodontics Award, 2015. Reviewer for the International Journal of Esthetic Dentistry. He holds several training and specialization courses with hands-on about restorative dentistry with a multidisciplinary approach, at his own educational center (MFV Communication) in Vigolzone and throughout the country and internationally. Private Practice in Vigolzone (PC, Italy) from 01.04.1989 with a multidisciplinary approach to dentistry.
          </p>
          <div className="mb-6">
            <Button href="#booking">
              BOOK NOW
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpeakerContent;