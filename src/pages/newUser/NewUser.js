import React from 'react'
import './NewUser.css'

export default function NewUser() {
    return (
        <div className='newUser'>
            <h1 className='newUserTitle'>New User</h1>
            <form className='newUserForm'>
                <div className='newUserItem'>
                    <label >User Name</label>
                    <input placeholder='john' type='text'></input>
                </div>
                <div className='newUserItem'>
                    <label >Full Name</label>
                    <input placeholder='john kelly' type='text'></input>
                </div>
                <div className='newUserItem'>
                    <label >Email</label>
                    <input placeholder='john@email.com' type='email'></input>
                </div>
                <div className='newUserItem'>
                    <label >Password</label>
                    <input placeholder='password' type='password'></input>
                </div>
                <div className='newUserItem'>
                    <label >Phone</label>
                    <input placeholder='+1 234 568 85' type='number'></input>
                </div>
                <div className='newUserItem'>
                    <label >Address</label>
                    <input placeholder='New York USA' type='text'></input>
                </div>
                <div className='newUserItem'>
                    <div className='newUserGender'>
                        <label >Gender</label>
                        <input name='gender' id='male' value='male' type='radio'></input>
                        <label htmlFor='male'>Male</label>
                        <input name='gender' id='female' value='female' type='radio'></input>
                        <label htmlFor='female'>Female</label>
                    </div>
                </div>
                <div className='newUserItem'>
                    <label>Active</label>
                    <select className='newUserSelect' name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className='newUserButton'>Create</button>
            </form>
        </div>
    )
}
