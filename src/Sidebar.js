import React from "react";
import "./Sidebar.css";
import logo from './img/spot.png';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue()

    return (
        <div className="sidebar">
            <img
            className="sidebar__logo" 
            src={logo} 
            />
            <SidebarOption Icon={ HomeIcon } title ="Home"/>
            <SidebarOption Icon={ SearchIcon } title ="Search"/>
            <SidebarOption Icon={ LibraryMusicIcon } title ="Your Library"/>
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
            <SidebarOption title='Hip Hop' />
            <SidebarOption title='Hip Hop' />
            <SidebarOption title='Hip Hop' />
        </div>
    );
}

export default Sidebar;
