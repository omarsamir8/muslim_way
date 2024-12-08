import './App.css';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home';
import QuranPage from './pages/QuranPage';
import QuranDetails from './pages/SinglePageForQuran';
import PrayerPage from './pages/PrayerPage';
import HadithPage from './pages/HadithPage';
import AzkarPage from './pages/AzarPage';
import './i18n';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quran" element={<QuranPage />} />
                <Route path="/quran/:QuranID" element={<QuranDetails />} />
                <Route path="/prayertimes" element={<PrayerPage />} />
                <Route path="/hadithpage" element={<HadithPage />} />
                <Route path="/azkarpage" element={<AzkarPage />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
