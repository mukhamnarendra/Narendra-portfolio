import {useEffect,useState} from "react"
import axios from "axios"

function Projects(){

const[repos,setRepos]=useState([])

useEffect(()=>{

axios
.get("https://api.github.com/users/mukhamnarendra/repos")
.then(res=>setRepos(res.data))

},[])

return(

<section id="projects" className="section">

<h2>Projects</h2>

<div className="project-grid">

{repos.slice(0,6).map(repo=>(

<div key={repo.id} className="card">

<h3>{repo.name}</h3>

<p>{repo.description}</p>

<a href={repo.html_url} target="_blank" rel="noreferrer">
View Code
</a>

</div>

))}

</div>

</section>

)

}

export default Projects