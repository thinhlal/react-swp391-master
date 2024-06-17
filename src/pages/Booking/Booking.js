import React, { useState, useEffect } from 'react';
import './Booking.css';
import Footer from '../../components/User/Footer/Footer.js';
import Header from '../../components/User/Header/Header.js';
import red from '../../assets/images/img_Booking/red_square.png';
import green from '../../assets/images/img_Booking/green_square.png';
import { useLocation } from 'react-router-dom'; // Import useLocation to get state

// Giả sử dữ liệu bác sĩ
const doctorsData = [
  {
    id: 'DOC001',
    name: 'Daria Andaloro',
    workingHours: [
      {
        date: '2024-06-01',
        startTime: '08:00',
        endTime: '17:00',
        isOff: false,
        bookings: [
          { startTime: '09:00', endTime: '10:00' },
          { startTime: '10:00', endTime: '11:00' },
        ],
      },
      {
        date: '2024-06-02',
        isOff: true,
      },
    ],
  },
  {
    id: 'DOC002',
    name: 'Michael Brian',
    workingHours: [
      {
        date: '2024-06-01',
        startTime: '08:00',
        endTime: '17:00',
        isOff: false,
        bookings: [],
      },
      {
        date: '2024-06-02',
        startTime: '08:00',
        endTime: '12:00',
        isOff: false,
        bookings: [],
      },
    ],
  },
  // Thêm các bác sĩ khác nếu cần
];

const Booking = () => {
  const location = useLocation(); // Use useLocation to get the state
  const { selectedPet } = location.state || {}; // Destructure selectedPet from state
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isDayOff, setIsDayOff] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null); // State để lưu ô giờ đã chọn

  useEffect(() => {
    if (!selectedPet) {
      alert('No pet selected. Please go back and select a pet.');
    }
  }, [selectedPet]);

  const handleDoctorChange = e => {
    const newDoctorId = e.target.value;
    setSelectedDoctor(newDoctorId);
    updateAvailableSlots(newDoctorId, selectedDate);
  };

  const handleDateChange = e => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    updateAvailableSlots(selectedDoctor, newDate);
  };

  const handleSlotClick = slot => {
    // Hàm xử lý khi click vào ô giờ
    if (!slot.isBooked) {
      setSelectedSlot(slot); // Lưu ô giờ đã chọn vào state
    }
  };

  const updateAvailableSlots = (doctorId, date) => {
    if (date) {
      if (doctorId) {
        const doctor = doctorsData.find(doc => doc.id === doctorId);
        const workingDay = doctor.workingHours.find(wh => wh.date === date);
        if (workingDay) {
          if (workingDay.isOff) {
            setIsDayOff(true);
            setAvailableSlots([]);
          } else {
            setIsDayOff(false);
            setAvailableSlots(generateSlots(workingDay));
          }
        } else {
          setIsDayOff(false);
          setAvailableSlots([]);
        }
      } else {
        setIsDayOff(false);
        setAvailableSlots(generateDefaultSlots());
      }
    } else {
      setAvailableSlots([]);
    }
  };

  const generateDefaultSlots = () => {
    const slots = [];
    const start = new Date('1970-01-01T08:00:00');
    const end = new Date('1970-01-01T17:00:00');

    for (
      let current = new Date(start);
      current < end;
      current = new Date(current.getTime() + 60 * 60 * 1000)
    ) {
      const next = new Date(current.getTime() + 60 * 60 * 1000);
      slots.push({
        startTime: new Date(current),
        endTime: new Date(next),
        isBooked: false,
      });
    }
    return slots;
  };

  const generateSlots = workingDay => {
    const slots = [];
    const start = new Date(`1970-01-01T${workingDay.startTime}:00`);
    const end = new Date(`1970-01-01T${workingDay.endTime}:00`);

    for (
      let current = new Date(start);
      current < end;
      current = new Date(current.getTime() + 60 * 60 * 1000)
    ) {
      const next = new Date(current.getTime() + 60 * 60 * 1000);

      const isBooked = workingDay.bookings.some(
        booking =>
          new Date(`1970-01-01T${booking.startTime}:00`) <= current &&
          next <= new Date(`1970-01-01T${booking.endTime}:00`),
      );

      slots.push({
        startTime: new Date(current),
        endTime: new Date(next),
        isBooked,
      });
    }
    return slots;
  };

  const handleBookingSubmit = () => {
    if (selectedSlot && selectedDate) {
      const bookingData = {
        doctorId: selectedDoctor,
        date: selectedDate,
        startTime: selectedSlot.startTime.toLocaleTimeString('vi-VN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
        endTime: selectedSlot.endTime.toLocaleTimeString('vi-VN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
        petID: selectedPet?.petID, // Include the PetID in booking data
      };
      console.log('Booking Data:', bookingData);
      // Xử lý gửi dữ liệu booking lên server tại đây
    } else {
      alert('Please select a slot to book.');
    }
  };

  return (
    <div className='booking-container container-fluid'>
      <div className='div row'>
        <Header />
        <div className='book-title'>Book Appointment</div>
        <div className='main-booking-menu'>
          <div className='tittle-booking'>
            Please choose your desired service
          </div>

          <div className='select-booking'>
            <div className='select-booking_info'>
              <div className='patient_Input'>
                <div className='select_Name'>Name</div>
                <input
                  type='text'
                  className='name_input'
                />
              </div>
              <div className='patient_Input'>
                <div className='select_Name'>Phone</div>
                <input
                  type='text'
                  className='name_input'
                />
              </div>
            </div>

            <div className='select-booking_info'>
              <div className='patient_Input'>
                <div className='select_Name'>E-Mail</div>
                <input
                  type='text'
                  className='name_input'
                />
              </div>
              <div className='patient_Input'>
                <div className='select_Name'>PetID</div>
                <input
                  type='text'
                  className='name_input'
                  value={selectedPet?.petID || ''}
                  readOnly
                />
              </div>
            </div>

            <div className='select-booking_info'>
              <div className='select_Payment'>
                <div className='select_Name'>Payment</div>
                <div className='select_Booking'>
                  <select
                    name='payment'
                    className='select_Info'
                    required
                  >
                    <option value='momo'>Momo</option>
                    <option value='paypal'>Paypal</option>
                  </select>
                </div>
              </div>
              <div className='select_Service'>
                <div className='select_Name'>Services</div>
                <div className='select_Booking'>
                  <select
                    name='service'
                    className='select_Info'
                    required
                  >
                    <option value='service1'>Service 1</option>
                    <option value='service2'>Service 2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='select-booking_info'>
              <div className='select_Date'>
                <div className='select_Name'>Date</div>
                <input
                  type='date'
                  className='select_Info'
                  value={selectedDate}
                  onChange={handleDateChange}
                  placeholder='Select a date'
                />
              </div>
              <div className='select_Doctors'>
                <div className='select_Name'>Doctors</div>
                <div className='select_Booking'>
                  <select
                    name='doctors'
                    className='select_Info'
                    onChange={handleDoctorChange}
                  >
                    <option value=''>Select a doctor</option>
                    {doctorsData.map(doctor => (
                      <option
                        key={doctor.id}
                        value={doctor.id}
                      >
                        {doctor.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='available-tittle'>
            <div className='available-tittle-text'>Available slots:</div>
            <div className='booked-slot'>
              <div className='booked-status'>Booked</div>
              <img
                className='square'
                src={red}
                alt='Booked'
              />
            </div>
            <div className='available-slot'>
              <div className='booked-status'>Available</div>
              <img
                className='square'
                src={green}
                alt='Available'
              />
            </div>
          </div>

          <div className='booking-menu'>
            {isDayOff ? (
              <div className='day-off-message'>
                The selected doctor is off on this day.
              </div>
            ) : availableSlots.length === 0 ? (
              <div className='no-slots-message'>
                No available slots for this date.
              </div>
            ) : (
              availableSlots.map((slot, index) => (
                <div
                  key={index}
                  className={`element-button ${slot.isBooked ? 'element-button-red' : selectedSlot === slot ? 'element-button-selected' : 'element-button-green'}`} // Thêm class để thay đổi màu sắc ô đã chọn
                  onClick={() => handleSlotClick(slot)} // click để chọn ô giờ
                >
                  <div className='booking-select_time'>
                    {slot.startTime.toLocaleTimeString('vi-VN', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false,
                    })}{' '}
                    -{' '}
                    {slot.endTime.toLocaleTimeString('vi-VN', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false,
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
          <div className='booking-pay-money'>
            <div className='booking-pay-money-desc'>
              <div className='booking-pay-money-text'>PAYABLE AMOUNT : $</div>
              <div className='booking-pay-money-price'>50</div>
            </div>
          </div>
          <button
            className='CONFIRM-BOOK'
            type='submit'
            onClick={handleBookingSubmit}
          >
            <div className='BOOKING-NOW'>Confirm Booking</div>
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Booking;
