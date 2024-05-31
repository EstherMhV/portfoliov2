// import React from "react";
// import ProjectCard from "../sub/ProjectCard";
// import Link from "next/link";

// const Projects = () => {
//   return (
//     <div
//       className="flex flex-col items-center justify-center py-20"
//       id="projects"
//     >
//       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
//         Mes Projets
//       </h1>

//       <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">

//         <Link href="https://github.com/EstherMhV/aminum" passHref>

//           <ProjectCard
//             src="/chess.png"
//             title="Modern Next.js Portfolio"
//             description="Jeu d'échecs codé lors de l'initiation au HTML, CSS et JavaScript."
//             </>
//       </Link>


//       {/* <ProjectCard
//           src="/consoEDF.png"
//           title="Interactive Website Cards"
//           description="Applicaton JAVA de calcul de consommatiom d'énergie électrique."
//           href="https://github.com/EstherMhV/consoEDF"
//         />
//         <ProjectCard
//           src="/ase_launcher.png"
//           title=" ASE-LAUNCHER"
//           description="Launcher Hébergeant plusieurs jeux en Python fait dans le cadre de l'epreuve E5 de l'examen du BTS SIO SLAM."
//           repoUrl="https://github.com/MouhamadBilal/ase-launcher"
//         /> */}
//     </div>
//       </div >
//   );
// };

// export default Projects;

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mes Projets
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/chess.png"
          title="Modern Next.js Portfolio"
          description="Jeu d'échecs codé lors de l'initiation au HTML, CSS et JavaScript."
          href="https://github.com/EstherMhV/aminum"
        />

        {/* Uncomment and add more projects as needed
        <ProjectCard
          src="/consoEDF.png"
          title="Interactive Website Cards"
          description="Application JAVA de calcul de consommation d'énergie électrique."
          href="https://github.com/EstherMhV/consoEDF"
        />
        <ProjectCard
          src="/ase_launcher.png"
          title="ASE-LAUNCHER"
          description="Launcher Hébergeant plusieurs jeux en Python fait dans le cadre de l'épreuve E5 de l'examen du BTS SIO SLAM."
          href="https://github.com/MouhamadBilal/ase-launcher"
        /> */}
      </div>
    </div>
  );
};

export default Projects;



