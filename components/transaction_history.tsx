import React from 'react';
import { DogTransactionParams } from './interfaces/Dog';

interface TransactionHistoryProps {
  transactions: DogTransactionParams[];
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = (
  props
) => {
  const { transactions } = props;

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
      <table className="w-full text-left table-auto border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2 border-b border-gray-700">Date</th>
            <th className="p-2 border-b border-gray-700">Type</th>
            <th className="p-2 border-b border-gray-700">Dog</th>
            <th className="p-2 border-b border-gray-700">Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="p-2 border-b border-gray-700">
                {transaction.date}
              </td>
              <td className="p-2 border-b border-gray-700">
                {transaction.type}
              </td>
              <td className="p-2 border-b border-gray-700">
                {transaction.dog}
              </td>
              <td className="p-2 border-b border-gray-700">
                {transaction.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
