import Heading from "@/components/Heading/Heading";
import Container from "@/components/container/container";
import FileInput from "@/components/input/fileInput";
import Input from "@/components/input/input";
import Select from "@/components/input/select";
import Textarea from "@/components/input/textarea";

const CreateCourse = () => {
  return ( <div className="flex flex-col w-full">
    <div className="flex flex-col gap-10 w-full">
      <Heading title="Create Courses"/>
      <Container
      childern={
        <div className="grid gap-10 mb-6 md:grid-cols-2 p-2 md:p-10">
          <Select/>
          <Input label="Title" type="text"/>

          <FileInput/>
          <Input label="Content" type="text"/>
          <Input label="Price" type="number"/>
          <Input label="Title" type="text"/>
          <Textarea/>

        </div>
      }
    />
    </div>
  </div> );
}
 
export default CreateCourse;