"use client"
import Heading from "@/components/Heading/Heading";
import Button from "@/components/button/button";
import Container from "@/components/container/container";
import FileInput from "@/components/input/fileInput";
import Input from "@/components/input/input";
import Select from "@/components/input/select";
import Textarea from "@/components/input/textarea";

import { FieldValues, useForm ,SubmitHandler} from "react-hook-form";

const CreateCourse = () => {

  const {register,handleSubmit,formState:{errors}}=useForm<FieldValues>({
    defaultValues: {
     
      "subject":"",
      "price":0.00,
      "description":[],
      "requirements":[],
      "cover":""
    
     

    }
  })
  const onSubmit:SubmitHandler<FieldValues>=(data)=>{
    console.log("data:",data);

  }
  return ( <div className="flex flex-col w-full">
    <div className="flex flex-col gap-10 w-full">
      <Heading title="Create Courses"/>
      <Container
      childern={
        <div className="grid gap-10 mb-6 md:grid-cols-2 p-2 md:p-10">
          <Select/>
          <Input id="subject" register={register} errors={errors}  label="Subject" type="text" required/>

          <FileInput
              register={register}
              id="cover" 
              errors={errors}          
          />
        
        
          <Input register={register} errors={errors} label="Price" type="number" id="price" required/>
          
          <Textarea/>

          <div className="p-4 flex justify-center">
            <Button onClick={handleSubmit(onSubmit)} title="Submit"/>
          </div>

        </div>
      }
    />
    </div>
  </div> );
}
 
export default CreateCourse;