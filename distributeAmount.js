let orders = [
  { id: 1, totalPayment: 200, saleAmount: 8000, dueAmount: 7800 },
  { id: 1, totalPayment: 100, saleAmount: 5000, dueAmount: 4900 },
];

let totalAmount = 8000 || 0; //paidAmount that mine input amount
const autoPaymentDistibue = orders.map((item) => {
  let newData = { ...item };
  newData.distibuteAmount = Math.min(item.dueAmount, totalAmount);
  totalAmount = totalAmount - newData.distibuteAmount;
  return newData;
});

console.log(autoPaymentDistibue);