import CardExperience from '@/Components/UI/CardExperience'
import React from 'react'

const Experience = () => {
  return (
    <div className='p-2 gap-5 flex flex-col'>
      

      <CardExperience 
        role="Software Engineer"
        company="Tech Corp"
        date="Jan 2020 - Present"
        description="Developed and maintained web applications using React and Node.js, collaborating with cross-functional teams to deliver high-quality software solutions."
        keywords={['React', 'Node.js', 'JavaScript']} 
      />
    </div>
  )
}

export default Experience