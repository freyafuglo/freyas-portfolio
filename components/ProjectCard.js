import { useInView } from "react-intersection-observer";
import styles from "./ProjectCard.module.css";
import { FaFolder, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  techList,
  githubLink,
  liveLink,
  index
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.15    // 15% of card must be visible to trigger
  });

  return (
    <div
      ref={ref}
      className={`${styles.projectCard} ${inView ? styles.fadeIn : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
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
              <FiExternalLink className={styles.externalIcon} />
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
