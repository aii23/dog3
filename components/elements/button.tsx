export const Button = (args: {
  name: string;
  onClick: () => void;
  color?: string;
}) => {
  const { name, onClick, color } = args;

  const buttonColor =
    color === 'red'
      ? 'bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'
      : 'bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800';

  return (
    <button
      type="button"
      className={`text-white ${buttonColor} font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
