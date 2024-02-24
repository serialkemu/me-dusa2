import React from 'react'
<<<<<<< HEAD

import AssistanceRequest from '../components/AssistanceRequest'
=======
import Victim from '../components/Victim'
import Admin from './Admin'

>>>>>>> 8fb0019 (	new file:   src/components/Edu.jsx)

const Counselling = () => {

  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);}

  return (
    <div>
      <Victim onSubmit={handleFormSubmit} />
      <Admin formData={formData} />
    </div>
  )
}

export default Counselling;