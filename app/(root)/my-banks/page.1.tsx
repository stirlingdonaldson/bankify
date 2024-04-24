import { BankCard } from "@/components/BankCard";
import { HeaderBox } from "@/components/shared/HeaderBox";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export const page = async () => {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) redirect("/sign-in");

  const accounts = await getAccounts(loggedIn?.$id);

  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          type="greeting"
          title="Welcome,"
          user="Adrian"
          subtext="Access & manage your account and transactions efficiently."
        />
        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6">
            {accounts &&
              accounts.data.map((account: Account) => (
                <BankCard
                  key={account.id}
                  account={account}
                  userName={"Adrian Hajdin"}
                />
              ))}
          </div>
        </div>
      </div>
      {/* <RightSidebar transactions={account?.transactions} /> */}
    </section>
  );
};
