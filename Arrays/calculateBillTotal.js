    
    const calculateBillTotal = (preTaxAndTipAmount) => {
      const tax = 1.095;
      const tip = 0.15;
      const total = (preTaxAndTipAmount * tax) + (preTaxAndTipAmount * tip);
      return total;
    };
    console.log('calculateBillTotal', calculateBillTotal(20));
