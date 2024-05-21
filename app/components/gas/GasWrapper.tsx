import EstimatedFees from "./EstimatedFees";
import GasPrice from "./GasPrices";

function GasWrapper() {
  return (
    <>
      <GasPrice />
      <EstimatedFees />
    </>
  )
}

export default GasWrapper;