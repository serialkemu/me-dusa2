import React from 'react'

const EduVi = () =>{
  return(
    <div className='card'>
      <iframe width="677" height="381" src="https://www.youtube.com/embed/yzhat-YaGGk" title="Glossary A to Z - SGBV - EN" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

const EduVideo = () => {
  return (
    <div>
      <EduVi/>
    </div>
  )
}

export default EduVideo