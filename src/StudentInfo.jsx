// src/StudentInfo.jsx

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './StudentInfo.css';

const StudentInfo = ({ student }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <motion.div 
      className="student-info-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? <FaEyeSlash /> : <FaEye />}
      </div>
      <motion.div
        className="student-details"
        initial={{ height: 0, opacity: 0 }}
        animate={isVisible ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isVisible && (
          <div>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Major:</strong> {student.major}</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default StudentInfo;
