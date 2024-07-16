import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className={"home"}>
      <div className={"home-content"}>
        <header className={"home-header"}>
          <HeaderBox
            type={"greeting"}
            title={"Welcome"}
            user={loggedIn?.name || "Guest"}
            subtext={"Access and manage your account and transactions efficiently."}
          />
        </header>
        <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35} />
        Recent Transactions
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 500.5 }, { currentBalance: 1250.25 }]}
      />
    </section>
  );
};

export default Home;