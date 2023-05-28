import { projectList } from "../data";
import { useEffect, useState } from "../libs";

const ProjectPage = () => {
  const [projects, setProjects] = useState(projectList);

  useEffect(() => {
    fetch("https://mcuong.vercel.app/api/db")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects));
  }, []);

  return `
    <div id="myprojects" class="container-fluid" >
      <h1 class="text-center text-project">Projects</h1>
      <div class="container">
        <div class="row">
          ${projects
            .map(
              (item, index) => `
            <div class="col-md-4 project-page" data-aos="zoom-in">
                <div class="over-img-project container">
                  <a href="#">
                    <img src="${
                      item.src
                    }" class="d-block img-projects container">
                  </a>
                </div>    
                <h3 class="w-h-75 h3-project-item">
                    <a href="/projects/${item.id}">${item.name}</a>
                </h3>
                <p>Link Web :<a target="_blank" href="${
                  item.link
                }"> Click Me !!!  </a></p>        
                <p>${item.title}</p>
            </div>
            ${index % 3 === 2 ? '</div><div class="row">' : ""}
          `
            )
            .join("")}
        </div>
      </div>
      <h3 class="text-center h3-project">
        <a target="_blank" href="#">See more on Github <i class='bx bxl-github'></i></a>
      </h3>
    </div>
  `;
};

export default ProjectPage;
