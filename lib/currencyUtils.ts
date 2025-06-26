// Currency detection utility for testing
export const testCurrencyDetection = async () => {
  try {
    const response = await fetch('http://localhost:8080/ip/currency');
    const data = await response.json();
    console.log('Currency detected:', data.currency);
    return data.currency;
  } catch (error) {
    console.error('Error fetching currency:', error);
    return 'USD'; // Default fallback
  }
};

// Mock function for testing Indian currency
export const mockIndianCurrency = () => {
  return 'INR';
};

// Mock function for testing US currency
export const mockUSCurrency = () => {
  return 'USD';
};
