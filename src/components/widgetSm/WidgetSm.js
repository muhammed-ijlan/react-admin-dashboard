import React from 'react'
import { Visibility } from '@material-ui/icons'
import './widgetSm.css'

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                    <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='profileImage' className='widgetSmImg'></img>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility />
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='profileImage' className='widgetSmImg'></img>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility />
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='profileImage' className='widgetSmImg'></img>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility />
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='profileImage' className='widgetSmImg'></img>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility />
                        Display
                    </button>
                </li>
                <li className='widgetSmListItem'>
                    <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='profileImage' className='widgetSmImg'></img>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Anna Keller</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
