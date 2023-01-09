import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, touchedFields },
  } = useForm();

  const handleForm = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="App">
      <h1>This is Form. 🔥</h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Enter your name..."
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", { required: true })}
            placeholder="Enter your email..."
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            {...register("age", {
              valueAsNumber: true,
              required: true,
              max: 90,
              min: 16,
            })}
            placeholder="Enter your age..."
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
