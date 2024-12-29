import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    address: "",
    phone: "",
    school: "",
    memories: "",
    gender: "",
    favActors: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        favActors: checked
          ? [...prevState.favActors, value]
          : prevState.favActors.filter((actor) => actor !== value),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Slam Book Data:", formData);
    alert(`Slam Book Submitted!
Name: ${formData.name}
Nickname: ${formData.nickname}
Address: ${formData.address}
Phone: ${formData.phone}
School: ${formData.school}
Memories: ${formData.memories}
Favorite Actors: ${formData.favActors.join(", ")}
Gender: ${formData.gender}`);
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <div className="form-title">
          <h1>Slam Form</h1>
        </div>
        <form onSubmit={handleSubmit} className="styled-form">
          <div className="form-group">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Nickname:
              <input
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Memories:
              <textarea
                name="memories"
                value={formData.memories}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
          <fieldset className="form-group">
            <legend>Gender:</legend>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
                required
              />
              Male👦
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                required
              />
              Female👧
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Other"
                onChange={handleChange}
                required
              />
              Other
            </label>
          </fieldset>
          <fieldset className="form-group">
            <legend>Favorite Actors:</legend>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="favActors"
                value="Thala"
                onChange={handleChange}
              />
              Thala😎
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="favActors"
                value="Thalapathy"
                onChange={handleChange}
              />
              Thalapathy😍
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="favActors"
                value="Shivakarthikeyan"
                onChange={handleChange}
              />
              Sivakarthikeyan😘
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="favActors"
                value="Kavin"
                onChange={handleChange}
              />
              Kavin🤩
            </label>
          </fieldset>
          <div className="form-group">
            <label>
              School:
              <select
                name="school"
                value={formData.school}
                onChange={handleChange}
                required
              >
                <option value="">Select your school</option>
                <option value="Kongu Engineering College">Kongu Engineering College</option>
                <option value="Nandha Engineering College">Nnadha Engineering College
                  Springfield Academy
                </option>
                <option value="Senguthar Engineering College">Sengunthar Engineering College</option>
                <option value="Vellalar Engineering College">VellalarEngineering College</option>
              </select>
            </label>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
