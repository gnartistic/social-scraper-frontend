import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";
import theme from "./theme";

function App ()
{
  return (
    <ChakraProvider theme={theme}>
      <Dashboard />
    </ChakraProvider>
  );
}

export default App;