import Heading from "@/components/Heading/Heading";
import Container from "@/components/container/container";
import Input from "@/components/input/input";

const CreateCourse = () => {
  return ( <div className="flex flex-col w-full">
    <div className="flex flex-col gap-10 w-full">
      <Heading title="Create Courses"/>
      <Container
      childern={
        <div className="grid gap-10 mb-6 md:grid-cols-2 p-2 md:p-10">
          <Input label="Title" type="text"/>
          <Input label="Content" type="text"/>
          <Input label="Price" type="number"/>
          <Input label="Title" type="text"/>

        </div>
      }
    />
    </div>
  </div> );
}
 
export default CreateCourse;