import './AdminAccount.css';
// React
import React, { useState, useRef, useEffect } from 'react';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
// Img
import icon_search from '../../assets/images/img_AdminAccount/icon_search.svg';
import Statistic from '../../components/Admin/Statistics/Statistics';
//Components
import Header from '../../components/Admin/Header/Header';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';
import Pagination from '@mui/material/Pagination';

// MUI
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Switch from '@mui/joy/Switch';
import { blue, green } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import axiosInstance from '../../utils/axiosInstance';

function AdminAccount() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [currentAccount, setCurrentAccount] = useState(null);
  const [accountData, setAccountData] = useState([]);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axiosInstance.get(
          `${process.env.REACT_APP_API_URL}/admin/getAllAccounts`,
        );
        const sortDate = response.data.sort((a, b) =>
          b.accountID.localeCompare(a.accountID),
        );
        setAccountData(sortDate);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooking();
  }, []);

  const [newAccount, setNewAccount] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
    phone: '',
    role: 'Customer',
  });

  const [editAccount, setEditAccount] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
  });

  const [errors, setErrors] = useState({});
  const modalRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleRoleFilterChange = event => {
    setRoleFilter(event.target.value);
  };

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = password => {
    const re = /^.{8,}$/;
    return re.test(String(password));
  };

  const validatePhone = phone => {
    const re = /^[0-9]{9,10}$/;
    return re.test(String(phone));
  };

  const handleSaveChanges = async () => {
    const newErrors = {};

    if (!editAccount.name) newErrors.name = 'Name is required';
    if (!editAccount.email) newErrors.email = 'Email is required';
    else if (!validateEmail(editAccount.email))
      newErrors.email = 'Invalid email format - Ex: Example@gmail.com';
    if (!editAccount.phone) newErrors.phone = 'Phone number is required';
    else if (!validatePhone(editAccount.phone))
      newErrors.phone = 'Invalid phone number format';
    let currentEmail;
    let currentPhone;

    if (editAccount.role === 'Customer') {
      currentEmail = accountData.find(
        account => account.accountID === editAccount.accountID,
      )?.customerDetails[0]?.email;
      currentPhone = accountData.find(
        account => account.accountID === editAccount.accountID,
      )?.customerDetails[0]?.phone;
    } else if (editAccount.role === 'Staff') {
      currentEmail = accountData.find(
        account => account.accountID === editAccount.accountID,
      )?.staffDetails[0]?.email;
      currentPhone = accountData.find(
        account => account.accountID === editAccount.accountID,
      )?.staffDetails[0]?.phone;
    }
    if (editAccount.role === 'Doctor') {
      currentEmail = accountData.find(
        account => account.accountID === editAccount.accountID,
      )?.doctorDetails[0]?.email;
      currentPhone = accountData.find(
        account => account.accountID === editAccount.accountID,
      )?.doctorDetails[0]?.phone;
    }
    if (editAccount.role === 'Admin') {
      currentEmail = accountData.find(
        account => account.accountID === editAccount.accountID,
      )?.adminDetails[0]?.email;
      currentPhone = accountData.find(
        account => account.accountID === editAccount.accountID,
      )?.adminDetails[0]?.phone;
    }

    if (editAccount.email !== currentEmail) {
      const emailExists = await checkEmailExists(editAccount.email);
      if (emailExists) newErrors.email = 'Email already exists';
    }

    if (editAccount.phone !== currentPhone) {
      const phoneExists = await checkPhoneExists(editAccount.phone);
      if (phoneExists) newErrors.phone = 'Phone number already exists';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    await axiosInstance.post(
      `${process.env.REACT_APP_API_URL}/admin/updateAccountInfo`,
      editAccount,
    );
    const response = await axiosInstance.get(
      `${process.env.REACT_APP_API_URL}/admin/getAllAccounts`,
    );
    const sortDate = response.data.sort((a, b) =>
      b.accountID.localeCompare(a.accountID),
    );
    setAccountData(sortDate);
    setErrors({});
    const modal = bootstrap.Modal.getInstance(
      document.getElementById(`exampleModalEdit-${editAccount.accountID}`),
    );
    if (modal) {
      modal.hide();
    }
  };

  const openEditModal = account => {
    if (account.role === 'Customer') {
      setCurrentAccount({
        ...account?.customerDetails[0],
        role: account?.role,
      });
      setEditAccount({
        accountID: account?.customerDetails[0]?.accountID,
        name: account?.customerDetails[0]?.name,
        email: account?.customerDetails[0]?.email,
        phone: account?.customerDetails[0]?.phone,
        role: account?.role,
      });
    } else if (account.role === 'Staff') {
      setCurrentAccount({ ...account?.staffDetails[0], role: account?.role });
      setEditAccount({
        accountID: account?.staffDetails[0]?.accountID,
        name: account?.staffDetails[0]?.name,
        email: account?.staffDetails[0]?.email,
        phone: account?.staffDetails[0]?.phone,
        role: account?.role,
      });
    } else if (account.role === 'Doctor') {
      setCurrentAccount({ ...account?.doctorDetails[0], role: account?.role });
      setEditAccount({
        accountID: account?.doctorDetails[0]?.accountID,
        name: account?.doctorDetails[0]?.name,
        email: account?.doctorDetails[0]?.email,
        phone: account?.doctorDetails[0]?.phone,
        role: account?.role,
      });
    } else if (account.role === 'Admin') {
      setCurrentAccount({ ...account?.adminDetails[0], role: account?.role });
      setEditAccount({
        accountID: account?.adminDetails[0]?.accountID,
        name: account?.adminDetails[0]?.name,
        email: account?.adminDetails[0]?.email,
        phone: account?.adminDetails[0]?.phone,
        role: account?.role,
      });
    }
  };

  const handleNewAccountChange = e => {
    const { name, value } = e.target;
    setNewAccount(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditAccountChange = e => {
    const { name, value } = e.target;
    setEditAccount(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const checkUsernameExists = async username => {
    try {
      const response = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/admin/checkUsername?username=${username}`,
      );
      return response.data.exists;
    } catch (error) {
      console.error('Error checking username:', error);
      return false;
    }
  };
  const checkEmailExists = async email => {
    try {
      const response = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/admin/checkEmail?email=${email}`,
      );
      return response.data.exists;
    } catch (error) {
      console.error('Error checking email:', error);
      return false;
    }
  };

  const checkPhoneExists = async phone => {
    try {
      const response = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/admin/checkPhone?phone=${phone}`,
      );
      return response.data.exists;
    } catch (error) {
      console.error('Error checking phone:', error);
      return false;
    }
  };

  const handleAddAccount = async () => {
    try {
      const newErrors = {};

      if (!newAccount.username) newErrors.username = 'User name is required';
      if (newAccount.username.includes(' ')) {
        newErrors.username = 'Username must not contain spaces';
      }
      if (newAccount.username.length < 5) {
        newErrors.username = 'Username must be at least 5 characters long';
      }
      const usernameExists = await checkUsernameExists(newAccount.username);
      if (usernameExists) newErrors.username = 'Username already exists';

      if (!newAccount.password) newErrors.password = 'Password is required';
      else if (!validatePassword(newAccount.password))
        newErrors.password = 'The minimum length is 8 characters';
      if (!newAccount.confirmPassword)
        newErrors.confirmPassword = 'Confirm password is required';
      if (newAccount.password !== newAccount.confirmPassword)
        newErrors.confirmPassword = 'Passwords do not match';
      if (!newAccount.name) newErrors.name = 'Name is required';
      if (!newAccount.email) newErrors.email = 'Email is required';
      if (!validateEmail(newAccount.email))
        newErrors.email = 'Invalid email format - Ex: Example@gmail.com';
      else {
        const emailExists = await checkEmailExists(newAccount.email);
        if (emailExists) newErrors.email = 'Email already exists';
      }

      if (!newAccount.phone) newErrors.phone = 'Phone number is required';
      if (!validatePhone(newAccount.phone))
        newErrors.phone = 'Invalid phone number format';
      else {
        const phoneExists = await checkPhoneExists(newAccount.phone);
        if (phoneExists) newErrors.phone = 'Phone number already exists';
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      const newAccountData = {
        ...newAccount,
      };

      await axiosInstance.post(
        `${process.env.REACT_APP_API_URL}/admin/addAccount`,
        newAccountData,
      );
      const response = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/admin/getAllAccounts`,
      );
      const sortDate = response.data.sort((a, b) =>
        b.accountID.localeCompare(a.accountID),
      );
      setAccountData(sortDate);
      setErrors({});
      setNewAccount({
        username: '',
        password: '',
        confirmPassword: '',
        name: '',
        email: '',
        phone: '',
        role: 'Customer',
      });
      const modal = bootstrap.Modal.getInstance(modalRef.current);
      if (modal) {
        modal.hide();
      }
    } catch (error) {
      if (error.response) {
        setErrors({ server: error.response.data.message });
      } else {
        console.error('Error:', error);
      }
    }
  };

  const handleStatusChange = async account => {
    try {
      await axiosInstance.patch(
        `${process.env.REACT_APP_API_URL}/admin/updateAccount`,
        account,
      );
      const response = await axiosInstance.get(
        `${process.env.REACT_APP_API_URL}/admin/getAllAccounts`,
      );
      const sortDate = response.data.sort((a, b) =>
        b.accountID.localeCompare(a.accountID),
      );
      setAccountData(sortDate);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const filteredAccountData = accountData.filter(account => {
    const matchesRole = roleFilter === 'All' || account.role === roleFilter;
    const matchesSearch =
      search === '' ||
      account.username.toLowerCase().includes(search.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAccounts = filteredAccountData.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  const totalPages = Math.ceil(filteredAccountData.length / itemsPerPage);

  return (
    <div className='Admin-Account container-fluid'>
      <div className='row'>
        <Header />

        <div className='Admin-Account-Content row'>
          <div className='Admin-Account-Navigate col-md-2'>
            <Sidebar />
          </div>

          <div className='Admin-Account-Main col-md-10'>
            <Statistic />
            <div className='Admin-Account-Main-Table-Wrapper'>
              <div className='Admin-Account-Main-Table'>
                <div className='Admin-Account-Main-Table-Title'>
                  Account List
                </div>
                <div className='Admin-Account-Main-Table-Title-Text'>
                  Account Information
                </div>
                <div className='Admin-Account-Main-Filter'>
                  <div className='Admin-Account-Main-Search'>
                    <input
                      type='text'
                      placeholder='Search Name'
                      className='Admin-Account-Main-Search-Input'
                      onChange={e => setSearch(e.target.value)}
                    />
                    <button className='Admin-Account-Main-Search-Button'>
                      <img
                        src={icon_search}
                        alt=''
                      />
                    </button>
                  </div>
                  <div className='Admin-Account-Select-Role'>
                    <FilterAltIcon sx={{ fontSize: 20 }} />
                    Select role:
                    <select
                      className='Admin-Account-Select-Filter'
                      name='role'
                      onChange={handleRoleFilterChange}
                      value={roleFilter}
                    >
                      <option>All</option>
                      <option>Customer</option>
                      <option>Doctor</option>
                      <option>Staff</option>
                      <option>Admin</option>
                    </select>
                  </div>

                  <div className='Admin-Account-Add-Account'>
                    <button
                      type='button'
                      className='Admin-Account-add-pet-btn'
                      data-bs-toggle='modal'
                      data-bs-target='#Admin-Account-exampleModal'
                    >
                      Add Account
                    </button>
                    <div
                      className='modal fade'
                      id='Admin-Account-exampleModal'
                      tabIndex='-1'
                      aria-labelledby='exampleModalLabelEdit'
                      aria-hidden='true'
                      ref={modalRef}
                    >
                      <div className='modal-dialog'>
                        <div className='modal-content'>
                          <div className='modal-header'>
                            <h1
                              className='modal-title fs-5'
                              id='exampleModalLabelEdit'
                            >
                              Add Account
                            </h1>
                            <button
                              type='button'
                              className='btn-close'
                              data-bs-dismiss='modal'
                              aria-label='Close'
                              onClick={() => {
                                setErrors({});
                                setNewAccount({
                                  username: '',
                                  password: '',
                                  confirmPassword: '',
                                  name: '',
                                  email: '',
                                  phone: '',
                                  role: 'Customer',
                                });
                              }}
                            ></button>
                          </div>
                          <div className='modal-body'>
                            <div className='Admin-Account-modal-add-account'>
                              <div className='Admin-Account-modal-title-name'>
                                User name
                              </div>
                              <input
                                className='Admin-Account-input'
                                name='username'
                                value={newAccount.username}
                                onChange={handleNewAccountChange}
                                placeholder='Username'
                              />
                              {errors.username && (
                                <div className='Admin-Account-Error'>
                                  {errors.username}
                                </div>
                              )}
                              {errors.server && (
                                <div className='error-message'>
                                  {errors.server}
                                </div>
                              )}
                            </div>

                            <div className='Admin-Account-modal-add-account'>
                              <div className='Admin-Account-modal-title-name'>
                                Password
                              </div>
                              <div>
                                <input
                                  className='Admin-Account-input'
                                  type='password'
                                  name='password'
                                  value={newAccount.password}
                                  onChange={handleNewAccountChange}
                                  placeholder='Password'
                                />
                              </div>
                              {errors.password && (
                                <div className='Admin-Account-Error'>
                                  {errors.password}
                                </div>
                              )}
                              <div className='Admin-Account-input-confirm'>
                                <input
                                  className='Admin-Account-input'
                                  type='password'
                                  name='confirmPassword'
                                  value={newAccount.confirmPassword}
                                  onChange={handleNewAccountChange}
                                  placeholder='Confirm password'
                                />
                                {errors.confirmPassword && (
                                  <div className='Admin-Account-Error'>
                                    {errors.confirmPassword}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className='Admin-Account-modal-add-account'>
                              <div className='Admin-Account-modal-title-name'>
                                Name
                              </div>
                              <input
                                className='Admin-Account-input'
                                name='name'
                                value={newAccount.name}
                                onChange={handleNewAccountChange}
                                placeholder='Name'
                              />
                              {errors.name && (
                                <div className='Admin-Account-Error'>
                                  {errors.name}
                                </div>
                              )}
                            </div>

                            <div className='Admin-Account-modal-add-account'>
                              <div className='Admin-Account-modal-title-name'>
                                Email
                              </div>
                              <input
                                className='Admin-Account-input'
                                type='email'
                                name='email'
                                value={newAccount.email}
                                onChange={handleNewAccountChange}
                                placeholder='Email'
                              />
                              {errors.email && (
                                <div className='Admin-Account-Error'>
                                  {errors.email}
                                </div>
                              )}
                            </div>

                            <div className='Admin-Account-modal-add-account'>
                              <div className='Admin-Account-modal-title-name'>
                                Phone Number
                              </div>
                              <input
                                className='Admin-Account-input'
                                name='phone'
                                value={newAccount.phone}
                                onChange={handleNewAccountChange}
                                placeholder='Phone Number'
                              />
                              {errors.phone && (
                                <div className='Admin-Account-Error'>
                                  {errors.phone}
                                </div>
                              )}
                            </div>

                            <div className='Admin-Account-modal-add-account'>
                              <div className='Admin-Account-modal-title-name'>
                                Role
                              </div>
                              <select
                                className='Admin-Account-input-role'
                                name='role'
                                value={newAccount.role}
                                onChange={handleNewAccountChange}
                              >
                                <option>Customer</option>
                                <option>Doctor</option>
                                <option>Staff</option>
                                <option>Admin</option>
                              </select>
                            </div>
                          </div>
                          <div className='modal-footer'>
                            <button
                              type='button'
                              className='btn btn-secondary'
                              data-bs-dismiss='modal'
                              onClick={() => {
                                setErrors({});
                                setNewAccount({
                                  username: '',
                                  password: '',
                                  confirmPassword: '',
                                  name: '',
                                  email: '',
                                  phone: '',
                                  role: 'Customer',
                                });
                              }}
                            >
                              Close
                            </button>
                            <button
                              type='button'
                              className='btn btn-success'
                              onClick={handleAddAccount}
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='Admin-Account-Main-Table-Header'>
                  <div className='Admin-Account-Main-Table-Header-Title'>
                    Account ID
                  </div>
                  <div className='Admin-Account-Main-Table-Header-Title'>
                    User name
                  </div>
                  <div className='Admin-Account-Main-Table-Header-Title'>
                    Role
                  </div>
                  <div className='Admin-Account-Main-Table-Header-Title-Btn'>
                    Action
                  </div>
                </div>

                {currentAccounts.length > 0 ? (
                  currentAccounts.map(item => (
                    <div
                      className='Admin-Account-Main-Table-Content-Row-Wrapper'
                      key={item.accountID}
                    >
                      <div className='Admin-Account-Main-Table-Content-Row'>
                        {item.accountID}
                      </div>
                      <div className='Admin-Account-Main-Table-Content-Row'>
                        {item.username}
                      </div>
                      <div className='Admin-Account-Main-Table-Content-Row'>
                        {item.role}
                      </div>
                      <div className='Admin-Account-Main-Table-Content-Row-Action'>
                        <span className='Admin-Account-Main-Table-Content-Btn_Wrapper'>
                          <button
                            type='button'
                            className='Admin-Account-Main-Table-Content-Btn'
                            data-bs-toggle='modal'
                            data-bs-target={`#exampleModalEdit-${item.accountID}`}
                            onClick={() => openEditModal(item)}
                          >
                            <BorderColorOutlinedIcon
                              sx={{ color: blue[400] }}
                            />
                          </button>
                          <div
                            className='modal fade'
                            id={`exampleModalEdit-${item.accountID}`}
                            tabIndex='-1'
                            aria-labelledby='exampleModalLabelEdit'
                            aria-hidden='true'
                          >
                            <div className='modal-dialog'>
                              <div className='modal-content'>
                                <div className='modal-header'>
                                  <h1
                                    className='modal-title fs-5'
                                    id='exampleModalLabelEdit'
                                  >
                                    Update Information
                                  </h1>
                                  <button
                                    type='button'
                                    className='btn-close'
                                    data-bs-dismiss='modal'
                                    aria-label='Close'
                                    onClick={() => {
                                      setErrors({});
                                      setEditAccount({
                                        name: '',
                                        email: '',
                                        phone: '',
                                        role: '',
                                      });
                                    }}
                                  ></button>
                                </div>
                                <div className='modal-body'>
                                  <div className='Admin-Account-modal-update'>
                                    <div className='Admin-Account-modal-title-name'>
                                      Name
                                    </div>
                                    <div className='Admin-Account-modal-update-old'>
                                      <div className='Admin-Account-modal-initials'>
                                        Old name:
                                      </div>
                                      {currentAccount?.name}
                                    </div>
                                    <label className='Admin-Account-modal-update-new'>
                                      New name:
                                    </label>
                                    <input
                                      className='Admin-Account-input'
                                      name='name'
                                      value={editAccount.name}
                                      onChange={handleEditAccountChange}
                                      placeholder='Name'
                                    />
                                    {errors.name && (
                                      <div className='Admin-Account-Error'>
                                        {errors.name}
                                      </div>
                                    )}
                                  </div>
                                  <div className='Admin-Account-modal-update'>
                                    <div className='Admin-Account-modal-title'>
                                      Email
                                    </div>
                                    <div className='Admin-Account-modal-update-old'>
                                      <div className='Admin-Account-modal-initials'>
                                        Old email:
                                      </div>
                                      {currentAccount?.email}
                                    </div>
                                    <label className='Admin-Account-modal-update-new'>
                                      New email:
                                    </label>
                                    <input
                                      className='Admin-Account-input'
                                      type='email'
                                      name='email'
                                      value={editAccount.email}
                                      onChange={handleEditAccountChange}
                                      placeholder='Email'
                                    />
                                    {errors.email && (
                                      <div className='Admin-Account-Error'>
                                        {errors.email}
                                      </div>
                                    )}
                                  </div>
                                  <div className='Admin-Account-modal-update'>
                                    <div className='Admin-Account-modal-title'>
                                      Phone
                                    </div>
                                    <div className='Admin-Account-modal-update-old'>
                                      <div className='Admin-Account-modal-initials'>
                                        Old phone number:
                                      </div>
                                      {currentAccount?.phone}
                                    </div>
                                    <label className='Admin-Account-modal-update-new'>
                                      New phone number:
                                    </label>
                                    <input
                                      className='Admin-Account-input'
                                      name='phone'
                                      value={editAccount.phone}
                                      onChange={handleEditAccountChange}
                                      placeholder='Phone number'
                                    />
                                    {errors.phone && (
                                      <div className='Admin-Account-Error'>
                                        {errors.phone}
                                      </div>
                                    )}
                                  </div>

                                  <div className='Admin-Account-modal-update'>
                                    <div className='Admin-Account-modal-title'>
                                      Role
                                    </div>
                                    {editAccount.role}
                                  </div>
                                  <div className='modal-footer'>
                                    <button
                                      type='button'
                                      className='btn btn-secondary'
                                      data-bs-dismiss='modal'
                                      onClick={() => {
                                        setErrors({});
                                        setEditAccount({
                                          name: '',
                                          email: '',
                                          phone: '',
                                          role: '',
                                        });
                                      }}
                                    >
                                      Close
                                    </button>
                                    <button
                                      type='button'
                                      className='btn btn-success'
                                      onClick={handleSaveChanges}
                                    >
                                      Save changes
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>

                        <span className='Admin-Account-Main-Table-Content-Btn_Wrapper'>
                          <button
                            type='button'
                            className='Admin-Account-Main-Table-Content-Btn'
                            data-bs-toggle='modal'
                            data-bs-target={`#exampleModalMore-${item.accountID}`}
                          >
                            <MoreVertOutlinedIcon sx={{ color: green[400] }} />
                          </button>
                          <div
                            className='modal fade'
                            id={`exampleModalMore-${item.accountID}`}
                            tabIndex='-1'
                            aria-labelledby='exampleModalLabelMore'
                            aria-hidden='true'
                          >
                            <div className='modal-dialog'>
                              <div className='modal-content'>
                                <div className='modal-header'>
                                  <h1
                                    className='modal-title fs-5'
                                    id='exampleModalLabelMore'
                                  >
                                    Account Information
                                  </h1>
                                  <button
                                    type='button'
                                    className='btn-close'
                                    data-bs-dismiss='modal'
                                    aria-label='Close'
                                  ></button>
                                </div>
                                <div className='modal-body'>
                                  <div className='Admin-Account-modal-more'>
                                    <div className='Admin-Account-modal-more-title'>
                                      Account ID:
                                    </div>
                                    {item.accountID}
                                  </div>
                                  <div className='Admin-Account-modal-more'>
                                    <div className='Admin-Account-modal-more-title'>
                                      Name:
                                    </div>
                                    {item.role === 'Customer' ? (
                                      item?.customerDetails[0]?.name
                                    ) : item?.role === 'Staff' ? (
                                      item?.staffDetails[0]?.name
                                    ) : item?.role === 'Admin' ? (
                                      item?.adminDetails[0]?.name
                                    ) : item?.role === 'Doctor' ? (
                                      item?.doctorDetails[0]?.name
                                    ) : (
                                      <span>Nothing</span>
                                    )}
                                  </div>
                                  <div className='Admin-Account-modal-more'>
                                    <div className='Admin-Account-modal-more-title'>
                                      User name:
                                    </div>
                                    {item.username}
                                  </div>
                                  <div className='Admin-Account-modal-more'>
                                    <div className='Admin-Account-modal-more-title'>
                                      Email:
                                    </div>
                                    {item?.role === 'Customer' ? (
                                      item?.customerDetails[0]?.email
                                    ) : item?.role === 'Staff' ? (
                                      item?.staffDetails[0]?.email
                                    ) : item?.role === 'Admin' ? (
                                      item?.adminDetails[0]?.email
                                    ) : item?.role === 'Doctor' ? (
                                      item?.doctorDetails[0]?.email
                                    ) : (
                                      <span>Nothing</span>
                                    )}
                                  </div>
                                  <div className='Admin-Account-modal-more'>
                                    <div className='Admin-Account-modal-more-title'>
                                      Phone number:
                                    </div>
                                    {item?.role === 'Customer' ? (
                                      item?.customerDetails[0]?.phone
                                    ) : item?.role === 'Staff' ? (
                                      item?.staffDetails[0]?.phone
                                    ) : item?.role === 'Admin' ? (
                                      item?.adminDetails[0]?.phone
                                    ) : item?.role === 'Doctor' ? (
                                      item?.doctorDetails[0]?.phone
                                    ) : (
                                      <span>Nothing</span>
                                    )}
                                  </div>
                                  <div className='Admin-Account-modal-more'>
                                    <div className='Admin-Account-modal-more-title'>
                                      Role:
                                    </div>
                                    {item?.role}
                                  </div>
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
                        </span>
                        <span className='Admin-Account-Main-Table-Content-Btn_Wrapper'>
                          <Switch
                            checked={item.status}
                            onChange={() => handleStatusChange(item)}
                            color={item.status ? 'success' : 'neutral'}
                            variant={item.status ? 'solid' : 'outlined'}
                          />
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className='admin-no-content-available'>
                    No Content Available
                  </div>
                )}

                <div className='Admin-Account-Pagination'>
                  {currentAccounts.length > 0 && totalPages > 1 && (
                    <Stack
                      spacing={2}
                      marginTop={2}
                      alignItems='center'
                    >
                      <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color='primary'
                      />
                    </Stack>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAccount;
