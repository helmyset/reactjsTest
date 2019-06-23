import React from 'react';
import AutoComplete from 'react-autocomplete';
import { FaLinkedin, FaHome, FaUserFriends,
         FaBriefcase, FaComment, FaBell,
         FaTh, FaAddressCard, FaAngleDown } from 'react-icons/fa';
import image from '../mockdata/images';
import mockdata from '../mockdata/mockdata';
import './Navigation.css';

class Navigation extends React.Component {
constructor(props) {
      super(props);
      this.state = {
          isOpen: false
      };
  }

   toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });


  render(){
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <nav className="navbar navbar-expand-lg navbar-light nav-color">
         <div className="collapse navbar-collapse row" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 ml-5">
            <FaLinkedin  className="logo-icon-linkedin text"/>
            <div className="dropdown ml-4" onClick={this.toggleOpen}>
              <input
                className="form-control mr-sm-2 dropdown-toggle"
                type="search"
                placeholder="Search"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
              />
              <div className={menuClass} aria-labelledby="dropdownMenuButton">
              <span>Search for</span>
                <a className="dropdown-item" href="#">
                  <FaUserFriends /> People
                </a>
                <a className="dropdown-item" href="#">
                  <FaBriefcase /> Job
                </a>
                <a className="dropdown-item" href="#">
                  <FaAddressCard /> Post
                </a>
                <div className="row">
                  <span className="ml-3">Recent</span>
                  <span className="ml-auto mr-3">Clear</span>
                </div>
                <div>
                  <img className="rounded-circle image-profile-dropdown ml-3" src={image[mockdata.photo]}/>
                  <span className="ml-2">{mockdata.nama}</span>
                </div>
                <div>
                  <img className="rounded-circle image-profile-dropdown ml-3" src={image[mockdata.photo]}/>
                  <span className="ml-2">{mockdata.nama}</span>
                </div>
                <div>
                  <img className="rounded-circle image-profile-dropdown ml-3" src={image[mockdata.photo]}/>
                  <span className="ml-2">{mockdata.nama}</span>
                </div>
                <div>
                  <img className="rounded-circle image-profile-dropdown ml-3" src={image[mockdata.photo]}/>
                  <span className="ml-2">{mockdata.nama}</span>
                </div>
                <div>
                  <img className="rounded-circle image-profile-dropdown ml-3" src={image[mockdata.photo]}/>
                  <span className="ml-2">{mockdata.nama}</span>
                </div>
                <div>
                  <img className="rounded-circle image-profile-dropdown ml-3" src={image[mockdata.photo]}/>
                  <span className="ml-2">{mockdata.nama}</span>
                </div>
                <div>
                  <img className="rounded-circle image-profile-dropdown ml-3" src={image[mockdata.photo]}/>
                  <span className="ml-2">{mockdata.nama}</span>
                </div>
              </div>
            </div>
          </form>
           <ul className="navbar-nav ml-auto mr-5 text-center">
             <li className="nav-item active">
             <a className="nav-link text-white" href="/">
                <FaHome className="icon"/>
              <div>
               Home <span className="sr-only">(current)</span>
               </div>
               </a>
             </li>
             <li className="nav-item">
             <a className="nav-link text-white" href="/">
               <FaUserFriends className="icon"/>
               <div>
                My Network
               </div>
               </a>
             </li>
             <li className="nav-item">
              <a className="nav-link text-white" href="/">
               <FaBriefcase className="icon"/>
               <div>
               Jobs
               </div>
               </a>
             </li>
             <li className="nav-item">
             <a className="nav-link text-white" href="/">
               <FaComment className="icon"/>
              <div>
               Message
               </div>
               </a>
             </li>
             <li className="nav-item">
              <a className="nav-link text-white" href="/">
               <FaBell className="icon"/>
               <div>
               Notification
               </div>
               </a>
             </li>
             <li className="nav-item">
              <a className="nav-link text-white" href="/">
               <img className="rounded-circle image-profile-nav" src={image[mockdata.photo]}/>
               <div>
               Me <FaAngleDown className="icon"/>
               </div>
               </a>
             </li>
             <li className="nav-item">
              <a className="nav-link text-white" href="/">
                <FaTh className="icon"/>
                <div>
               Work <FaAngleDown className="icon"/>
               </div
               ></a>
             </li>
             <li className="nav-item">
               <a className="nav-link text-white" href="/">Free Upgrade To Premium</a>
             </li>
           </ul>

         </div>
       </nav>
    )
  }
}


export default Navigation;
