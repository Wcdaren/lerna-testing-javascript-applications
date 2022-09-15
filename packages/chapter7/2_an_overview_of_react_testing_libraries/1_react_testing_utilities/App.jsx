import React from "react";

export const App = () => {
  // Creates a piece of state that represents the inventory’s cheesecakes
  const [cheesecakes, setCheesecake] = React.useState(0);
  return (
    <div>
      <h1>Inventory Contents</h1>
      <p>Cheesecakes: {cheesecakes}</p>
      {/* Increments the number of cheesecakes when users click the button */}
      <button onClick={() => setCheesecake(cheesecakes + 1)}>
        Add cheesecake
      </button>
    </div>
  );
};
