import CardExperience from '@/Components/UI/CardExperience'
import React from 'react'

const Experience = () => {
  return (
    <div className='p-2 gap-5 flex flex-col'>
      <CardExperience 
        role="Software Engineer"
        company="Tech Corp"
        date="Jan 2020 - Present"
        description="Developed and maintained web applications using React and Node.js, collaborating with cross-functional teams to deliver high-quality software solutions. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        keywords={['React', 'Node.js', 'JavaScript']} 
      />
      <CardExperience 
        role="Software Engineer"
        company="Tech Corp"
        date="Jan 2020 - Present"
        description="Developed and maintained web applications using React and Node.js, collaborating with cross-functional teams to deliver high-quality software solutions."
        keywords={['React', 'Node.js', 'JavaScript']} 
      />

      <CardExperience 
        role="Software Engineer"
        company="Tech Corp"
        date="Jan 2020 - Present"
        description="Developed and maintained web applications using React and Node.js, collaborating with cross-functional teams to deliver high-quality software solutions."
        keywords={['React', 'Node.js', 'JavaScript']} 
      />
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