"use client"
import Heading from "@/components/Heading/Heading";
import Button from "@/components/button/button";
import Container from "@/components/container/container";
import TextEditor from "@/components/editor/editor";

import FileInput from "@/components/input/fileInput";
import Input from "@/components/input/input";
import Select from "@/components/input/select";
import axios from "axios";
import {getDownloadURL,getStorage,ref,uploadBytesResumable} from 'firebase/storage'

import firebaseApp from "@/lib/firebasedb";



import { useCallback, useEffect, useState } from "react";



import { FieldValues, useForm ,SubmitHandler} from "react-hook-form";
import toast from "react-hot-toast";


const CreateCourse = () => {
const [requirement, setRequirement]=useState("")
const [description, setDescription]=useState("")
const [courseUsers, setCourseUsers]=useState("")
const [isnext, setIsNext]=useState(false)
const [image,setImage]=useState<File|null>(null)
const [video,setVideo]=useState<File|null>(null)
const [isLoading, setIsLoading]=useState(false)



  const {register,setValue,handleSubmit,getValues,formState:{errors}}=useForm<FieldValues>({
    defaultValues: {
     
      subject:"",
      price:0.00,
      
      category:"",
     
     
      
    
     

    }
  })
 const courseData=getValues();
 console.log("subject",courseData.subject)
    

  useEffect(() =>{
    setValue('descriptions',description)
    setValue('requirements',requirement)
    setValue('whoShouldTake',courseUsers)
    setValue("cover",image);
    setValue("videoUrl",video);
  },[description,requirement,courseUsers,image,video]);





  const onNextButton=()=>{
   
    setIsNext((prev)=>!prev)
    

   

  }
  const handleImageChange = useCallback((acceptedFiles:any)=> {
    // Do something with the files
    console.log("Image file",acceptedFiles[0].name);
    setImage(acceptedFiles[0])
    // setValue('cover','cover')
  }, []) 



  const handleVideoChange = useCallback((acceptedFiles:any)=> {
    // Do something with the files
    setVideo(acceptedFiles[0])
    console.log(acceptedFiles);
    // setValue('cover','cover')
  }, []) 




  let imageCoverUrl:string="";
  let videoUrl:string="";



  const onSubmit:SubmitHandler<FieldValues>=async(data)=>{
    setIsLoading(true)
    const handleImageUpload = async() =>{
      try{
        const storage=getStorage(firebaseApp);
        if(video){
          const videoName=new Date().getTime()+"-"+video.name;
          const videoStorageRef=ref(storage,`course/videos/${videoName}`);
          const uploadTask=uploadBytesResumable(videoStorageRef,video);

          await new Promise<void>((resolve,reject)=>{
            uploadTask.on('state_changed',
            (snapshot)=>{
              const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100
              console.log(`Uploading: ${progress}%`);
              switch(snapshot.state){
                   case "paused":
                     console.log("Upload file paused");
                     break;
                   case "running":
                     console.log("Upload file running");
                     break;
              }
            },
            (error)=>{
              console.log("upload video Error",error);
              reject(error);
            },
            ()=>{
              //succesful upload image
              getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{
                videoUrl=downloadUrl
                console.log("image download",downloadUrl);
                resolve();
              }).catch((error)=>{
                console.log("error getting download",error);
                reject(error);
              });
            }
  
            )
  
          })

        }


      if(image){
        const fileName=new Date().getTime()+"-"+image.name;
        

        const imageStorageRef=ref(storage,`course/cover/${fileName}`);
        const uploadTask=uploadBytesResumable(imageStorageRef,image);
        await new Promise<void>((resolve,reject)=>{
          uploadTask.on('state_changed',
          (snapshot)=>{
            const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100
            console.log(`Uploading: ${progress}%`);
            switch(snapshot.state){
                 case "paused":
                   console.log("Upload file paused");
                   break;
                 case "running":
                   console.log("Upload file running");
                   break;
            }
          },
          (error)=>{
            console.log("upload image Error",error);
            reject(error);
          },
          ()=>{
            //succesful upload image
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{
              imageCoverUrl=downloadUrl
              console.log("image download",downloadUrl);
              resolve();
            }).catch((error)=>{
              console.log("error getting download",error);
              reject(error);
            });
          }

          )

        })

      }
    
    } catch(error) {

    }

    
    


  }
  await handleImageUpload();

  const course={...data,cover:imageCoverUrl,videoUrl:videoUrl}
    axios.post('/api/course',course).then(()=>{
      toast.success("Course created successfully")
    })
    .catch((error)=>{
      toast.error(error.message)
      console.log(error)
    }).finally(()=>{
      setIsLoading(false)
    });

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
          onDrop={handleImageChange}
              register={register}
              id="cover" 
              errors={errors}          
          />
        </div>


        <div className="w-full  lg:w-8/12 flex flex-col gap-1">
          <Heading small title="Upload Course Video"/>
            <FileInput
          onDrop={handleVideoChange}
              register={register}
              id="videoUrl" 
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
            <Button className="bg-teal-400 text-sm  hover:bg-teal-500"  onClick={onNextButton} title="Next"/>
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
 <div className="pl-2" dangerouslySetInnerHTML={{ __html: courseData.descriptions }}></div>

 </div>

 
 <div className="flex flex-col gap-2 p-2">
 <Heading title="Course Requirement"/>
 <div className="pl-2" dangerouslySetInnerHTML={{ __html: courseData.requirements }}></div>

 </div>


 <div className="flex flex-col gap-2 p-2">
 <Heading title="Who Use This Course?"/>
 <div className="pl-2" dangerouslySetInnerHTML={{ __html: courseData.whoShouldTake}}></div>

 </div>

 <div className="p-4 flex justify-end  mx-20 lg:p-20">
<div className="flex gap-2">

<Button className="bg-teal-400 text-sm  hover:bg-teal-500"  onClick={onNextButton} title="Back"/>
<Button className="bg-teal-400 text-sm  hover:bg-teal-500"  onClick={handleSubmit(onSubmit)} title={isLoading? "Loading...":"Submit"}/>
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