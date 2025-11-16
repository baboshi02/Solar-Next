"use client";
interface ITopBarButton extends React.ComponentProps<"button"> {
  name: string;
}
const TopBarButton = ({ name, ...props }: ITopBarButton) => {
  return (
    <button
      className="p-1.5 rounded cursor-pointer bg-primary-light   border border-third"
      {...props}
    >
      {name}
    </button>
  );
};

export const LogOutButton = ({ action }: { action: () => Promise<never> }) => {
  return <TopBarButton onClick={async () => await action()} name="logout" />;
};
export default TopBarButton;
