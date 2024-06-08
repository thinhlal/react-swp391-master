import './ChoosePet.css';
import React, { useState, useEffect, useRef } from 'react';
// image
import image_pet_1 from '../../assets/images/img_ChoosePet/pexels-wildlittlethingsphoto-2253275.jpg';
import image_pet_2 from '../../assets/images/img_ChoosePet/pexels-ingewallu-177809.jpg';
import image_pet_3 from '../../assets/images/img_ChoosePet/pexels-svetozar-milashevich-99573-1490908.jpg'
// components
import Header from '../../components/User/Header/Header';
import Footer from "../../components/User/Footer/Footer";
import AddPetModal from "../../components/User/AddPetModal/AddPetModal.js";

function ChoosePet() {
  const [pets, setPets] = useState([
    { id: 1, name: 'KiKi', image: image_pet_1 },
    { id: 2, name: 'MiMi', image: image_pet_2 },
    { id: 3, name: 'Lala', image: image_pet_3 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPetId, setSelectedPetId] = useState(null);
  const petContainerRef = useRef(null);

  const addPet = (pet) => {
    setPets([...pets, pet]);
  };

  // const deletePet = (id) => {
  //   const updatedPets = pets.filter((pet) => pet.id !== id);
  //   setPets(updatedPets);
  // };

  const handleSelectPet = (id) => {
    setSelectedPetId(id);
  };

  const handleClickOutside = (event) => {
    if (petContainerRef.current && !petContainerRef.current.contains(event.target)) {
      setSelectedPetId(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="main-choose-pet">
      <Header />
      <div className='sub-choose-pet'>
        <div className='main-title-choose-pet'>
          <div className='title-choose-pet'>Select Pet</div>
          <div className='title-choose-pet'>Choose which pet to have an appointment</div>
        </div>
        <div className="choose-pet-container" ref={petContainerRef}>
          <div className="choose-pet-card add-more-pet" onClick={() => setIsModalOpen(true)}>
            <div className="add-icon">+</div>
            <div>Add Pet</div>
          </div>
          {pets.map((pet) => (
            <div
              className={`choose-pet-card ${selectedPetId === pet.id ? 'selected' : ''}`}
              key={pet.id}
              onClick={() => handleSelectPet(pet.id)}
            >
              <img src={pet.image} alt={pet.name} />
              <div className='name-pet-card'>{pet.name}</div>
              <div className='main-button-choose-pet'>
                <button className='button-choose-pet'>Select</button>
                {/* <button className="button-choose-pet" onClick={() => deletePet(pet.id)}>Delete</button> */}
              </div>
            </div>
          ))}
        </div>
        <button className="select-service-pet">Booking</button>
        <AddPetModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddPet={addPet} />
      </div>
      <Footer />
    </div>
  );
}

export default ChoosePet;
