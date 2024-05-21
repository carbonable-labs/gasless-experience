import { fetchGasTokenPrices } from "@avnu/gasless-sdk";
import { useEffect } from "react";
import { useGasContext } from "../common/GasContext";

function GasPrice() {
  const { options, gasTokenPrices, setGasTokenPrices } = useGasContext();

  useEffect(() => {
    // Function to fetch gas token prices and update state
    const fetchAndSetGasTokenPrices = async () => {
      try {
        const prices = await fetchGasTokenPrices(options);
        setGasTokenPrices(prices);
      } catch (error) {
        console.error('Error fetching gas token prices:', error);
      }
    };

    // Initial fetch
    fetchAndSetGasTokenPrices();

    // Setup interval to fetch every 10 seconds
    const intervalId = setInterval(fetchAndSetGasTokenPrices, 10000);

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-neutral-300">
      Available gas tokens: <span className="text-neutral-100">{gasTokenPrices.length}</span>
    </div>      
  )
}

export default GasPrice;