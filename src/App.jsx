import HomePage from './components/pages/home-page';
import { ThemeProvider } from './contexts/theme-context';

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;