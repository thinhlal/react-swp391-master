import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProfilePet.css';
// component
import Header from '../../components/User/Header/Header';
import Footer from '../../components/User/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimationComponent from '../../components/Animation/AnimationComponent.js';
import axiosInstance from '../../utils/axiosInstance.js';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../config/firebase.js';
import { AuthContext } from '../../context/AuthContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Pagination, Stack } from '@mui/material';
import { formatDateTime } from '../../utils/formatDate.js';

function ProfilePet() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [petData, setPetData] = useState([]);
  const [medicalReport, setMedicalReport] = useState([]);
  const [petVaccine, setPetVaccine] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [newPetData, setNewPetData] = useState({
    name: '',
    birthday: '',
    image: '',
  });
  const [loading, setLoading] = useState(true);
  const [currentPageMedical, setCurrentPageMedical] = useState(1);
  const itemsPerPageMedical = 5;
  const [currentPageVaccine, setCurrentPageVaccine] = useState(1);
  const itemsPerPageVaccine = 5;

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const petID = params.get('petID');
        const response = await axiosInstance.get(
          `${process.env.REACT_APP_API_URL}/pet/getPetID/${petID}`,
        );
        const getPetInfo = response.data[0];
        setPetData(getPetInfo);
        setMedicalReport(getPetInfo.medicalReportDetails);
        setPetVaccine(getPetInfo.vaccinationPetDetails);

        const { name, birthday } = response.data[0];
        setNewPetData({
          name: name,
          birthday: birthday.split('T')[0],
          image: '',
        });
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, [location.search]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewPetData({ ...newPetData, [name]: value });
  };

  const handleFileChange = e => {
    const { name, files } = e.target;
    setImageFile(files[0]);
    setNewPetData({ ...newPetData, [name]: files[0] });
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    let imageUrl = '';
    if (imageFile) {
      const timestamp = Date.now();
      const uniqueFilename = `${timestamp}_${imageFile.name}`;
      const imageRef = ref(storage, `pets/${user.accountID}/${uniqueFilename}`);
      await uploadBytes(imageRef, imageFile);
      imageUrl = await getDownloadURL(imageRef);
    }
    const petDataUpdate = { ...newPetData, image: imageUrl };
    const params = new URLSearchParams(location.search);
    const petID = params.get('petID');
    try {
      await axiosInstance.patch(
        `${process.env.REACT_APP_API_URL}/pet/updatePet/${petID}`,
        { petDataUpdate },
      );
      const response = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/pet/getPetID/${petID}`,
      );
      setPetData(response.data[0]);
    } catch (error) {
      console.error('Error updating pet data:', error);
    }
    setIsEditing(false);
  };

  if (loading) {
    return <AnimationComponent />;
  }

  const handleViewStatusClick = () => {
    navigate('/pet-status', { state: { petData, user } });
  };

  const handlePageChangeMedical = (event, value) => {
    setCurrentPageMedical(value);
  };

  const handlePageChangeVaccine = (event, value) => {
    setCurrentPageVaccine(value);
  };

  const startIndexMedical = (currentPageMedical - 1) * itemsPerPageMedical;
  const currentMedicals = medicalReport.slice(
    startIndexMedical,
    startIndexMedical + itemsPerPageMedical,
  );
  const totalPagesMedical = Math.ceil(
    medicalReport.length / itemsPerPageMedical,
  );

  const startIndexVaccinee = (currentPageVaccine - 1) * itemsPerPageVaccine;
  const currentVaccines = petVaccine.slice(
    startIndexVaccinee,
    startIndexVaccinee + itemsPerPageVaccine,
  );
  const totalPagesVaccine = Math.ceil(petVaccine.length / itemsPerPageVaccine);

  return (
    <div className='main-container-pet-profile'>
      <Header />
      <div className='container-pet-profile'>
        <div className='sidebar-pet-profile'>
          <div className='pet-avatar'>
            <img
              src={petData.image}
              alt='Pet Avatar'
            />
          </div>
          <div className='pet-parent'>
            <div className='sub-title-info-pet'>
              <strong>Pet Parent</strong>{' '}
            </div>
            <div className='customer-name-title'>
              {user.customerDetails[0].name}
            </div>
            <div className='sub-title-info-pet'>
              <strong>ID:&nbsp;</strong>{' '}
              <span className='ID-pet-profile'>{petData.petID}</span>
            </div>
            <div className='view-status-button'>
              <button
                className='btn btn-info'
                onClick={handleViewStatusClick}
              >
                <i className='bi bi-needle'></i> View Status
              </button>
            </div>
          </div>
        </div>
        <div className='main-content-pet'>
          <div className='pet-info'>
            <div className='sub-title-info-pet-line'>My Pet Info</div>
            <div className='main-edit-button-pet-info'>
              <div className='pet-details-profile'>
                <div className='title-pet-profile'>
                  <span className='sub-title-info-pet'>Name:&nbsp;</span>{' '}
                  {petData.name}
                </div>
                <div className='title-pet-profile'>
                  <span className='sub-title-info-pet'>Birthday:&nbsp;</span>
                  {petData.birthday.split('T')[0]}
                </div>
                <div className='title-pet-profile'>
                  <span className='sub-title-info-pet'>Gender:&nbsp;</span>
                  {petData.gender === 'MALE' ? (
                    <span>Male</span>
                  ) : (
                    <span>Female</span>
                  )}
                </div>
                <div className='title-pet-profile'>
                  <span className='sub-title-info-pet'>Type Of Pet:&nbsp;</span>
                  {petData.petType === 'DOG' ? (
                    <span>Dog</span>
                  ) : (
                    <span>Cat</span>
                  )}
                </div>
              </div>
              {!isEditing && (
                <div>
                  <button
                    onClick={handleEditClick}
                    className='edit-button-pet-info'
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>

            {isEditing && (
              <form
                onSubmit={handleFormSubmit}
                className='edit-form'
              >
                <label>
                  Name:
                  <input
                    type='text'
                    name='name'
                    value={newPetData.name}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  BirthDay:
                  <input
                    type='date'
                    name='birthday'
                    value={newPetData.birthday}
                    onChange={handleInputChange}
                  />
                </label>
                <label className='select-pet-type'>
                  Image:
                  <input
                    type='file'
                    name='image'
                    accept='image/png, image/jpeg, image/gif'
                    onChange={handleFileChange}
                  ></input>
                </label>
                <button
                  type='submit'
                  className='save-button'
                >
                  Save
                </button>
                <button
                  type='button'
                  onClick={handleCloseClick}
                  className='close-button'
                >
                  Close
                </button>
              </form>
            )}
          </div>

          <div className='medical-info'>
            <div className='sub-title-info-pet-line'>My Pet Medical Info</div>
            <div className='main-add-button-medical'></div>
            <table>
              <thead>
                <tr>
                  <th>Medical ReportID</th>
                  <th>BookingID</th>
                  <th>Date</th>
                  <th>Diagnosis</th>
                  <th>Notes</th>
                  <th>More</th>
                </tr>
              </thead>
              <tbody>
                {currentMedicals.length === 0 ? (
                  <tr>
                    <td colSpan='6'>No medical information available.</td>
                  </tr>
                ) : (
                  currentMedicals.map((reportInfo, index) => (
                    <tr key={index}>
                      <td>{reportInfo.medicalReportID}</td>
                      <td>{reportInfo.bookingID}</td>
                      <td>{formatDateTime(reportInfo.date)}</td>
                      <td>{reportInfo.diagnosis}</td>
                      <td>{reportInfo.notes}</td>
                      <td>
                        <button
                          type='button'
                          className='btn btn-primary'
                          data-bs-toggle='modal'
                          data-bs-target={`#staticBackdropMedical-${index}`}
                        >
                          View
                        </button>

                        <div
                          className='modal fade'
                          id={`staticBackdropMedical-${index}`}
                          data-bs-backdrop='static'
                          data-bs-keyboard='false'
                          tabIndex='-1'
                          aria-labelledby='staticBackdropLabel'
                          aria-hidden='true'
                        >
                          <div className='modal-dialog'>
                            <div className='modal-content'>
                              <div className='modal-header'>
                                <h5
                                  className='modal-title'
                                  id='staticBackdropLabel'
                                >
                                  Medical Report Details
                                </h5>
                                <button
                                  type='button'
                                  className='btn-close'
                                  data-bs-dismiss='modal'
                                  aria-label='Close'
                                ></button>
                              </div>
                              <div className='modal-body'>
                                <p>
                                  <strong>Medical ReportID:</strong>{' '}
                                  {reportInfo.medicalReportID}
                                </p>
                                <p>
                                  <strong>Diagnosis:</strong>{' '}
                                  {reportInfo.diagnosis}
                                </p>
                                <p>
                                  <strong>Treatment:</strong>{' '}
                                  {reportInfo.treatment}
                                </p>
                                <p>
                                  <strong>Prescription:</strong>{' '}
                                  {reportInfo.prescription}
                                </p>
                                <p>
                                  <strong>Notes:</strong> {reportInfo.notes}
                                </p>
                              </div>
                              <div className='modal-footer'>
                                <button
                                  type='button'
                                  className='btn btn-secondary'
                                  data-bs-dismiss='modal'
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {currentMedicals.length > 0 && totalPagesMedical > 1 && (
              <Stack
                spacing={2}
                alignItems='center'
                marginTop={2}
                padding={0}
              >
                <Pagination
                  count={totalPagesMedical}
                  page={currentPageMedical}
                  onChange={handlePageChangeMedical}
                  color='primary'
                />
              </Stack>
            )}
          </div>

          <div className='vaccination-info'>
            <div className='sub-title-info-pet-line'>
              My Pet Vaccination Info
            </div>
            <table>
              <thead>
                <tr>
                  <th>Date Given</th>
                  <th className='vaccines-column'>Vaccines</th>
                  <th>Next Vaccination Date</th>
                  <th>More</th>
                </tr>
              </thead>
              <tbody>
                {currentVaccines.length === 0 ? (
                  <tr>
                    <td colSpan='6'>You didn't have any vaccination yet.</td>
                  </tr>
                ) : (
                  currentVaccines.map((vaccine, index) => (
                    <tr key={index}>
                      <td>{formatDateTime(vaccine.dateGiven)}</td>
                      <td>{vaccine.vaccinationDetails.name}</td>
                      <td>
                        {vaccine.vaccinationDetails.nextDate > 0
                          ? `${parseInt(vaccine.dateGiven.split('-')[0]) + vaccine.vaccinationDetails.nextDate}`
                          : 'Not available'}
                      </td>
                      <td>
                        <button
                          type='button'
                          className='btn btn-primary'
                          data-bs-toggle='modal'
                          data-bs-target={`#staticBackdropVaccine-${index}`}
                        >
                          View
                        </button>

                        <div
                          className='modal fade'
                          id={`staticBackdropVaccine-${index}`}
                          data-bs-backdrop='static'
                          data-bs-keyboard='false'
                          tabIndex='-1'
                          aria-labelledby='staticBackdropLabel'
                          aria-hidden='true'
                        >
                          <div className='modal-dialog'>
                            <div className='modal-content'>
                              <div className='modal-header'>
                                <h5
                                  className='modal-title'
                                  id='staticBackdropLabel'
                                >
                                  Vaccination Details
                                </h5>
                                <button
                                  type='button'
                                  className='btn-close'
                                  data-bs-dismiss='modal'
                                  aria-label='Close'
                                ></button>
                              </div>
                              <div className='modal-body'>
                                <p>
                                  <strong>Date Given:</strong>{' '}
                                  {`${formatDateTime(vaccine.dateGiven)}`}
                                </p>
                                <p>
                                  <strong>Vaccines:</strong>{' '}
                                  {vaccine.vaccinationDetails.name}
                                </p>
                                <p>
                                  <strong>Next Vaccination Date:</strong>{' '}
                                  {`${parseInt(vaccine.dateGiven.split('-')[0]) + vaccine.vaccinationDetails.nextDate}`}
                                </p>
                                <p>
                                  <strong>Vaccination Notes:</strong>{' '}
                                  {vaccine.vaccinationDetails.notes}
                                </p>
                              </div>
                              <div className='modal-footer'>
                                <button
                                  type='button'
                                  className='btn btn-secondary'
                                  data-bs-dismiss='modal'
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {currentVaccines.length > 0 && totalPagesVaccine > 1 && (
              <Stack
                spacing={2}
                alignItems='center'
                marginTop={2}
                marginBottom={2}
                padding={0}
              >
                <Pagination
                  count={totalPagesVaccine}
                  page={currentPageVaccine}
                  onChange={handlePageChangeVaccine}
                  color='primary'
                />
              </Stack>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePet;
