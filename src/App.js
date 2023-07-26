import './App.css'
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import ArticlePage from './Pages/ArticlePage';
import NotFoundPage from './Pages/NotFoundPage';
import ArticlesList from './Pages/ArticlesList';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
    return (

        <BrowserRouter>

            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/articles" element={<ArticlesList />} />
                    <Route path="/articles/:articleId" element={<ArticlePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>

    );
}
export default App; 