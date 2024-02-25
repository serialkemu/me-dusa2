import React from 'react'
import AssistanceRequest from '../components/AssistanceRequest'

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