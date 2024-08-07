import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PublicRoute from './components/HandleRoutes/PublicRoute.js';
import ProtectedRoute from './components/HandleRoutes/ProtectedRoute.js';
//Component
import Booking from './pages/Booking/Booking.js';
import Home from './pages/Home/Home.js';
import SignUp from './pages/SignUp/SignUp.js';
import ManageListBooking from './pages/ManageBooking/ManageListBooking.js';
import YourPet from './pages/YourPet/YourPet.js';
import Services from './pages/Services/Services.js';
import Login from './pages/Login/Login.js';
import ManageCages from './pages/ManageCages/ManageCages.js';
import WorkSchedule from './pages/WorkSchedule/WorkSchedule.js';
import AdminDashBoard from './pages/AdminDashBoard/AdminDashBoard.js';
import YourBooking from './pages/YourBooking/YourBooking.js';
import AdminAccount from './pages/AdminAccount/AdminAccount.js';
import PetExamRecord from './pages/PetExamRecord/PetExamRecord.js';
import VeterinarianInfo from './pages/VeterinarianInfo/VeterinarianInfo.js';
import AdminServices from './pages/AdminServices/AdminServices.js';
import AdminCages from './pages/AdminCages/AdminCages.js';
import ProfilePet from './pages/ProfilePet/ProfilePet.js';
import AdminRating from './pages/AdminRating/AdminRating.js';
import ChoosePet from './pages/ChoosePet/ChoosePet.js';
import Payment from './pages/Payment/Payment.js';
import Unauthorized from './pages/Unauthorized/Unauthorized.js';
import UserProfile from './pages/UserProfile/UserProfile.js';
import ChangeUserPassword from './pages/ChangeUserPassWord/ChangeUserPassWord.js';
import TimeTableWork from './pages/TimeTableWork/TimeTableWork.js';
import PetStatus from './pages/PetStatus/PetStatus.js';
import DoctorCare from './pages/DoctorCare/DoctorCare.js';
import AdminChartStatistic from './pages/AdminChartStatistic/AdminChartStatistic.js';
import AdminVaccine from './pages/AdminVaccine/AdminVaccine.js';
import ManageDoctorBooking from './pages/DoctorBooking/ManageDoctorBooking.js';
import { DateProvider } from './components/Admin/DateContext/DateContext.js';
import DoctorProfile from './pages/DoctorProfile/DoctorProfile.js';
function App() {
  return (
    <AuthProvider>
      <DateProvider>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/unauthorized'
            element={<Unauthorized />}
          />
          <Route
            path='/login'
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path='/signup'
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path='/services'
            element={<Services />}
          />
          <Route
            path='/veterinarian-info'
            element={<VeterinarianInfo />}
          />
          <Route
            path='/your-pet'
            element={
              <ProtectedRoute allowedRoles={['Customer']}>
                <YourPet />
              </ProtectedRoute>
            }
          />
          <Route
            path='/your-booking'
            element={
              <ProtectedRoute allowedRoles={['Customer']}>
                <YourBooking />
              </ProtectedRoute>
            }
          />
          <Route
            path='/booking'
            element={
              <ProtectedRoute allowedRoles={['Customer']}>
                <Booking />
              </ProtectedRoute>
            }
          />
          <Route
            path='/choose'
            element={
              <ProtectedRoute allowedRoles={['Customer']}>
                <ChoosePet />
              </ProtectedRoute>
            }
          />
          <Route
            path='/pet-profile'
            element={
              <ProtectedRoute allowedRoles={['Customer']}>
                <ProfilePet />
              </ProtectedRoute>
            }
          />
          <Route
            path='/payment'
            element={
              <ProtectedRoute allowedRoles={['Customer']}>
                <Payment />
              </ProtectedRoute>
            }
          />

          <Route
            path='/user-profile'
            element={
              <ProtectedRoute allowedRoles={['Customer']}>
                <UserProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path='/change-user-password'
            element={
              <ProtectedRoute allowedRoles={['Customer']}>
                <ChangeUserPassword />
              </ProtectedRoute>
            }
          />

          <Route
            path='/pet-status'
            element={
              <ProtectedRoute allowedRoles={['Customer']}>
                <PetStatus />
              </ProtectedRoute>
            }
          />

          <Route
            path='/manage-booking'
            element={
              <ProtectedRoute allowedRoles={['Staff']}>
                <ManageListBooking />
              </ProtectedRoute>
            }
          />

          <Route
            path='/manage-cages'
            element={
              <ProtectedRoute allowedRoles={['Staff']}>
                <ManageCages />
              </ProtectedRoute>
            }
          />

          <Route
            path='/manage-doctor'
            element={
              <ProtectedRoute allowedRoles={['Staff']}>
                <ManageDoctorBooking />
              </ProtectedRoute>
            }
          />

          <Route
            path='/work-schedule'
            element={
              <ProtectedRoute allowedRoles={['Doctor']}>
                <WorkSchedule />
              </ProtectedRoute>
            }
          />

          <Route
            path='/pet-exam-record'
            element={
              <ProtectedRoute allowedRoles={['Doctor']}>
                <PetExamRecord />
              </ProtectedRoute>
            }
          />

          <Route
            path='/time-table'
            element={
              <ProtectedRoute allowedRoles={['Doctor']}>
                <TimeTableWork />
              </ProtectedRoute>
            }
          />

          <Route
            path='/doctor-care'
            element={
              <ProtectedRoute allowedRoles={['Doctor']}>
                <DoctorCare />
              </ProtectedRoute>
            }
          />

          <Route
            path='/doctor-profile'
            element={
              <ProtectedRoute allowedRoles={['Doctor']}>
                <DoctorProfile />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin-account'
            element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <AdminAccount />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin-dashboard'
            element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <AdminDashBoard />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin-services'
            element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <AdminServices />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin-cages'
            element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <AdminCages />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin-rating'
            element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <AdminRating />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin-statistic'
            element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <AdminChartStatistic />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin-vaccine'
            element={
              <ProtectedRoute allowedRoles={['Admin']}>
                <AdminVaccine />
              </ProtectedRoute>
            }
          />
        </Routes>
      </DateProvider>
    </AuthProvider>
  );
}

export default App;
