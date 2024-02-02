"use client"
import Heading from "@/components/Heading/Heading";
import Button from "@/components/button/button";
import Container from "@/components/container/container";
import TextEditor from "@/components/editor/editor";

import FileInput from "@/components/input/fileInput";
import Input from "@/components/input/input";
import Select from "@/components/input/select";

import { useCallback, useEffect, useState } from "react";



import { FieldValues, useForm ,SubmitHandler} from "react-hook-form";
import { on } from "stream";

const CreateCourse = () => {
const [requirement, setRequirement]=useState("")
const [description, setDescription]=useState("")
const [courseUsers, setCourseUsers]=useState("")
const [isnext, setIsNext]=useState(false)
const [courseData, setCourseData]=useState<any>({})


  const {register,setValue,handleSubmit,formState:{errors}}=useForm<FieldValues>({
    defaultValues: {
     
      "subject":"",
      "price":0.00,
      
      "category":"",
     
      
    
     

    }
  })

  useEffect(() =>{
    setValue('description',description)
    setValue('requirement',requirement)
    setValue('courseUsers',courseUsers)
  },[description,requirement,courseUsers]);





  const onNextButton:SubmitHandler<FieldValues>=(data)=>{
    
    console.log("data:",data);
    setCourseData(data)
    setIsNext((prev)=>!prev)

  }
  const onDrop = useCallback((acceptedFiles:any)=> {
    // Do something with the files
    console.log(acceptedFiles);
    setValue('cover',acceptedFiles)
  }, []) 

  const onSubmit=()=>{
    console.log("onSubmitData:-",courseData);
  }
  return ( <div className="flex flex-col w-full lg:w-8/12 ">
    <div className="flex flex-col gap-20 w-full pb-16 mb-16">
      <Heading title="Create Courses"/>
      {!isnext&&<Container
      childern={
        <div className="flex flex-col gap-10 w-full  lg:mt-20   justify-center items-center p-2">
       
          <div className="w-full  lg:w-8/12"><Select
          id="category"
          register={register}
          errors={errors}

          /></div>
          <div className="w-full  lg:w-8/12"><Input id="subject" register={register} errors={errors}  label="Subject" type="text" required/></div>

          <div className="w-full  lg:w-8/12 flex flex-col gap-1">
          <Heading small title="Upload Course Cover"/>
            <FileInput
          onDrop={onDrop}
              register={register}
              id="cover" 
              errors={errors}          
          />
        </div>
        
        <div className="lg:w-8/12"><Input register={register} errors={errors} label="Price" type="number" id="price" required/></div>
          
         

       
        
          
          <div className="flex flex-col gap-1 my-4">
            <Heading small title="Add Course Description"/>
          <TextEditor value={description} setValue={setDescription}/>
          </div>

          <div className="flex flex-col  gap-1 my-4">
            <Heading small title="Add Course Requiremnts"/>
          <TextEditor value={requirement} setValue={setRequirement}/>
          </div>
        

          <div className="flex flex-col  gap-1  pt-2 my-4">
            <Heading small title="Add who use This Course"/>
          <TextEditor value={courseUsers} setValue={setCourseUsers}/>
          </div>

          <div className="p2 flex justify-end  mx-20 lg:p-20">
            <Button className="bg-teal-400 text-sm  hover:bg-teal-500"  onClick={handleSubmit(onNextButton)} title="Next"/>
          </div>
        </div>
      }
    />}

    {
      isnext&&<Container
      childern={
        <div className="flex flex-col gap-10 p-2">
 <Heading title={courseData?.subject}/>

 <div className="flex flex-col gap-2 p-2">
 <Heading title="About Course"/>
 <div className="pl-2" dangerouslySetInnerHTML={{ __html: courseData.description }}></div>

 </div>

 
 <div className="flex flex-col gap-2 p-2">
 <Heading title="Course Requirement"/>
 <div className="pl-2" dangerouslySetInnerHTML={{ __html: courseData.requirement }}></div>

 </div>


 <div className="flex flex-col gap-2 p-2">
 <Heading title="Who Use This Course?"/>
 <div className="pl-2" dangerouslySetInnerHTML={{ __html: courseData.courseUsers }}></div>

 </div>

 <div className="p-4 flex justify-end  mx-20 lg:p-20">
<div className="flex gap-2">

<Button className="bg-teal-400 text-sm  hover:bg-teal-500"  onClick={handleSubmit(onNextButton)} title="Back"/>
<Button className="bg-teal-400 text-sm  hover:bg-teal-500"  onClick={onSubmit} title="Submit"/>
</div>
          </div>

        </div>
      }
      />
    }



    </div>
  </div> );
}
 
export default CreateCourse;