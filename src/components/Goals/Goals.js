import { useState } from "react";
import styles from "./Goals.module.css";

const Goals = () => {
  const myGoalsFakeData = [
    { name: "Run every day", deadline: "6 months", category: "sport" },
    { name: "Learn React and JSX", deadline: "forever", category: "education" },
    {
      name: "Learn HTML&CSS course",
      deadline: "To 21 december",
      category: "education",
    },
    { name: "Learn to dance bachata", deadline: "5 months", category: "dance" },
  ];

  const [goals, setGoals] = useState(myGoalsFakeData);
  const categories = [...new Set(myGoalsFakeData.map((item) => item.category))];

  return (
    <>
      <h1>My goals</h1>

      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>
          {myGoalsFakeData
            .filter((goal) => goal.category == category)
            .map((goal) => (
              <div key={goal.name} className={styles["goals__ctr"]}>
                {goal.name} - {goal.deadline}
              </div>
            ))}
        </section>
      ))}
    </>
  );
};

export default Goals;
