import AppClima from "./components/AppClima";
import { ClimaProvider } from './context/ClimaProvider';

function App() {

  return (
    <ClimaProvider>
      <header></header>
      <AppClima />
    </ClimaProvider>
  )
}

export default App
