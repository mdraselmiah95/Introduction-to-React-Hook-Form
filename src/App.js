import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm();
  console.log(watch());
  console.log("Error-->", errors);
  console.log(touchedFields);

  const handleForm = (data) => {
    console.log(data);
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
            {...register("name", { required: true })}
            placeholder="Enter your name..."
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email")}
            placeholder="Enter your email..."
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            {...register("age", { valueAsNumber: true, required: true })}
            placeholder="Enter your age..."
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
