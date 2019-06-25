import React, { Component } from 'react';
import logo from '../../logo.svg';
import mockdata from '../../mockdata/mockdata';
import { FaAngleDown, FaBuilding, FaAddressBook, FaGraduationCap, FaUserFriends,
        FaThumbsUp, FaCommentDots, FaShare, FaPlus } from 'react-icons/fa';
import image from '../../mockdata/images';
import './profile.css';

 class Profile extends Component{
   render(){
     return (
       <div className="col-sm-6 ml-5 mt-2">
          <div className="card detail-profile text-justify">
            <div className="">
                <div className="parent">
                  <div className="image-background" ></div>
                  <img className="rounded-circle image-profile-p" src={image[mockdata.photo]}/>
                </div>
                <div className="row ml-4 mt-5">
                  <div>
                    <div className="">{mockdata.nama}</div>
                    <div className="">{mockdata.descrip}</div>
                    <div className="">Indonesia</div>
                    <div className="row">
                      <button className="btn btn-primary">Connect</button>
                      <button className="btn btn-primary ml-1">InMail</button>
                      <button className="btn btn-primary ml-1">More</button>
                    </div>
                  </div>
                  <div className="ml-auto mr-4">
                    <div className=""><FaBuilding className="mr-2"/>Binus Internasioan university</div>
                    <div className=""><FaBuilding className="mr-2"/>Universitas Bina Nusantara(Binus)</div>
                    <div className=""><FaAddressBook className="mr-2"/>See contact info</div>
                    <div className=""><FaUserFriends className="mr-2"/>500+ Coennection</div>
                  </div>
                </div>
              </div>
                <div className="border mt-4"></div>
                <div className="ml-4 mr-4">
                  <span>An experienced programmer in various fields of computer science including game development,web application, computationa Intellegence, interactive multimedia application, etc. a fast learner who can quickly adapt to the new concapts and technology, have the ability to design a good systems architec</span>
                </div>
                <div className="border-profile mt-4"></div>
                <span className="mt-2 text-center mb-2">Show more<FaAngleDown /></span>
            </div>

            <div className="card mt-4">
              <span className="ml-4">Highligts</span>
              <div className="row">
                <div>
                  <div className="row ">
                    <img className="rounded-circle image-profile-another ml-5" src={image[mockdata.photo]}/>
                    <div className=" ml-1">
                      <div>85 Mutual Connections</div>
                      <div>You and Hantze both know Wenas<br /> Agustiawan, Achmad Zaky, and 83 others</div>
                    </div>
                  </div>
                </div>
                <div className=" ml-auto">
                  <div className="row">
                    <FaCommentDots size="50"/>
                    <div className="ml-1 mr-5">
                      <div>Reach out to Hantze for ..</div>
                      <div>Joining nonprofit</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-profile mt-4"></div>
              <span className="mt-2 text-center mb-2">Show more <FaAngleDown /></span>
            </div>

            <div className="card mt-4">
              <div className="ml-4 mr-4">
              <div className="row">
                <div>
                  <span>Hanzate Activity</span>
                  <div>1,151 followers</div>
                  <div className="row">
                    <img className="rounded-circle image-profile-another ml-3" src={image[mockdata.photo]}/>
                    <div className="ml-1">
                      <span>i'm looking for startup IT company<br /> for short intern program in  june until august 2018 in jakarata.<br /> Please PM me if you have some space for my students on that period. thanks!</span>
                    </div>
                  </div>
                </div>
              <button className="btn-sm btn-primary"><FaPlus className="icon-follow"/>Follow</button>
              </div>
              <span className="mt-4">See all activity</span>
              </div>
            </div>

            <div className="card mt-4">
              <span className="ml-4">Experiance</span>
              <div className="row ml-4 mr-4">
                <FaBuilding className="mt-2" size="60"/>
                <div>
                  <div>Lab Coordinate</div>
                  <div>Binus International Universitas</div>
                  <div>Sept 2015-Present . 2 year 9 mon</div>
                  <span>
                    FX mall <br />
                    Laborarty coordinatro at binus internasional<br />
                    Responsibility: <br />
                    - Manage all of lab activity<br/>
                    - Assign Teachin Assistant (TA) to help lecturer<br/>
                    - Create training and event for the TA<br/>
                    - Prepare student to compete in the various competition<br/>
                    - Create, update, and renew the syliabus course in computer science binus<br/>
                  </span>
                </div>
                <span className="mt-2">Show More <FaAngleDown /></span>
              </div>
            </div>
            <div className="card">
              <span className="ml-4">Education</span>
              <div className="row ml-4 mr-4">
                <FaGraduationCap size="60"/>
                <div>
                  <div>Unviersitas Bina Nusantara</div>
                  <div>Magister Teknik Information (MTI), Computer Science, 3.5</div>
                  <div>2011-2013</div>
                  <span>
                    Acivities and Societies : Artificial Intellegence, Database System,<br /> System Engineering, Diaster Recovery Management, Network System
                  </span>
                </div>
              </div>
              <div className="row ml-4 mr-4 mt-2">
                <FaGraduationCap size="60"/>
                <div>
                  <div>Unviersitas Bina Nusantara</div>
                  <div>Bachelor's degree, Information Technology, 3.5</div>
                  <div>2007-2011</div>
                  <span>
                    Acivities and Societies : Artificial Intellegence, Database System,<br /> System Engineering, Diaster Recovery Management, Network System
                  </span>
                </div>
            </div>

            <div className="card mt-4">
              <span className="ml-4">Volunter Experiance</span>
                <div className="row ml-4 mr-4">
                  <FaBuilding size="60"/>
                  <div>
                    <div>Lecuture</div>
                    <div>PT Lautan Luas</div>
                    <div>jun 2013 - jul 2013 . 2 mos</div>
                  </div>
                </div>
            </div>

            <div className="card mt-4">
              <span className="ml-4">Acomplishments</span>
              <div className="">
                <div className="row ml-4 mr-4">
                  <span className="number-acc">6</span>
                  <div className="mt-3 ml-1">
                    <span>Couses</span>
                    <span>Algoritma and Programing , Database system, Enterprise application,<br /> Object Oriented Programming, Program Desin Metod, Web Programing</span>
                  </div>
                  <FaAngleDown className="mt-3 ml-auto" />
                </div>
                <div className="row ml-4 mr-4">
                <div className="number-acc">5</div>
                  <div className="mt-3 ml-1">
                    <span>Honors & Awards</span>
                    <span>Expert Indonesia, Expert Indonesia, Expert Indonesia. <br/> Secretary of Brick Laying Competition, Best Research Interst Grop Topic</span>
                  </div>
                  <FaAngleDown className="mt-3 ml-auto"/>
                </div>
              </div>
              </div>
            </div>

            <div className="card mt-4 mb-4">
              <span className="ml-4">Interest</span>
              <div className="row ml-1 mr-4">
                <div>
                  <div className="row ml-4 mr-4">
                    <div>
                      <div>Rakuten</div>
                      <div>65,303 followrs</div>
                    </div>
                  </div>
                  <div className="row ml-4 mr-4">
                   <div>
                    <div>QNB Group</div>
                    <div>87,140 followers</div>
                   </div>
                  </div>
                  <div className="row ml-4 mr-4">
                    <div>
                    <div>Bill Gets</div>
                    <div>16,436,189 followers</div>
                    </div>
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="row ml-4 mr-4">
                    <div>
                    <div>Bina Nusantara</div>
                    <div>9,303 followrs</div>
                    </div>
                  </div>
                  <div className="row ml-4 mr-4">
                    <div>
                    <div>Unviersitas Binus</div>
                    <div>47,140 followers</div>
                    </div>
                  </div>
                  <div className="row ml-4 mr-4">
                    <div>
                    <div>Unvierista Binus</div>
                    <div>59,189 followers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
     );
   }

}

export default Profile;
