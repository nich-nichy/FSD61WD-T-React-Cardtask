import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const cardProp = [
    {
      subscription: "Free",
      price: "0",
      users: "Single User",
      storage: "50GB Storage",
      publicProject: "Unlimited Public Projects",
      community: "Community Access",
      privateProject: {
        text: "Unlimited Private Projects",
        mode: false,
      },
      support: {
        text: "Dedicated Phone Support",
        mode: false,
      },
      domain: {
        text: "Free Subdomain",
        mode: false,
      },
      report: {
        text: "Monthly Status Reports",
        mode: false,
      },
    },
    {
      subscription: "PLUS",
      price: "9",
      users: "5 Users",
      storage: "50GB Storage",
      publicProject: "Unlimited Public Projects",
      community: "Community Access",
      privateProject: {
        text: "Unlimited Private Projects",
        mode: true,
      },
      support: {
        text: "Dedicated Phone Support",
        mode: true,
      },
      domain: {
        text: "Free Subdomain",
        mode: true,
      },
      report: {
        text: "Monthly Status Reports",
        mode: false,
      },
    },
    {
      subscription: "PRO",
      price: "49",
      users: "Unlimited Users",
      storage: "50GB Storage",
      publicProject: "Unlimited Public Projects",
      community: "Community Access",
      privateProject: {
        text: "Unlimited Private Projects",
        mode: true,
      },
      support: {
        text: "Dedicated Phone Support",
        mode: true,
      },
      domain: {
        text: "Free Subdomain",
        mode: true,
      },
      report: {
        text: "Monthly Status Reports",
        mode: true,
      },
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {cardProp.map((card, num) => {
            console.log(card);
            return (
              <Card
                key={num}
                subscription={card.subscription}
                price={card.price}
                users={card.users}
                storage={card.storage}
                publicProject={card.publicProject}
                community={card.community}
                privateProject={card.privateProject}
                support={card.support}
                domain={card.domain}
                report={card.report}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
