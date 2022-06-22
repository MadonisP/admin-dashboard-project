import { NotificationsNoneOutlined, Language,Settings } from "@mui/icons-material";
import "./Topbar.css";


const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Msi.</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneOutlined />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                        <span className="topIconBag">2</span>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Topbar