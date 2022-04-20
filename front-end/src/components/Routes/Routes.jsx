import { Route, Routes } from 'react-router-dom';
import { Flat } from '../flat';
import SignIn from '../SignIn';
import { HomePage } from '../HomePage';
import PrimarySearchAppBar from '../Navbar';
export const AllRoutes = () => {
  return (
    <>
    <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flat/:id" element={<Flat />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </>
  );
};
