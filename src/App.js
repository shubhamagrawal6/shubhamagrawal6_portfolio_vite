import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #222;
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navigation />
        <MainWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </MainWrapper>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
