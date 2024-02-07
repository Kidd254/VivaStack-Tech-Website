const ProjectsOne = () => (
  <div>
    <p> Our Projects</p>
    <h3>Our Persona & Client Projects</h3>
    <div className="project-grid container d-flex flex-column">
      {/* Project 1 */}
      <div className="row">
        <div className="col-md-4">
          <div className="project-item">
            <img src="project1.jpg" alt="Project 1" />
            <div className="overlay">
              <p>Project Title 1</p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4">
          <div className="project-item">
            <img src="project2.jpg" alt="Project 2" />
            <div className="overlay">
              <p>Project Title 2</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="project-item">
            <img src="project3.jpg" alt="Project 2" />
            <div className="overlay">
              <p>Project Title 3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Repeat the pattern for Project 3 to Project 6 */}
      <div className="row">
        <div className="col-md-4">
          <div className="project-item">
            <img src="project1.jpg" alt="Project 1" />
            <div className="overlay">
              <p>Project Title 1</p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4">
          <div className="project-item">
            <img src="project2.jpg" alt="Project 2" />
            <div className="overlay">
              <p>Project Title 2</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="project-item">
            <img src="project3.jpg" alt="Project 2" />
            <div className="overlay">
              <p>Project Title 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsOne;
