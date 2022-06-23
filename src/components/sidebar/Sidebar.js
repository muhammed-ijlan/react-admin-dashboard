import React from 'react'
import './Sidebar.css'
import { LineStyle, Timeline, TrendingUp, Person, Store, AttachMoney, MailOutline, Equalizer, Feedback, Message, WorkOutline, Report } from '@material-ui/icons'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h2 className='sidebarTitle'>Dashboard</h2>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem active'>
                            <LineStyle className='sidebarIcon' />
                            Home
                        </li>
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
                        <li className='sidebarListItem'>
                            <Person className='sidebarIcon' />
                            Users
                        </li>
                        <li className='sidebarListItem'>
                            <Store className='sidebarIcon' />
                            Products
                        </li>
                        <li className='sidebarListItem'>
                            <AttachMoney className='sidebarIcon' />
                            Transactions
                        </li>
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