const Project = ({project, togglePage}) => {
    return (
        <div className="project">
            {
            project.isLogoSVG ?
                <div className="project-logo" style={{background: project.background}}>
                <img src={project.logo}  className="logo"/>
                </div>
                :
                <div className="project-logo project-logo-image"></div>
            }
            <div className="details">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
            {project.hasUrl ? <a href={project.url} className="button" target="_blank">View</a> : <button onClick={() => togglePage(project.page)}>View</button>}
        </div>
    )
}

export default Project
