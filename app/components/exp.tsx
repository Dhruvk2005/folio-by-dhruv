'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Data structure
interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  highlights: string[];
  techStack: string[];
  color: string;
  certificateUrl?: string; // Optional certificate URL
}

const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "IndoriCoders",
    role: "Full Stack Developer Intern",
    duration: "May 2025 - Oct 2025",
    highlights: [
      "Worked on two production-level web applications: Joincroose.com and Ordiio.com",
      "Contributed to end-to-end development from UI design to backend integration",
      "Built responsive and reusable UI components ensuring cross-device compatibility",
      "Integrated and consumed REST APIs for dynamic data handling and real-time updates",
      "Collaborated with designers and developers to convert Figma designs into functional features",
      "Improved overall user experience through performance optimizations and clean code practices"
    ],
    techStack: ["TypeScript", "JavaScript", "MERN Stack", "Tailwind CSS", "Next.js"],
    color: "#4285F4",
    certificateUrl: "/certificates/indoricoders.pdf" // Add your certificate path
  },
  {
    id: "exp-2",
    company: "TechnoBren Infotech PVT LTD",
    role: "Frontend Developer Intern",
    duration: "Jan 2025 - Apr 2025",
    highlights: [
      "Received structured training in modern frontend development using React and Next.js",
      "Developed responsive and interactive user interfaces following industry best practices",
      "Converted UI designs into reusable React components with clean and maintainable code",
      "Worked on real-world frontend tasks including layouts, forms, and component integration",
      "Improved UI consistency and usability using Tailwind CSS utility-based styling",
      "Collaborated with mentors to understand performance optimization and component architecture"
    ],
    techStack: ["React", "Next.js", "HTML", "Tailwind CSS", "JavaScript"],
    color: "#635BFF",
    certificateUrl: "/certificates/technobren.pdf" // Add your certificate path
  }
];

// Certificate Modal Component
interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl: string;
  companyName: string;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, certificateUrl, companyName }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backdropFilter: 'blur(10px)'
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#1a1a1a',
          borderRadius: '16px',
          maxWidth: '95vw',
          maxHeight: '95vh',
          width: '900px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{
            margin: 0,
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            fontWeight: 600,
            color: '#e0e0e0'
          }}>
            {companyName} - Certificate
          </h3>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#ffffff',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Certificate Content */}
        <div style={{
          flex: 1,
          overflow: 'auto',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a'
        }}>
          <iframe
            src={certificateUrl}
            style={{
              width: '100%',
              height: '100%',
              minHeight: '500px',
              border: 'none',
              borderRadius: '8px'
            }}
            title={`${companyName} Certificate`}
          />
        </div>

        {/* Footer */}
        <div style={{
          padding: '16px 24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px'
        }}>
          
            href={certificateUrl}
            download
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
              transition: 'all 0.2s',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            Download
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Page Component
interface PageProps {
  experience: Experience;
  pageNumber: number;
  isFlipping: boolean;
  side: 'front' | 'back';
  onViewCertificate: () => void;
}

const Page: React.FC<PageProps> = ({ experience, pageNumber, isFlipping, side, onViewCertificate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + custom * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    })
  };

  if (side === 'back') {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        padding: 'clamp(40px, 8vw, 60px) clamp(24px, 5vw, 50px)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: 'linear-gradient(180deg, #1f1f1f 0%, #1a1a1a 100%)'
      }}>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '24px',
          fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
          color: '#666666',
          fontWeight: 600
        }}>{pageNumber}</div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isFlipping ? "hidden" : "visible"}
      style={{
        width: '100%',
        height: '100%',
        padding: 'clamp(30px, 6vw, 60px) clamp(20px, 4vw, 50px)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflowY: 'auto'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'clamp(3px, 0.5vw, 4px)',
        height: '100%',
        backgroundColor: experience.color,
        opacity: 0.6
      }} />

      <motion.h1 
        variants={itemVariants}
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 3rem)',
          fontWeight: 800,
          margin: '0 0 8px 0',
          lineHeight: 1.2,
          letterSpacing: '-0.03em',
          color: experience.color
        }}
      >
        {experience.company}
      </motion.h2>

      <motion.h2 
        variants={itemVariants}
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.4rem)',
          fontWeight: 600,
          color: '#e0e0e0',
          margin: '0 0 6px 0',
          lineHeight: 1.3
        }}
      >
        {experience.role}
      </motion.h2>

      <motion.p 
        variants={itemVariants}
        style={{
          fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
          color: '#999999',
          margin: '0 0 20px 0',
          fontWeight: 500,
          letterSpacing: '0.02em'
        }}
      >
        {experience.duration}
      </motion.p>

      {/* Certificate Button */}
      {experience.certificateUrl && (
        <motion.button
          variants={itemVariants}
          onClick={onViewCertificate}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{
            padding: 'clamp(8px, 1.5vw, 12px) clamp(16px, 3vw, 24px)',
            marginBottom: '24px',
            borderRadius: '8px',
            border: `2px solid ${experience.color}`,
            background: `${experience.color}15`,
            color: experience.color,
            fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            alignSelf: 'flex-start',
            transition: 'all 0.2s'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          View Certificate
        </motion.button>
      )}

      <motion.div variants={itemVariants} style={{ marginBottom: 'clamp(20px, 4vw, 30px)' }}>
        <h3 style={{
          fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)',
          fontWeight: 700,
          color: '#b0b0b0',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          margin: '0 0 12px 0'
        }}>Key Achievements</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {experience.highlights.map((highlight, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: 'clamp(10px, 2vw, 14px)',
                fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)',
                lineHeight: 1.6,
                color: '#d0d0d0'
              }}
            >
              <span style={{
                display: 'inline-block',
                width: 'clamp(5px, 1vw, 6px)',
                height: 'clamp(5px, 1vw, 6px)',
                borderRadius: '50%',
                backgroundColor: experience.color,
                marginRight: 'clamp(8px, 1.5vw, 12px)',
                marginTop: 'clamp(6px, 1.2vw, 8px)',
                flexShrink: 0
              }} />
              {highlight}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div variants={itemVariants} style={{ marginTop: 'auto' }}>
        <h3 style={{
          fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)',
          fontWeight: 700,
          color: '#b0b0b0',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          margin: '0 0 12px 0'
        }}>Technologies</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(6px, 1vw, 8px)' }}>
          {experience.techStack.map((tech, index) => (
            <motion.span
              key={tech}
              variants={chipVariants}
              custom={index}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 4px 12px ${experience.color}40`
              }}
              style={{
                display: 'inline-block',
                padding: 'clamp(4px, 1vw, 6px) clamp(10px, 2vw, 14px)',
                fontSize: 'clamp(0.7rem, 1vw, 0.85rem)',
                fontWeight: 600,
                border: `2px solid ${experience.color}`,
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#e0e0e0',
                cursor: 'default'
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '24px',
        fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
        color: '#666666',
        fontWeight: 600
      }}>{pageNumber}</div>
    </motion.div>
  );
};

// Main Book Component
export default function Book() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward'>('forward');
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<{ url: string; company: string } | null>(null);

  const totalPages = experiences.length;

  const flipPage = (direction: 'forward' | 'backward') => {
    if (isFlipping) return;

    setIsFlipping(true);
    setFlipDirection(direction);

    setTimeout(() => {
      if (direction === 'forward' && currentPage < totalPages - 1) {
        setCurrentPage(prev => prev + 1);
      } else if (direction === 'backward' && currentPage > 0) {
        setCurrentPage(prev => prev - 1);
      }
    }, 300);

    setTimeout(() => {
      setIsFlipping(false);
    }, 600);
  };

  const handleViewCertificate = (experience: Experience) => {
    if (experience.certificateUrl) {
      setSelectedCertificate({
        url: experience.certificateUrl,
        company: experience.company
      });
      setShowCertificate(true);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (showCertificate) return;
      if (e.key === 'ArrowRight') flipPage('forward');
      if (e.key === 'ArrowLeft') flipPage('backward');
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage, isFlipping, showCertificate]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        flipPage('forward');
      } else {
        flipPage('backward');
      }
    }

    setTouchStart(null);
  };

  const currentExperience = experiences[currentPage];
  const pageNumber = currentPage + 1;

  return (
    <>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(20px, 4vw, 40px) clamp(12px, 2vw, 20px)',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: 'clamp(24px, 4vw, 40px)',
            textAlign: 'center',
            letterSpacing: '-0.02em',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            padding: '0 12px'
          }}
        >
          Internship Journey
        </motion.h1>

        <div 
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'relative',
            width: 'min(900px, 95vw)',
            height: 'clamp(400px, 70vh, 600px)',
            display: 'flex',
            perspective: '2000px',
            marginBottom: 'clamp(20px, 3vw, 30px)'
          }}
        >
          {/* Left page */}
          <div style={{
            flex: 1,
            position: 'relative',
            background: 'linear-gradient(180deg, #2a2a2a 0%, #1f1f1f 100%)',
            boxShadow: '0 0 40px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.02)',
            borderRadius: 'clamp(6px, 1vw, 8px) 0 0 clamp(6px, 1vw, 8px)',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {currentPage > 0 ? (
              <Page
                experience={experiences[currentPage - 1]}
                pageNumber={currentPage}
                isFlipping={false}
                side="back"
                onViewCertificate={() => handleViewCertificate(experiences[currentPage - 1])}
              />
            ) : (
              <div style={{
                background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
                color: 'white',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '20px'
              }}>
                <div>
                  <h2 style={{ 
                    fontSize: 'clamp(1.2rem, 3vw, 2.5rem)', 
                    fontWeight: 300, 
                    margin: '10px 0', 
                    letterSpacing: '0.1em', 
                    textTransform: 'uppercase' 
                  }}>My</h2>
                  <h1 style={{ 
                    fontSize: 'clamp(2rem, 6vw, 5rem)', 
                    fontWeight: 900, 
                    margin: '10px 0', 
                    letterSpacing: '-0.04em', 
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' 
                  }}>Internship</h1>
                  <h2 style={{ 
                    fontSize: 'clamp(1.2rem, 3vw, 2.5rem)', 
                    fontWeight: 300, 
                    margin: '10px 0', 
                    letterSpacing: '0.1em', 
                    textTransform: 'uppercase' 
                  }}>Experiences</h2>
                  <p style={{ 
                    marginTop: 'clamp(20px, 3vw, 30px)', 
                    fontSize: 'clamp(0.85rem, 1.5vw, 1.2rem)', 
                    opacity: 0.7, 
                    fontWeight: 400 
                  }}>A journey through {totalPages} incredible opportunities</p>
                </div>
              </div>
            )}
          </div>

          {/* Center spine */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 'clamp(16px, 2.5vw, 20px)',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.5) 100%)',
            zIndex: 10,
            pointerEvents: 'none'
          }} />

          {/* Right page with flip */}
          <div style={{
            flex: 1,
            position: 'relative',
            background: 'linear-gradient(180deg, #2a2a2a 0%, #1f1f1f 100%)',
            boxShadow: '0 0 40px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.02)',
            borderRadius: '0 clamp(6px, 1vw, 8px) clamp(6px, 1vw, 8px) 0',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            transformStyle: 'preserve-3d',
            overflow: 'hidden'
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={false}
                animate={{
                  rotateY: isFlipping ? (flipDirection === 'forward' ? -180 : 180) : 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transformOrigin: flipDirection === 'forward' ? 'left center' : 'right center',
                }}
              >
                {/* Front face */}
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  background: 'linear-gradient(180deg, #2a2a2a 0%, #1f1f1f 100%)',
                  transform: 'rotateY(0deg)'
                }}>
                  <Page
                    experience={currentExperience}
                    pageNumber={pageNumber}
                    isFlipping={isFlipping}
                    side="front"
                    onViewCertificate={() => handleViewCertificate(currentExperience)}
                  />
                </div>

                {/* Back face */}
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  background: 'linear-gradient(180deg, #2a2a2a 0%, #1f1f1f 100%)',
                  transform: 'rotateY(180deg)'
                }}>
                  {currentPage < totalPages - 1 ? (
                    <Page
                      experience={experiences[currentPage + 1]}
                      pageNumber={pageNumber + 1}
                      isFlipping={true}
                      side="front"
                      onViewCertificate={() => handleViewCertificate(experiences[currentPage + 1])}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: '20px'
                    }}>
                      <h2 style={{ 
                        fontSize: 'clamp(1.5rem, 4vw, 3rem)', 
                        fontWeight: 700, 
                        color: '#e0e0e0', 
                        marginBottom: '12px' 
                      }}>The End</h2>
                      <p style={{ 
                        fontSize: 'clamp(0.9rem, 2vw, 1.3rem)', 
                        color: '#999999' 
                      }}>Thank you for reading my journey</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 'clamp(16px, 3vw, 24px)', 
          marginBottom: 'clamp(16px, 2vw, 20px)' 
        }}>
          <motion.button
            onClick={() => flipPage('backward')}
            disabled={currentPage === 0 || isFlipping}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 'clamp(40px, 6vw, 48px)',
              height: 'clamp(40px, 6vw, 48px)',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              cursor: currentPage === 0 || isFlipping ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              opacity: currentPage === 0 || isFlipping ? 0.3 : 1
            }}
          >
            <svg width="clamp(20px, 3vw, 24px)" height="clamp(20px, 3vw, 24px)" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>

          <div style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.2rem)', 
            color: '#ffffff', 
            fontWeight: 600, 
            display: 'flex', 
            alignItems: 'baseline', 
            gap: '6px', 
            minWidth: 'clamp(60px, 10vw, 80px)', 
            justifyContent: 'center' 
          }}>
            <span style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 700 }}>{pageNumber}</span>
            <span style={{ opacity: 0.5 }}>/</span>
            <span style={{ opacity: 0.7 }}>{totalPages}</span>
          </div>

          <motion.button
            onClick={() => flipPage('forward')}
            disabled={currentPage === totalPages - 1 || isFlipping}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 'clamp(40px, 6vw, 48px)',
              height: 'clamp(40px, 6vw, 48px)',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              cursor: currentPage === totalPages - 1 || isFlipping ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              opacity: currentPage === totalPages - 1 || isFlipping ? 0.3 : 1
            }}
          >
            <svg width="clamp(20px, 3vw, 24px)" height="clamp(20px, 3vw, 24px)" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
            textAlign: 'center',
            margin: 0,
            padding: '0 12px'
          }}
        >
          Click arrows, use keyboard (← →), or swipe to flip pages
        </motion.p>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCertificate && selectedCertificate && (
          <CertificateModal
            isOpen={showCertificate}
            onClose={() => setShowCertificate(false)}
            certificateUrl={selectedCertificate.url}
            companyName={selectedCertificate.company}
          />
        )}
      </AnimatePresence>
    </>
  );
}