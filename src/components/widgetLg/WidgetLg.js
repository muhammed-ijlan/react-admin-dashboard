import React from 'react'

import './widgetLg.css'

export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }

    return (
        <div className='widgetLg'>
            <h2 className='widgetLgTitle'>Latest Transactions</h2>
            <table className='widgetLgTable'>
                <tr className='widgetLgTr'>
                    <th className='widgetLgTh'>Customer</th>
                    <th className='widgetLgTh'>Date</th>
                    <th className='widgetLgTh'>Amount</th>
                    <th className='widgetLgTh'>Statistics</th>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img className='widgetLgImg' alt='profile' src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'></img>
                        <span className='widgetLgName'>susan Carol</span>
                    </td>
                    <td className='widgetLgDate'>
                        2 Jun 2022
                    </td>
                    <td className='widgetLgAmount'>
                        $124.5
                    </td>
                    <td className='widgetLgStatus'>
                        <Button type='Approved' />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img className='widgetLgImg' alt='profile' src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'></img>
                        <span className='widgetLgName'>susan Carol</span>
                    </td>
                    <td className='widgetLgDate'>
                        2 Jun 2022
                    </td>
                    <td className='widgetLgAmount'>
                        $124.5
                    </td>
                    <td className='widgetLgStatus'>
                        <Button type='Declined' />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img className='widgetLgImg' alt='profile' src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'></img>
                        <span className='widgetLgName'>susan Carol</span>
                    </td>
                    <td className='widgetLgDate'>
                        2 Jun 2022
                    </td>
                    <td className='widgetLgAmount'>
                        $124.5
                    </td>
                    <td className='widgetLgStatus'>
                        <Button type='Pending' />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img className='widgetLgImg' alt='profile' src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'></img>
                        <span className='widgetLgName'>susan Carol</span>
                    </td>
                    <td className='widgetLgDate'>
                        2 Jun 2022
                    </td>
                    <td className='widgetLgAmount'>
                        $124.5
                    </td>
                    <td className='widgetLgStatus'>
                        <Button type='Approved' />
                    </td>
                </tr>
            </table>
        </div>
    )
}
