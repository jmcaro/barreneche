import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage';
import NotFoundPage from './pages/NotFoundPage';
import CategoriesForm from './pages/CategoriesForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/roles' element={<CategoriesPage/>}  />
      <Route path="*" element={<NotFoundPage/>}  />
      <Route path="/cat/create" element={<CategoriesForm/>}  />
    </Routes>
  )
}

export default App  