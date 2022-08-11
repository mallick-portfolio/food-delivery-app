import React from "react";
import delivery from "../../assets/delivery.png";
const Tasty = () => {
  return (
    <div className="tasty-container">
      <div className="sm:w-1/2">
        <img src={delivery} alt="" />
      </div>
      <div className="tasty-flex">
        <h2 className="tasty-title">
          Why <span className="text-secondary">Tasty Treat?</span>
        </h2>
        <p className="tasty-des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam,
          repellat illo sequi odio esse iste fugiat dolor, optio incidunt
          eligendi deleniti!
        </p>
        {tasty.map((t) => (
          <div key={t.id} className="py-3">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-semibold text-primary">{t.title}</span>
            </div>
            <p className="text-sm text-natural mt-3">{t.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const tasty = [
  {
    id: 1,
    title: "Fresh and tasty foods",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.",
  },
  {
    id: 2,
    title: "Quality support",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.",
  },
  {
    id: 3,
    title: "Order from any location",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.",
  },
];
export default Tasty;
