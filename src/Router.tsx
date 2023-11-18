import React, { ReactNode } from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader";
import { Route, Routes, useLocation } from "react-router-dom";
import { RouteType } from "./type/routes";
import { publicRoutes } from "./utils/routes";

function Router() {
  const location = useLocation();

  const getPublicRoutes = (publicRoutes: RouteType[]): ReactNode => {
    const config = {
      type: "spring",
      damping: 20,
      stiffness: 100,
    };
    return (
      <React.Fragment>
        {publicRoutes.map((routeObj: RouteType) => {
          return (
            <React.Fragment key={routeObj.path}>
              <Route
                path={routeObj.path}
                key={routeObj.path}
                element={
                  <motion.div
                    transition={config}
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                  >
                    <routeObj.element />
                  </motion.div>
                }
              />
              {routeObj.child && getPublicRoutes(routeObj.child)}
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <AnimatePresence mode="wait" initial={false}>
        <React.Suspense fallback={<Loader height="cacl(80vh)" />}>
          <Routes key={location.pathname}>
            {getPublicRoutes(publicRoutes)}
          </Routes>
        </React.Suspense>
      </AnimatePresence>
    </React.Fragment>
  );
}

export default Router;
