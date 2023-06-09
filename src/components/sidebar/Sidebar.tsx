import { AvatarImgStyle } from "../../rootStyles";
import { SidebarStyle } from "./sidebarStyle";

import { MdVisibility } from "react-icons/md";

export const Sidebar = () => {
  return (
    <SidebarStyle>
      <div className="sidebar__top">
        <div className="sidebar__top-header">
          <img
            src="./images/the-lamp.png"
            alt="Wrapper"
            className="sidebar__top-header__wrapper"
          />
          <div className="sidebar__top-header__desc">
            <AvatarImgStyle
              src="./images/avatar.png"
              alt="Avatar"
              width="70px"
              height="70px"
            />
            <h1>Eduard Tobilko</h1>
            <p>Front-end developer | HTML / CSS / JavaScript / React</p>
          </div>
        </div>

        <div className="sidebar__top-followers">
          <p>
            <i className="bx bx-group"></i> <span>1,299 followers</span>
          </p>
          <p>
            <MdVisibility /> <span>354 views of your profile</span>
          </p>
        </div>

        <div className="sidebar__top-elements">
          <i className="bx bxs-bookmark"></i> <span>My elements</span>
        </div>
      </div>
    </SidebarStyle>
  );
};
