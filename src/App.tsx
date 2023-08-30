import { createMemoryRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProfileList from "./components/ProfileList";
import ProfileForm from "./components/ProfileForm";

function App() {
  const router = createMemoryRouter([
    {
      path: "/",
      element: <ProfileList />,
    },
    {
      path: "/avatar/new",
      element: <ProfileForm />,
    },
    {
      path: "/avatar/:id",
      element: <ProfileForm />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
