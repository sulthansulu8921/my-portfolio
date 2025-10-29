import React from 'react'
import { FaGraduationCap, FaBook, FaSchool } from 'react-icons/fa'

function Card({icon, title, org, years, desc}){
  return (
    <div className="edu-card">
      <div className="edu-icon">{icon}</div>
      <div>
        <h4 style={{margin:0}}>{title}</h4>
        <small style={{color:'#bdbdbd'}}>{org} | {years}</small>
        <p style={{marginTop:10,color:'#cfcfcf'}}>{desc}</p>
      </div>
    </div>
  )
}

export default function Education(){
  return (
    <section className="education" id="education">
      <h1 className='Education-h1'>MY EDUCATION</h1>

    <div className="edu-list">
      <Card icon={<FaGraduationCap />} title="Higher Secondary Education" org="GAP Higher Secondary School" years="2023 - 2025"
        desc="Specialized in History, Economics, and Statistics, sharpening analytical and critical thinking skills." />

      <Card icon={<FaBook />} title="Secondary School Education" org="GAP Higher Secondary School" years="2022 - 2023"
        desc="Developed a solid academic background in Science and Mathematics." />

      <Card icon={<FaSchool />} title="Middle School Education " org="Sree Narayana Public School" years="2020 - 2022"
        desc="Focused on fundamentals and an interest in Science and Technology." />
    </div>
    </section>
  )
}
