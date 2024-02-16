import React, {lazy, Suspense} from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MovieDetails from "./MovieDetails";
import Error from "./Error";

const Body = () => {
  const About = lazy(() => import("./About"))
  const Privacy = lazy(() => import("./Privacy"))
  const Contact = lazy(() => import("./Contact"))

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error/>
    },
    {
      path: "/about",
      element: (
        <Suspense fallback={<h1>Loading.....</h1>}>
           <About/>
        </Suspense>
      ),
    },
    {
      path: "/privacy",
      element: (
        <Suspense fallback={<h1>Loading.....</h1>}>
           <Privacy/>
        </Suspense>
      ),
    },
    {
      path: "/contact",
      element: (
        <Suspense fallback={<h1>Loading......</h1>}>
           <Contact/>
        </Suspense>
      )
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"/browse/:title/:movieId",
      element: <MovieDetails/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
