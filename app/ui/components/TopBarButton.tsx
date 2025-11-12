const TopBarButton = ({ name }: { name: string }) => {
  return (
    <button className="p-1.5 rounded cursor-pointer bg-primary-light   border border-third">
      {name}
    </button>
  );
};

export default TopBarButton;
