import { SocialMediaProvider } from './context/SocialMediaContext';
import Dashboard from './pages/Dashboard';
import { GlobalStyle } from './shared/Global.styled';


function App() {

  return (
    <SocialMediaProvider>
    <GlobalStyle/>
     <Dashboard/>
    </SocialMediaProvider>
  )
}

export default App
