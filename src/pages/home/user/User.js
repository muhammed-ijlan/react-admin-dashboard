import React from 'react'
import './User.css'
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function User() {
    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <Link to='/newUser'>

                    <button className='userAddButton'>Create</button>
                </Link>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img className='userShowImg' alt='pic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU'></img>
                        <div className='userShowTopTitle'>
                            <span className='userShowUsername'>Anna Beck</span>
                            <span className='userShowUserTitle'>Software Engineer</span>
                        </div>
                    </div>
                    <div className='userShowBottom'>
                        <span className='userShowTitle'>Account Details</span>
                        <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon' />
                            <span className='userShowInfoTitle'>annabeck99</span>
                        </div>
                        <div className='userShowInfo'>
                            <CalendarToday className='userShowIcon' />
                            <span className='userShowInfoTitle'>10-08-2000</span>
                        </div>
                        <span className='userShowTitle'>Contact Details</span>
                        <div className='userShowInfo'>
                            <PhoneAndroid className='userShowIcon' />
                            <span className='userShowInfoTitle'>+1 234 524 52</span>
                        </div>
                        <div className='userShowInfo'>
                            <MailOutline className='userShowIcon' />
                            <span className='userShowInfoTitle'>anna@email.com</span>
                        </div>
                        <div className='userShowInfo'>
                            <LocationSearching className='userShowIcon' />
                            <span className='userShowInfoTitle'>New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Edit</span>
                    <form className='useUpdateForm'>
                        <div className='userUpdateLeft'>
                            <div className='userUpdateItem'>
                                <label>Username</label>
                                <input type="text" placeholder='annabeck99' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Full Name</label>
                                <input type="text" placeholder='Anna Beck' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Email</label>
                                <input type="text" placeholder='anna@email.com' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Phone</label>
                                <input type="text" placeholder='+1 234 545 12' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Address</label>
                                <input type="text" placeholder='New York | USA' className='userUpdateInput' />
                            </div>
                        </div>
                        <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU' className='userUpdateImage' alt='pic'></img>
                                <label for='file'><Publish className='userUpdateIcon' /></label>
                                <input type='file' id='file' style={{ display: "none" }}></input>
                            </div>
                            <button className='userUpdateButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
