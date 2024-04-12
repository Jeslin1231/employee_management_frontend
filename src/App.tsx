import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import NotFound from './pages/Error/NotFound';
import HiringHr from './pages/HiringHr';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Onboarding from './pages/Onborading';
import PersonalInfo from './pages/PersonalInfo';
import ProfilesHr from './pages/ProfilesHr';
import Visa from './pages/Visa';
import VisaHr from './pages/VisaHr';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedHRRoute from './components/ProtectedRoute/hrRoute';
import ErrorBoundary from './components/ErrorBoundary/errorBoundary';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-fit bg-slate-200">
      <Router>
        <ErrorBoundary>
          <Routes>
            {/* <Route path="/" element={<Outlet />} /> */}
            {/* login page if not login, other pages will be inacccessible*/}

            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />

            <Route path="/register/:token" element={<Registration />} />
            {/* employees pages */}
            <Route element={<Layout />}>
              <Route
                path="/onboarding"
                element={<ProtectedRoute element={<Onboarding />} />}
              />
              <Route
                path="/personal_info"
                element={<ProtectedRoute element={<PersonalInfo />} />}
              />
              <Route
                path="/visa"
                element={<ProtectedRoute element={<Visa />} />}
              />

              {/* HR Pages */}
              <Route
                path="/visa_hr"
                element={<ProtectedHRRoute element={<VisaHr />} />}
                //  element={<VisaHr />}
              />
              <Route
                path="/hiring_hr"
                element={<ProtectedHRRoute element={<HiringHr />} />}
                // element={<HiringHr />}
              />
              <Route
                path="/profiles_hr"
                element={<ProtectedHRRoute element={<ProfilesHr />} />}
                // element={<ProfilesHr />}
              />

              <Route
                path="/profile_review/:id"
                element={<ProtectedHRRoute element={<PersonalInfo />} />}
                // element={<ProfilesHr />}
              />

              <Route
                path="/onboarding_review/:id/:status"
                element={<ProtectedHRRoute element={<Onboarding />} />}
                // element={<ProfilesHr />}
              />
            </Route>

            {/* Error Page */}
            <Route path="*" element={<NotFound />} />
            {/* different type of error need to add later */}
          </Routes>
        </ErrorBoundary>
      </Router>
    </div>
  );
};

export default App;
