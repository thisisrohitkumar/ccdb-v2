import React from "react";
import Header from "../components/Header";
import Contact from "../views/Contact"

const About = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="aboutContainer">
          <div className="Whaty">
            <h1>What is CCDb?</h1>
          </div>

          <div className="contentY">
            <p>
              CCdb (Course Critique Database) is an online database that
              contains information about online courses and more. The database
              includes course instructors details, course details, ratings, and
              reviews. CCDb is the largest and most comprehensive online course
              database on the web.
            </p>
            <p>
              CCdb (Course Critique Database) is an innovative online platform
              designed to revolutionize the way students choose their online
              courses. It serves as a comprehensive repository of information
              about a wide array of online courses, instructors, and learning
              experiences.
            </p>

            <h2>Key Features of CCdb:</h2>
            <ul>
              <li>
                Course Details: Get in-depth information about the content,
                duration, and prerequisites of each course.
              </li>
              <li>
                Instructor Profiles: Explore detailed profiles of course
                instructors, including their expertise and teaching style.
              </li>
              <li>
                Ratings and Reviews: Access honest feedback from students who
                have previously taken the course.
              </li>
              <li>
                Search and Filter: Easily find courses based on your interests,
                level of expertise, and other preferences.
              </li>
              <li>
                Community Engagement: Join discussions, forums, and connect with
                other learners to enhance your learning journey.
              </li>
            </ul>

            <h2>Why Choose CCdb?</h2>
            <p>
              CCdb stands out for its dedication to providing transparent and
              unbiased information to empower learners in making informed
              decisions. Whether you're a novice looking to explore a new field
              or an expert seeking to deepen your knowledge, CCdb has something
              for everyone.
            </p>

            <h2>Start Your Learning Journey with CCdb!</h2>
            <p>
              Ready to embark on a journey of continuous learning and
              skill-building? Explore the vast catalog of courses on CCdb today
              and take the first step towards achieving your educational goals.
            </p>
          </div>
          <div className="FeatureY">
            <h2>Features:</h2>
            <ol>
              <li>
                <h3>User Authentication</h3>
                <p>
                  Users can sign up, log in, and manage their profiles on Course
                  Critique Database. This ensures a personalized experience and
                  allows users to keep track of their courses, reviews, and
                  interactions with instructors.
                </p>
              </li>
              <li>
                <h3>Course Instructors</h3>
                <p>
                  Instructors have the ability to add their courses to the
                  database. They can also share their course links with
                  students, encouraging them to post reviews. This helps
                  instructors gather valuable feedback and improve their
                  courses.
                </p>
              </li>
              <li>
                <h3>Student Reviews and Ratings</h3>
                <p>
                  Students play a crucial role in the Course Critique Database
                  community. They can post reviews and rate courses as well as
                  instructors. This peer-driven feedback system helps other
                  learners make informed decisions about which courses to take.
                </p>
              </li>
            </ol>
          </div>
          <div className="StackY">
            <h2>Tech Stack:</h2>
            <ol>
              <li>
                <h2>Client</h2>
                <ul>
                  <li>
                    <span className="icon">⚛</span> React
                  </li>
                </ul>
              </li>
              <li>
                <h2>Server</h2>
                <ul>
                  <li>
                    <span className="icon">⚫</span> Node
                  </li>
                  <li>
                    <span className="icon">🚀</span> Express
                  </li>
                </ul>
              </li>
              <li>
                <h2>Database</h2>
                <ul>
                  <li>
                    <span className="icon">🍃</span> MongoDB
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default About;
