import styles from "./ProjectCard.module.css";
import { FaFolder, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi"; // Feather icon

const ProjectCard = ({ title, description, techList, githubLink, liveLink }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.cardHeader}>
        <FaFolder className={styles.folderIcon} />
        <div className={styles["card-links"]}>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.githubIcon} />
          </a>
        )}
        {liveLink && (
      <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <FiExternalLink />
      </a>
    )}
     </div>
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
