import React, { useEffect, useState } from 'react'
import { Visibility } from '@material-ui/icons'
import './widgetSm.css'
import axios from 'axios'

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([])

    useEffect(() => {

        const getNewUsers = async () => {

            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjk4NWY5YTg5ODQ0YjUzOTk5MjQwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjUwNDMxNSwiZXhwIjoxNjU2OTM2MzE1fQ.FmXf7xIh-4Ev9NGJZeLFGesiFwfSHWGadDNWntigx-8"
                    }
                })

                setNewUsers(res.data)

            } catch (err) {
                console.log(err);
            }
        }


        getNewUsers();
    }, [])

    console.log(newUsers);

    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetSmList'>
                {newUsers.map(user => (

                    <li className='widgetSmListItem'>
                        <img src={user.profilePic || "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"} alt='profileImage' className='widgetSmImg'></img>
                        <div className='widgetSmUser'>
                            <span className='widgetSmUsername'>{user.username}</span>
                        </div>
                        <button className='widgetSmButton'>
                            <Visibility className='widgetSmIcon' />Display</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
