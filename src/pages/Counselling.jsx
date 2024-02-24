import React from 'react'
import Victim from '../components/Victim'
import Admin from './Admin'


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

export default Counselling