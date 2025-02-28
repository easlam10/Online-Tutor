interface makeTypes{
    icon:React.ReactNode
    label:string
}
export const BlogCardItems = ({ icon, label } :makeTypes) => {
  return (
    <div className="w-fit h-fit flex items-center gap-x-2 ">
      {icon}
      <h1 className="text-sm font-normal"> {label}</h1>
    </div>
  );
};
