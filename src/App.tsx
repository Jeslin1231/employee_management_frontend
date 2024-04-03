import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import NotFound from './pages/Error/NotFound';
import Hiring_HR from './pages/Hiring_HR';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Onboarding from './pages/Onborading';
import PersonalInfo from './pages/PersonalInfo';
import Profiles_HR from './pages/Profiles_HR';
import Visa from './pages/Visa';
import Visa_HR from './pages/Visa_HR';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          {/* <Route path="/" element={<Outlet />} /> */}
          {/* login page if not login, other pages will be inacccessible*/}

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* employees pages */}
          <Route path="/register" element={<Registration />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/visa" element={<Visa />} />

          {/* HR Pages */}
          <Route path="/visa-hr" element={<Visa_HR />} />
          <Route path="/hiring-hr" element={<Hiring_HR />} />
          <Route path="/profiles-hr" element={<Profiles_HR />} />

          {/* Error Page */}
          <Route path="*" element={<NotFound />} />
          {/* different type of error need to add later */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
