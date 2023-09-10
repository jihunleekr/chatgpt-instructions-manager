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
      path: "/profiles/new",
      element: <ProfileForm />,
    },
    {
      path: "/profiles/:id",
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
