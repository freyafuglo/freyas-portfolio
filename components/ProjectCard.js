import styles from "./ProjectCard.module.css";
import { FaFolder, FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, techList, githubLink }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.cardHeader}>
        <FaFolder className={styles.folderIcon} />
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.githubIcon} />
          </a>
        )}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
      <ul className={styles.cardTech}>
        {techList.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
