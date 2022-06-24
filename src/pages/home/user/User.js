import React from 'react'
import './User.css'
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching } from '@material-ui/icons'

export default function User() {
    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <button className='userAddButton'>Create</button>
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
                <div className='userUpdate'></div>
            </div>
        </div>
    )
}
