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
              <div className="card col-sm-3 mr-4 detail-profile text-center">
                <div>
                  <div className="parent">
                    <div className="image-background" ></div>
                    <img className="rounded-circle image-profile" src={image[mockdata.photo]}/>
                  </div>
                  <div className="mt-5 detail-name">{mockdata.nama}</div>
                  <div className="detail-descrip">{mockdata.descrip}</div>
                </div>
                <div className="border-detail"></div>
                <div>
                  <div className="detail-view">{mockdata.view}</div>
                  <div className="detail-view-text">Who's viewed your profile</div>
                  <div className="border-cut"></div>
                  <div className="detail-con">{mockdata.connections}</div>
                  <div className="detail-con-text">Connections</div>
                  <div className="detail-con-text">Manage your network</div>
                </div>
                <div className="border-detail"></div>
                <div>
                  <div className="detail-access">Acces exclusif tools in inside</div>
                  <div className="">Free upgrade to premium</div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="card">
                  <textarea className="form-control"  placeholder="Share an article, photo, video, or idea"></textarea>
                  <div className="row mt-2 mb-2 ">
                    <a className="card ml-4"><span className="button-ecv"><FaEdit/> Write an article</span> </a>
                    <a className="card ml-2"><span className="button-ecv"><FaCamera/> Camera </span></a>
                    <a className="card ml-2"><span className="button-ecv"><FaVideo/> Video </span></a>
                    <button className="ml-auto button-post">Post</button>
                  </div>
                </div>
                <div className="row">
                  <div className="border"></div>
                  <div className="ml-1">Sort by:</div>
                  <div className="text-black color-black">Top <FaAngleDown/></div>
                </div>
                <div className="card mt-3 mb-5">
                  <div className="row mt-1">
                    <img className="rounded-circle image-profile-another ml-4" src={image[mockdata.photo]}/>
                    <div className="ml-2">
                      <div className="detail-man-post-name">{mockdata.nama}</div>
                      <div className="detail-man-post">tittle</div>
                      <div className="detail-man-post">1d</div>
                    </div>
                  </div>
                  <div className="card postingan">
                    <img className="mt-2" src={image[mockdata.photo]}/>
                    <div>
                      <span className="tittle-postingan">Artificial Intellegence (AI), Dari Teknologi Abstrak Hingga jadi 'Otak' Bisnis</span>
                    </div>
                    <div>
                      <span className="source-postingan">daily.octagon.co.id</span>
                    </div>
                  </div>
                  <div className="like">
                    <span>1 Like</span>
                  </div>
                  <div className="border-bottom"></div>
                  <div className="mb-1 ml-2">
                    <span className="button-lcs">Like</span>
                    <span className="button-lcs">Comment</span>
                    <span className="button-lcs">Share</span>
                  </div>
                </div>
              </div>
              <div className="card  show col-sm-3 ml-4">
              <div className="row">
                <span>add your feed</span>
                <FaInfoCircle className="ml-auto"/>
              </div>
              <div className="row mt-1">
                <img className="rounded-circle image-profile-another ml-4" src={image[mockdata.photo]}/>
                <div className="ml-2">
                  <div className="detail-man-post-name">{mockdata.nama}</div>
                  <div className="detail-man-post">tittle</div>
                  <div className="detail-man-post">1d</div>
                </div>
                <button>Follow</button>
              </div>
              <div className="row mt-1">
                <img className="rounded-circle image-profile-another ml-4" src={image[mockdata.photo]}/>
                <div className="ml-2">
                  <div className="detail-man-post-name">{mockdata.nama}</div>
                  <div className="detail-man-post">tittle</div>
                  <div className="detail-man-post">1d</div>
                </div>
                <button>Follow</button>
              </div>
              <div className="row mt-1">
                <img className="rounded-circle image-profile-another ml-4" src={image[mockdata.photo]}/>
                <div className="ml-2">
                  <div className="detail-man-post-name">{mockdata.nama}</div>
                  <div className="detail-man-post">tittle</div>
                  <div className="detail-man-post">1d</div>
                </div>
                <button>Follow</button>
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
