import React from 'react'

const Project = ({id, name, url, skills,imgsrc,gitlink}) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" ><h2>{name}</h2></a>
            <a className='linking' target="_blank" href={url}>Link</a>
            <a href={gitlink} target="_blank" className='github' ><img src={imgsrc}></img></a>
            { skills && <h3>{skills.map(skill => skill)}</h3> } 
        </div>
    )
}

export default Project
