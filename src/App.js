import { useForm, Controller } from "react-hook-form";
import "./App.css";
import { Input } from "@mui/material";

function App() {
  const {
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      age: 0,
    },
  });

  const handleForm = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="App">
      <h1>This is Form. 🔥</h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input {...field} />}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} />}
        />

        <Controller
          name="number"
          control={control}
          render={({ field }) => <Input {...field} />}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

// Job the cool you are coolest 01816895165  Raju the
