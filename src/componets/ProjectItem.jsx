import "../styles/ProjectItem.css";

export default function ProjectItem({ title, description, img, url, alt }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wrapper project"
    >
      <div className="project-img-container">
        <img className="photo" src={img} alt={alt} />
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
    </a>
  );
}
