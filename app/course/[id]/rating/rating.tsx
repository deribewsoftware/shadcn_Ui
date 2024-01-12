import Container from "@/components/container/container";

const Rating = () => {
  return (  <Container childern={
    <div className="flex justify-between px-2">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold">4.5</h1>
      </div>
      <div className="flex flex-col gap-4 p-1">
<div className="flex">
  1 star <div className="h-2 w-full bg-teal-400"></div>
  10%
</div>
      </div>
    </div>
  }/>
  
  );
}
 
export default Rating;