import React from 'react'

const StudentForm = () => {
  return (
    <div>
      <form action="" method='post'>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input type="text" className=' text-gray-700 border w-full px-3 py-2' name='name' />
        </div>
        <div className="mb-3">
          <label htmlFor="fathersName">Fathers Name</label>
          <input type="text" className=' text-gray-700  text-gray-700border w-full px-3 py-2' name='fathersName' />
        </div>
        <div className="mb-3">
          <label htmlFor="contact">Contact</label>
          <input type="text" className=' text-gray-700  text-gray-700border w-full px-3 py-2' name='contact' />
        </div>
        <div className="mb-3">
          <label htmlFor="email">email</label>
          <textarea name="" id="" cols="30" rows="10" className="border w-full px-3 py-2 bg-teal-700"></textarea>
        </div>
        <div className="mb-3">
         
          <input type="submit" className=' text-gray-700  text-gray-700border w-full px-3 py-2 bg-teal-700' name='name' />
        </div>

      </form>
    </div>
  )
}

export default StudentForm;