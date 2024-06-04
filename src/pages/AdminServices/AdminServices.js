//css
import './AdminServices.css';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
//img
import logo_pet_health_care from '../../assets/images/img_AdminServices/logo_pethealthcare.png';
import icon_search from '../../assets/images/img_AdminServices/icon_search.svg';
//mui
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
function AdminServices() {
    return (

        <div className="Admin-Services container-fluid">
            <div className="row">

                <div className="Admin-Services-Header row">
                    <div className='Admin-Services-Header-Logo col-md-2'>
                        <img className="Admin-Services-Logo " src={logo_pet_health_care} alt="logo-pet" />
                    </div>
                    <div className='Admin-Services-Header-Account-Wrapper col-md-10'>
                        <div className="Admin-Services-Header-Account">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                            <div className="Admin-Services-Header-Account-Text"> Hi Admin</div>
                        </div>
                    </div>

                    <div className="Admin-Services-Content row">
                        <div className="Admin-Services-Navigate col-md-2">
                            <div className="Admin-Services-Navigate-Text">
                                <div className="Admin-Services-Navigate-Dashboard">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                                    </svg>
                                    <div className=" Admin-Services-Navigate-Text-Dashboard"> DashBoard </div>
                                </div>
                                <div className="Admin-Services-Navigate-Text-Rest">
                                    <div className='Admin-Services-Navigate-Text-Rest-Menu'>Account</div>
                                    <div className='Admin-Services-Navigate-Text-Rest-Menu'>Booking</div>
                                    <div className='Admin-Services-Navigate-Text-Rest-Menu'>Services</div>
                                    <div className='Admin-Services-Navigate-Text-Rest-Menu'>Settings</div>
                                </div>
                            </div>
                            <div className="Admin-Services-Navigate-Logout">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="42" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                                    <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                                </svg>
                                <span>
                                    Logout
                                </span>
                            </div>
                        </div>


                        <div className="Admin-Services-Main col-md-10">
                            <div className="Admin-Services-Main_Title">
                                <div className="Admin-Services-Main_Title-Left">
                                    <h2 className='Admin-Services-Main_Title-Left-Intro'>Hi, welcome back!</h2>
                                    <p className='Admin-Services-Main_Title-Left-text'>Sales monitoring dashboard template.</p>
                                </div>
                                <div className="Admin-Services-Main_Title-Right">
                                    <label className='Admin-Services-title-Star'>Customer Ratings</label>
                                    <div className='Admin-Services-Star'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="#fbbc0b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="#fbbc0b" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="#97a3b9" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="#97a3b9" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" fill="#97a3b9" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <span>(14.000)</span>
                                    </div>
                                </div>
                            </div>


                            <div className="Admin-Services-Main-ChooseDate">
                                <div className="Admin-Services-Main-ChooseDate_Text">Choose Date:</div>
                                <input type="date"
                                    id="start"
                                    name="trip-start"
                                    value="2022-07-22"
                                    min="2018-01-01" max="2026-12-31" />
                            </div>


                            <div className="Admin-Services-Main-Header row">
                                <div className="Admin-Services-Main-Header-Income col-md-3">
                                    <div className="Admin-Services-Main-Header-Note"> Daily income </div>
                                    <div className="Admin-Services-Main-Header-Money"> $5,678.90 </div>
                                    <div className="Admin-Services-Main-Header-Percent"> +20% day over day </div>
                                </div>

                                <div className="Admin-Services-Main-Header-Income col-md-3">
                                    <div className="Admin-Services-Main-Header-Note">Weekly income </div>
                                    <div className="Admin-Services-Main-Header-Money"> $45,678.90 </div>
                                    <div className="Admin-Services-Main-Header-Percent"> +10% day over week </div>
                                </div>

                                <div className="Admin-Services-Main-Header-Income col-md-3">
                                    <div className="Admin-Services-Main-Header-Note"> Monthly income </div>
                                    <div className="Admin-Services-Main-Header-Money"> $230,678.90 </div>
                                    <div className="Admin-Services-Main-Header-Percent"> +23% day over month </div>
                                </div>

                                <div className="Admin-Services-Main-Header-Income col-md-3">
                                    <div className="Admin-Services-Main-Header-Note"> Total </div>
                                    <div className="Admin-Services-Main-Header-Money"> $5,678.90 </div>
                                    <div className="Admin-Services-Main-Header-Percent"> +20% day over day </div>
                                </div>
                            </div>

                            <div className="Admin-Services-Main-Table-Wrapper">
                                <div className='Admin-Services-Main-Table'>
                                    <div className='Admin-Services-Main-Table-Title'>
                                        Services List
                                    </div>
                                    <div className='Admin-Services-Main-Table-Title-Text'>
                                        Services Information
                                    </div>
                                    <div className="Admin-Services-Main-Filter-Add">
                                        <div className="Admin-Services-Main-Search">
                                            <input type="text" placeholder="Search Name" className="Admin-Services-Main-Search-Input " />
                                            <button className="Admin-Services-Main-Search-Button"> <img src={icon_search} alt="" /> </button>
                                        </div>
                                        <div className="Admin-Services-Add-Services">
                                            <button type="button" className="Admin-Services-add-pet-btn" data-bs-toggle="modal" data-bs-target="#Admin-Services-exampleModal">
                                                Add Services </button>

                                            <div className="modal fade" id="Admin-Services-exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabelEdit" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabelEdit">Add Services</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="Admin-Services-modal-update-name">
                                                                <div className="Admin-Services-modal-initials"> Services Name: <input className="Admin-Services-input" placeholder="Services" /> </div>
                                                            </div>
                                                            <div className="Admin-Services-modal-update-name">
                                                                <div className="Admin-Services-modal-initials"> Services Description: <input className="Admin-Services-input" placeholder="Description" /> </div>
                                                            </div>
                                                            <div className="Admin-Services-modal-update-name">
                                                                <div className="Admin-Services-modal-initials"> Services Price: <input className="Admin-Services-input" placeholder="Price" /> </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-success">Add </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="Admin-Services-Main-Table-Header">
                                        <div className="Admin-Services-Main-Table-Header-Title "> Services ID </div>
                                        <div className="Admin-Services-Main-Table-Header-Title "> Name Services</div>
                                        <div className="Admin-Services-Main-Table-Header-Title "> Description </div>
                                        <div className="Admin-Services-Main-Table-Header-Title "> Price </div>
                                        <div className="Admin-Services-Main-Table-Header-Title-Btn "> Action </div>


                                    </div>

                                    <div className="Admin-Services-Main-Table-Content-Row-Wrapper">
                                        <div className="Admin-Services-Main-Table-Content-Row "> S00001 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Vaccinations </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Services Description </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> $ 60 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row ">


                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalEdit" >
                                                    <BorderColorOutlinedIcon
                                                        sx={{
                                                            color: blue[400],
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabelEdit" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelEdit">Update Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title-name"> Name </div>
                                                                    <div className="Admin-Services-modal-update" ><div className="Admin-Services-modal-initials">Old name: </div> Vaccinations </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New name: </div><input className="Admin-Services-input" placeholder="Name" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Description: </div> Services Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New Description: </div> <input className="Admin-Services-input" type="email" placeholder="Description" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Price </div>

                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Price: </div> $ 60</div>
                                                                    <div className="Admin-Services-modal-update"  > <div className="Admin-Services-modal-initials">New Price: </div> <input className="Admin-Services-input-phone" placeholder="$$$" /> </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-success">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                                    <DeleteOutlineIcon
                                                        sx={{
                                                            color: red[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalDelete" tabIndex="-1" aria-labelledby="exampleModalLabelDelete" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelDelete">Delete Account</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-danger">Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalMore" >
                                                    <MoreVertOutlinedIcon
                                                        sx={{
                                                            color: green[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalMore" tabIndex="-1" aria-labelledby="exampleModalLabelMore" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelMore">Account Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="Admin-Services-Main-Table-Content-Row-Wrapper">
                                        <div className="Admin-Services-Main-Table-Content-Row "> S00001 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Vaccinations </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Services Description </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> $ 60 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row ">


                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalEdit" >
                                                    <BorderColorOutlinedIcon
                                                        sx={{
                                                            color: blue[400],
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabelEdit" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelEdit">Update Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title-name"> Name </div>
                                                                    <div className="Admin-Services-modal-update" ><div className="Admin-Services-modal-initials">Old name: </div> Vaccinations </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New name: </div><input className="Admin-Services-input" placeholder="Name" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Description: </div> Services Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New Description: </div> <input className="Admin-Services-input" type="email" placeholder="Description" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Price </div>

                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Price: </div> $ 60</div>
                                                                    <div className="Admin-Services-modal-update"  > <div className="Admin-Services-modal-initials">New Price: </div> <input className="Admin-Services-input-phone" placeholder="$$$" /> </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-success">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                                    <DeleteOutlineIcon
                                                        sx={{
                                                            color: red[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalDelete" tabIndex="-1" aria-labelledby="exampleModalLabelDelete" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelDelete">Delete Account</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-danger">Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalMore" >
                                                    <MoreVertOutlinedIcon
                                                        sx={{
                                                            color: green[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalMore" tabIndex="-1" aria-labelledby="exampleModalLabelMore" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelMore">Account Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="Admin-Services-Main-Table-Content-Row-Wrapper">
                                        <div className="Admin-Services-Main-Table-Content-Row "> S00001 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Vaccinations </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Services Description </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> $ 60 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row ">


                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalEdit" >
                                                    <BorderColorOutlinedIcon
                                                        sx={{
                                                            color: blue[400],
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabelEdit" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelEdit">Update Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title-name"> Name </div>
                                                                    <div className="Admin-Services-modal-update" ><div className="Admin-Services-modal-initials">Old name: </div> Vaccinations </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New name: </div><input className="Admin-Services-input" placeholder="Name" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Description: </div> Services Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New Description: </div> <input className="Admin-Services-input" type="email" placeholder="Description" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Price </div>

                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Price: </div> $ 60</div>
                                                                    <div className="Admin-Services-modal-update"  > <div className="Admin-Services-modal-initials">New Price: </div> <input className="Admin-Services-input-phone" placeholder="$$$" /> </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-success">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                                    <DeleteOutlineIcon
                                                        sx={{
                                                            color: red[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalDelete" tabIndex="-1" aria-labelledby="exampleModalLabelDelete" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelDelete">Delete Account</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-danger">Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalMore" >
                                                    <MoreVertOutlinedIcon
                                                        sx={{
                                                            color: green[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalMore" tabIndex="-1" aria-labelledby="exampleModalLabelMore" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelMore">Account Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="Admin-Services-Main-Table-Content-Row-Wrapper">
                                        <div className="Admin-Services-Main-Table-Content-Row "> S00001 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Vaccinations </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Services Description </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> $ 60 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row ">


                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalEdit" >
                                                    <BorderColorOutlinedIcon
                                                        sx={{
                                                            color: blue[400],
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabelEdit" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelEdit">Update Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title-name"> Name </div>
                                                                    <div className="Admin-Services-modal-update" ><div className="Admin-Services-modal-initials">Old name: </div> Vaccinations </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New name: </div><input className="Admin-Services-input" placeholder="Name" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Description: </div> Services Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New Description: </div> <input className="Admin-Services-input" type="email" placeholder="Description" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Price </div>

                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Price: </div> $ 60</div>
                                                                    <div className="Admin-Services-modal-update"  > <div className="Admin-Services-modal-initials">New Price: </div> <input className="Admin-Services-input-phone" placeholder="$$$" /> </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-success">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                                    <DeleteOutlineIcon
                                                        sx={{
                                                            color: red[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalDelete" tabIndex="-1" aria-labelledby="exampleModalLabelDelete" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelDelete">Delete Account</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-danger">Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalMore" >
                                                    <MoreVertOutlinedIcon
                                                        sx={{
                                                            color: green[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalMore" tabIndex="-1" aria-labelledby="exampleModalLabelMore" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelMore">Account Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="Admin-Services-Main-Table-Content-Row-Wrapper">
                                        <div className="Admin-Services-Main-Table-Content-Row "> S00001 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Vaccinations </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Services Description </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> $ 60 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row ">


                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalEdit" >
                                                    <BorderColorOutlinedIcon
                                                        sx={{
                                                            color: blue[400],
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabelEdit" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelEdit">Update Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title-name"> Name </div>
                                                                    <div className="Admin-Services-modal-update" ><div className="Admin-Services-modal-initials">Old name: </div> Vaccinations </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New name: </div><input className="Admin-Services-input" placeholder="Name" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Description: </div> Services Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New Description: </div> <input className="Admin-Services-input" type="email" placeholder="Description" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Price </div>

                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Price: </div> $ 60</div>
                                                                    <div className="Admin-Services-modal-update"  > <div className="Admin-Services-modal-initials">New Price: </div> <input className="Admin-Services-input-phone" placeholder="$$$" /> </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-success">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                                    <DeleteOutlineIcon
                                                        sx={{
                                                            color: red[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalDelete" tabIndex="-1" aria-labelledby="exampleModalLabelDelete" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelDelete">Delete Account</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-danger">Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalMore" >
                                                    <MoreVertOutlinedIcon
                                                        sx={{
                                                            color: green[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalMore" tabIndex="-1" aria-labelledby="exampleModalLabelMore" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelMore">Account Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="Admin-Services-Main-Table-Content-Row-Wrapper">
                                        <div className="Admin-Services-Main-Table-Content-Row "> S00001 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Vaccinations </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Services Description </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> $ 60 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row ">


                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalEdit" >
                                                    <BorderColorOutlinedIcon
                                                        sx={{
                                                            color: blue[400],
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabelEdit" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelEdit">Update Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title-name"> Name </div>
                                                                    <div className="Admin-Services-modal-update" ><div className="Admin-Services-modal-initials">Old name: </div> Vaccinations </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New name: </div><input className="Admin-Services-input" placeholder="Name" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Description: </div> Services Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New Description: </div> <input className="Admin-Services-input" type="email" placeholder="Description" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Price </div>

                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Price: </div> $ 60</div>
                                                                    <div className="Admin-Services-modal-update"  > <div className="Admin-Services-modal-initials">New Price: </div> <input className="Admin-Services-input-phone" placeholder="$$$" /> </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-success">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                                    <DeleteOutlineIcon
                                                        sx={{
                                                            color: red[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalDelete" tabIndex="-1" aria-labelledby="exampleModalLabelDelete" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelDelete">Delete Account</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-danger">Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalMore" >
                                                    <MoreVertOutlinedIcon
                                                        sx={{
                                                            color: green[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalMore" tabIndex="-1" aria-labelledby="exampleModalLabelMore" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelMore">Account Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="Admin-Services-Main-Table-Content-Row-Wrapper">
                                        <div className="Admin-Services-Main-Table-Content-Row "> S00001 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Vaccinations </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Services Description </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> $ 60 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row ">


                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalEdit" >
                                                    <BorderColorOutlinedIcon
                                                        sx={{
                                                            color: blue[400],
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabelEdit" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelEdit">Update Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title-name"> Name </div>
                                                                    <div className="Admin-Services-modal-update" ><div className="Admin-Services-modal-initials">Old name: </div> Vaccinations </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New name: </div><input className="Admin-Services-input" placeholder="Name" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Description: </div> Services Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New Description: </div> <input className="Admin-Services-input" type="email" placeholder="Description" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Price </div>

                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Price: </div> $ 60</div>
                                                                    <div className="Admin-Services-modal-update"  > <div className="Admin-Services-modal-initials">New Price: </div> <input className="Admin-Services-input-phone" placeholder="$$$" /> </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-success">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                                    <DeleteOutlineIcon
                                                        sx={{
                                                            color: red[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalDelete" tabIndex="-1" aria-labelledby="exampleModalLabelDelete" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelDelete">Delete Account</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-danger">Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalMore" >
                                                    <MoreVertOutlinedIcon
                                                        sx={{
                                                            color: green[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalMore" tabIndex="-1" aria-labelledby="exampleModalLabelMore" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelMore">Account Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="Admin-Services-Main-Table-Content-Row-Wrapper">
                                        <div className="Admin-Services-Main-Table-Content-Row "> S00001 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Vaccinations </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Services Description </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> $ 60 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row ">


                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalEdit" >
                                                    <BorderColorOutlinedIcon
                                                        sx={{
                                                            color: blue[400],
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabelEdit" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelEdit">Update Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title-name"> Name </div>
                                                                    <div className="Admin-Services-modal-update" ><div className="Admin-Services-modal-initials">Old name: </div> Vaccinations </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New name: </div><input className="Admin-Services-input" placeholder="Name" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Description: </div> Services Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New Description: </div> <input className="Admin-Services-input" type="email" placeholder="Description" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Price </div>

                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Price: </div> $ 60</div>
                                                                    <div className="Admin-Services-modal-update"  > <div className="Admin-Services-modal-initials">New Price: </div> <input className="Admin-Services-input-phone" placeholder="$$$" /> </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-success">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                                    <DeleteOutlineIcon
                                                        sx={{
                                                            color: red[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalDelete" tabIndex="-1" aria-labelledby="exampleModalLabelDelete" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelDelete">Delete Account</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-danger">Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalMore" >
                                                    <MoreVertOutlinedIcon
                                                        sx={{
                                                            color: green[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalMore" tabIndex="-1" aria-labelledby="exampleModalLabelMore" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelMore">Account Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="Admin-Services-Main-Table-Content-Row-Wrapper">
                                        <div className="Admin-Services-Main-Table-Content-Row "> S00001 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Vaccinations </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Services Description </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> $ 60 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row ">


                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalEdit" >
                                                    <BorderColorOutlinedIcon
                                                        sx={{
                                                            color: blue[400],
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabelEdit" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelEdit">Update Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title-name"> Name </div>
                                                                    <div className="Admin-Services-modal-update" ><div className="Admin-Services-modal-initials">Old name: </div> Vaccinations </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New name: </div><input className="Admin-Services-input" placeholder="Name" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Description: </div> Services Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New Description: </div> <input className="Admin-Services-input" type="email" placeholder="Description" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Price </div>

                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Price: </div> $ 60</div>
                                                                    <div className="Admin-Services-modal-update"  > <div className="Admin-Services-modal-initials">New Price: </div> <input className="Admin-Services-input-phone" placeholder="$$$" /> </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-success">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                                    <DeleteOutlineIcon
                                                        sx={{
                                                            color: red[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalDelete" tabIndex="-1" aria-labelledby="exampleModalLabelDelete" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelDelete">Delete Account</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-danger">Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalMore" >
                                                    <MoreVertOutlinedIcon
                                                        sx={{
                                                            color: green[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalMore" tabIndex="-1" aria-labelledby="exampleModalLabelMore" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelMore">Account Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="Admin-Services-Main-Table-Content-Row-Wrapper">
                                        <div className="Admin-Services-Main-Table-Content-Row "> S00001 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Vaccinations </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> Services Description </div>
                                        <div className="Admin-Services-Main-Table-Content-Row "> $ 60 </div>
                                        <div className="Admin-Services-Main-Table-Content-Row ">


                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalEdit" >
                                                    <BorderColorOutlinedIcon
                                                        sx={{
                                                            color: blue[400],
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabelEdit" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelEdit">Update Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title-name"> Name </div>
                                                                    <div className="Admin-Services-modal-update" ><div className="Admin-Services-modal-initials">Old name: </div> Vaccinations </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New name: </div><input className="Admin-Services-input" placeholder="Name" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Description: </div> Services Description </div>
                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">New Description: </div> <input className="Admin-Services-input" type="email" placeholder="Description" /> </div>
                                                                </div>
                                                                <div className="Admin-Services-modal-update-name">
                                                                    <div className="Admin-Services-modal-title"> Price </div>

                                                                    <div className="Admin-Services-modal-update"  ><div className="Admin-Services-modal-initials">Old Price: </div> $ 60</div>
                                                                    <div className="Admin-Services-modal-update"  > <div className="Admin-Services-modal-initials">New Price: </div> <input className="Admin-Services-input-phone" placeholder="$$$" /> </div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-success">Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalDelete">
                                                    <DeleteOutlineIcon
                                                        sx={{
                                                            color: red[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalDelete" tabIndex="-1" aria-labelledby="exampleModalLabelDelete" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelDelete">Delete Account</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" className="btn btn-danger">Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>

                                            <span className="Admin-Services-Main-Table-Content-Btn_Wrapper ">
                                                <button type="button" className="Admin-Services-Main-Table-Content-Btn" data-bs-toggle="modal" data-bs-target="#exampleModalMore" >
                                                    <MoreVertOutlinedIcon
                                                        sx={{
                                                            color: green[400]
                                                        }}
                                                    />
                                                </button>

                                                <div className="modal fade" id="exampleModalMore" tabIndex="-1" aria-labelledby="exampleModalLabelMore" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabelMore">Account Information</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="Admin-Services-modal-more" > <div className="Admin-Services-modal-initials">Name: </div> Vaccinations </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Description: </div> Services Description </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Phone number: </div> 0777123456 </div>
                                                                <div className="Admin-Services-modal-more" ><div className="Admin-Services-modal-initials">Price: </div> $ 60 </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>




                                    <div className='Admin-Services-Pagination'>
                                        <Stack spacing={2}>
                                            <Pagination count={10} />
                                        </Stack>
                                    </div>
                                </div>
                            </div>


                        </div>



                    </div>
                </div>

            </div>

        </div>

    )


        ;
}

export default AdminServices;