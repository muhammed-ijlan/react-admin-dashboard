import React from 'react'
import './Sidebar.css'
import { LineStyle, Timeline, TrendingUp, Person, MailOutline, Equalizer, Feedback, Message, WorkOutline, Report, PlayCircleOutline, List } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h2 className='sidebarTitle'>Dashboard</h2>
                    <ul className='sidebarList'>
                        <Link to='/' className='link'>
                            <li className='sidebarListItem active'>
                                <LineStyle className='sidebarIcon' />
                                Home
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analitics
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h2 className='sidebarTitle'>Quick Menu</h2>
                    <ul className='sidebarList'>
                        <Link to='/users' className='link'>
                            <li className='sidebarListItem'>
                                <Person className='sidebarIcon' />
                                Users
                            </li>
                        </Link>
                        <Link to='/movies' className='link'>
                            <li className='sidebarListItem'>
                                <PlayCircleOutline className='sidebarIcon' />
                                Movies
                            </li>
                        </Link>
                        <Link to='/lists' className='link'>
                            <li className='sidebarListItem'>
                                <List className='sidebarIcon' />
                                Lists
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <Equalizer className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h2 className='sidebarTitle'>Notifications</h2>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <MailOutline className='sidebarIcon' />
                            Mail
                        </li>
                        <li className='sidebarListItem'>
                            <Feedback className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className='sidebarListItem'>
                            <Message className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h2 className='sidebarTitle'>Staff</h2>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <WorkOutline className='sidebarIcon' />
                            Manage
                        </li>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analitics
                        </li>
                        <li className='sidebarListItem'>
                            <Report className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
