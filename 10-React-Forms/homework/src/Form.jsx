import React from "react";

export function validate(user) {
  let errors = {};
  if (!user.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(user.username)) {
    errors.username = "Username is invalid";
  }

  if (!user.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(user.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
}

export default function Form() {
  const [user, setUser] = React.useState({ username: "", password: "" });
  const [errors, setErrors] = React.useState({});

  const handleUserChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div>
      <form>
        <label>Username:</label>
        <input
          className={errors.username && "danger"}
          type="text"
          name="username"
          value={user.username}
          onChange={handleUserChange}
        />
        {errors.username && <p className="danger">{errors.username}</p>}

        <label>Password:</label>
        <input
          className={errors.password && "danger"}
          type="password"
          name="password"
          value={user.password}
          onChange={handleUserChange}
        />
        {errors.password && <p className="danger">{errors.password}</p>}

        <button>Submit</button>
      </form>
    </div>
  );
}
