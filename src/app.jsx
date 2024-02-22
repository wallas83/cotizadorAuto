import { AppSeguro } from "./components/AppSeguro";
import { CotizadorProvider } from "./context/CotizadorContext";

export function App() {
    return (
        <CotizadorProvider>
            <AppSeguro />
        </CotizadorProvider>

    )
}

