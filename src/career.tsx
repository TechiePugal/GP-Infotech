import React from 'react';
import './Career.css';

const Career: React.FC = () => {
  const careers = [
    {
      title: 'Full-Stack Developer',
      description: `Expertise in building scalable web applications using modern frameworks like React, Node.js, and Django. Proficient in API development, database management, and creating intuitive user interfaces.`,
      skills: ['React', 'Node.js', 'Django', 'API Development', 'MongoDB', 'SQL'],
      icon: '👨‍💻',
    },
    {
      title: 'Business Development Specialist',
      description: `Skilled in identifying growth opportunities, building client relationships, and driving revenue through strategic planning. Experienced in analyzing market trends and implementing business strategies.`,
      skills: ['Client Relationship', 'Market Research', 'Strategic Planning', 'Lead Generation'],
      icon: '💼',
    },
    {
      title: 'UI/UX Designer',
      description: `Proficient in crafting user-centric designs using tools like Figma and Photoshop. Adept at creating wireframes, prototypes, and designing visually appealing and functional interfaces.`,
      skills: ['Figma', 'Adobe Photoshop', 'Wireframing', 'Prototyping', 'UI/UX Design'],
      icon: '🎨',
    },
  ];

  return (
    <div className="career-container">
      <h1 className="career-heading">Career Opportunities</h1>
      <p className="career-subheading">Explore various roles and expertise areas I specialize in:</p>
      <div className="career-grid">
        {careers.map((career, index) => (
          <div className="career-card" key={index}>
            <div className="card-icon">{career.icon}</div>
            <h2 className="card-title">{career.title}</h2>
            <p className="card-description">{career.description}</p>
            <h3 className="card-skills-heading">Key Skills:</h3>
            <ul className="card-skills-list">
              {career.skills.map((skill, idx) => (
                <li key={idx} className="card-skill">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="contact-section">
        <p className="contact-message">
          If you are interested in any of these roles, please send your resume to{' '}
          <a href="mailto:gpinfotech.ind@gmail.com" className="contact-email">
            gpinfotech.ind@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Career;
