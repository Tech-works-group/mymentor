import React,{useState} from "react";
import Link from "next/link";
import styles from "../../styles/Request.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import classNames from "classnames";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { interpolateAs } from "next/dist/shared/lib/router/router";
import { createMentoringRequest } from "../api/mentoringRequests";

const requestForm = () => {
  const name = "Khadiga Saif";
  const paid = 20;
  const unit = "sdg/h";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const [amount, setAmount] = useState({});
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState({});
  const [duration, setDuration] = useState("");
  const [experience, setExperience] = useState([]);
  const [background, setBackground] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [startingFrom, setStartingFrom] = useState("");
  const [endingAt, setEndingAt] = useState("");
  const [designation, setDesignation] = useState("");
// {
//     "title":"posts 1",
//     "description": "description 1",
//     "isPaid": true,
//     "amount": {
//         "price":200,
//         "currency":"usd"
//     },
//     "location": "remote",
//     "address": "Sudan",
//     "duration": {
//         "durationType":"closed",
//         "duration":2,
//         "unit":"week"
//     },
//     "experience": {
//          "duration":2,
//         "unit":"month"
//     }, 
//     "requirements": ["1","2"], 
//     "tasks": ["1","2"],
//     "background":["1","2"],
//     "startingFrom": "2022-08-12T21:52:24.540Z", 
//     "endingAt": "2022-08-12T21:52:24.540Z"
// }


  const handleChange = (e) => {
    let updatedValue = {};
    updatedValue = { price: e.target.value, currency: e.target.value };
    setAmount((amount) => ({
      ...amount,
      ...updatedValue,
    }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await signup({
      title,
      description,
      isPaid,
      amount,
      location,
      address,
      duration,
      experience,
      background,
      tasks,
      requirements,
      startingFrom,
      endingAt,
      designation,
    });
  };
  return (
    <div className="container columns_container">
      <div className="small">
        <Link href="">My Mentoring Requests</Link>
        <Link href="">Settings</Link>
        <Link href="">Terms and Privacy</Link>
        <div className="add_new">
          <Link href="">Post a new Mentoring Request</Link>
          <FontAwesomeIcon icon={faPlusSquare} className="icon" />
        </div>
      </div>
      <form
        className="wide"
        style={{ padding: "0 25px 25px 25px" }}
        onSubmit={submitHandler}
      >
        <div className="tag">
          <h1>New Mentoring Request</h1>
        </div>
        <h3 className={styles.question} style={{ marginTop: "25px" }}>
          Mentoring Request title
        </h3>
        <div className={styles.form_row}>
          <input
            className={styles.form_input}
            type="text"
            placeholder="example"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
        </div>
        <h3 className={styles.question}>Request Description</h3>
        <div className={styles.form_row}>
          <input
            className={styles.form_input}
            type="text"
            placeholder="example"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <div className="flex">
          <div className={styles.form_row}>
            <div className={styles.form_item}>
              <h3 className={styles.question}>Location</h3>
              <select
                className={styles.form_input}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              >
                <option value="Remote">Remote</option>
                <option value="on_site">On site</option>
              </select>
            </div>
            <div className={styles.form_item}>
              <h3 className={styles.question}>Duration</h3>
              <select
                className={styles.form_input}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              >
                <option value="3month">3 Months</option>
                <option value="6months">6 Months</option>
              </select>
            </div>
          </div>
          <div className={styles.form_row}>
            <div className={styles.form_item}>
              <h3 className={styles.question}>Experience</h3>
              <input
                className={styles.form_input}
                type="text"
                placeholder="example"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              ></input>
            </div>
          </div>
          <div className={styles.form_row}>
            <div className={styles.form_item}>
              <label >paid</label>
              <input
                className={styles.form_input}
                type="radio"
                value={paid}
                id="paid"
                onChange={(e) => setIsPaid((oldValue) => !oldValue)}
              ></input>
            </div>
            <div>
              <h3 className={styles.question}>Amount</h3>
              <input
                className={styles.form_input}
                type="text"
                onChange={(e) => handleChange(e)}
                value={amount.price}
                placeholder="example"
              ></input>
            </div>
            <div>
              <h3 className={styles.question}>Currency</h3>
              <select
                className={styles.form_input}
                onChange={(e) => handleChange(e)}
                value={amount.currency}
              >
                <option value="sdg">SDG</option>
                <option value="usd">USD</option>
              </select>
            </div>
          </div>
          <div>
            <h3>I’m looking for help with</h3>
          </div>
          <div className={styles.form_row}>
            <input
              className={styles.form_input}
              type="text"
              placeholder="example"
              value={tasks}
              onChange={(e) => {
                setTasks(e.target.value);
              }}
            ></input>
            <FontAwesomeIcon icon={faPlusSquare} className="icon" />
          </div>
          <div>
            <h3>Requirements</h3>
          </div>
          <div className={styles.form_row}>
            <input
              className={styles.form_input}
              type="text"
              placeholder="example"
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            ></input>
            <FontAwesomeIcon icon={faPlusSquare} className="icon" />
          </div>
          <h3>I have a background about</h3>
          <div className={styles.form_row}>
            <input
              className={styles.form_input}
              type="text"
              placeholder="example"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
            ></input>
            <FontAwesomeIcon icon={faPlusSquare} className="icon" />
          </div>
        </div>
        <div className="right">
          <button
            className="button main_button"
            style={{ marginTop: "25px" }}
            type="submit"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default requestForm;
