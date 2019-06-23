import React, { Component } from 'react';
import logo from '../logo.svg';
import Navigation from '../components/Navigation';
import mockdata from '../mockdata/mockdata';
import { FaAngleDown, FaCamera, FaVideo, FaEdit, FaInfoCircle } from 'react-icons/fa';
import './home.css';
import image from '../mockdata/images';
 class Home extends Component{
   render(){
     return (
       <div>
          <Navigation />
          <div className="container">
            <div className="row mt-4">
              <div className="card col-sm-3 mr-4 text-center">
                <div className="">
                  <img className="rounded-circle image-profile" src={image[mockdata.photo]}/>
                  <div>{mockdata.nama}</div>
                  <div>{mockdata.descrip}</div>
                </div>
                <div>
                  <div>{mockdata.view}</div>
                  <div>Who's viewed your profile</div>
                  <div>{mockdata.connections}</div>
                  <div>Connections</div>
                  <div>Manage your network</div>
                </div>
                <div>
                  <div>Acces exclusif tools in inside</div>
                  <div>Free upgrade to premium</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="card">
                  <textarea className="form-control"  placeholder="Share an article, photo, video, or idea"></textarea>
                  <div className="row">
                    <span className="card"><FaEdit/> Write an article </span>
                    <span className="card"><FaCamera/> Camera </span>
                    <span className="card"><FaVideo/> Video </span>
                    <button className="ml-auto">Post</button>
                  </div>
                </div>
                <div className="row">
                  <div className="border"></div>
                  <div>Sort by</div>
                  <div>Top <FaAngleDown/></div>
                </div>
                <div className="card mt-3">
                  <div className="row">
                    <img className="rounded-circle image-profile-another ml-4" src={image[mockdata.photo]}/>
                    <div className="ml-2">
                      <div>{mockdata.nama}</div>
                      <div>tittle</div>
                      <div>1d</div>
                    </div>
                  </div>
                  <div>postingan</div>
                </div>
              </div>
              <div className="card col-sm-3 ml-4">
              <div className="row">
                <span>add your feed</span>
                <FaInfoCircle className="ml-auto"/>
              </div>
                <div>view all recomendation</div>
              </div>
            </div>
          </div>
       </div>
     );
   }

}

export default Home;
