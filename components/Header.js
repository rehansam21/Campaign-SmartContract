import React from 'react';
import {Menu} from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return(
        <div>
            <Menu style={{marginTop: '20px' }}>
                <Link route='/'>
                    <a className='item'>CrowdCoin </a>
                </Link>
                <div position='right'>
                    <Menu.Menu position='right'>
                    <Link route='/'>
                    <a className='item'>Campaigns </a>
                </Link>
                <div>
                <Link route='campaigns/new'>
                    <a className='item'>+ </a>
                </Link>
                </div>
                </Menu.Menu>
                </div>
            </Menu>
        </div>
    )
}