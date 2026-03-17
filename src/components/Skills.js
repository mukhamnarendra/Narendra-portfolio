const skills=[
"HTML",
"CSS",
"JavaScript",
"React",
"Redux",
"Bootstrap",
"Git",
"REST APIs"
]

function Skills(){

return(

<section id="skills" className="section">

<h2>Skills</h2>

<div className="skills-grid">

{skills.map((skill,index)=>(
<div key={index} className="skill-card">

{skill}

</div>
))}

</div>

</section>

)

}

export default Skills