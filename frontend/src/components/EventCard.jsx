import { useState } from "react";

const EventCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(`Registration successful for ${formData.name}`);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Event Registration</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.label}>Select Event:</label>
        <select name="event" value={formData.event} onChange={handleChange} required style={styles.input}>
          <option value="">-- Choose an Event --</option>
          <option value="Tech Conference">Tech Conference</option>
          <option value="AI Workshop">AI Workshop</option>
        </select>

        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    border: "2px solid gold",
    borderRadius: "10px",
    backgroundColor: "white",
    textAlign: "center",
  },
  title: {
    color: "black",
    marginBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    border: "1px solid black",
    borderRadius: "5px",
  },
  button: {
    padding: "10px",
    backgroundColor: "gold",
    color: "black",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default EventCard;
