import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signupUser } from '../../../actions/user/signupUser'
import DatePickerButton from '../../common/datepicker'



function SignupForm(props) {
  const [first_name, setFirstNameChange] = useState('');
  const [last_name, setLastNameChange] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstNameChange(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastNameChange(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value)
  }
  const handleBirthdayPickerChange = (selectedDate: Date) => {
    setBirthday(selectedDate.toLocaleDateString());
  }

  const dispatch = useDispatch();

  const handleSubmit = (e:any) => {
    e.preventDefault()

    const user = {
    first_name: first_name,
    last_name: last_name,
    gender: gender,
    email: email,
    password: password,
    birthday: birthday
    }

    // Need to extract token to a gblobal to let every request can use it
    const token = (document.querySelector('[name=csrf-token]') as HTMLMetaElement).content;

    // Not sure have another way to replace any
    dispatch(signupUser(user, token) as any)
            
    setFirstNameChange('')
    setLastNameChange('')
    setEmail('')
    setPassword('')
    setGender('')
    setBirthday('')
    
    // history.back('/');
  }

  // const signedinUser = useSelector((state) => {
  //     return state.user
  // })

  return (
      <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={handleFirstNameChange} value={first_name} />
              </div>
              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={handleLastNameChange} value={last_name} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                <div className="mt-1">
                  <select onChange={handleGenderChange} value={gender} className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="">Select a gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="relative max-w-sm">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Birthday</label>
                  <DatePickerButton onChange={handleBirthdayPickerChange} />
                  <input type="text" style={{ display: 'none' }} onChange={handleBirthdayChange} value={birthday} />
              </div>
              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" onChange={handleEmailChange} value={email} />
              </div>
              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" onChange={handlePasswordChange} value={password} />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >Submit</button>
              </div>
          </form>
      </div>
  );
}

export default SignupForm;
