"use client"
import { questions } from '@/lib/questions';
import { useEffect, useRef, useState } from 'react';

const Quiz = () => {
 

  const choice1 = useRef<HTMLLIElement>(document.createElement('li'));
  const choice2 = useRef<HTMLLIElement>(document.createElement('li'));
  const choice3 = useRef<HTMLLIElement>(document.createElement('li'));
  const choice4 = useRef<HTMLLIElement>(document.createElement('li'));
  const choice_array=[choice1, choice2, choice3, choice4]
 

  const [selectedOption, setSelectedOption] = useState<string|null>(null);
  const [score, setScore] = useState(0);
  const [indexQuestion ,setIndexQuestion] = useState(0);
  const [question, setQuestion] = useState(questions[indexQuestion]);
  const [disabled, setDisabled] = useState(false);

  const handleOptionClick = (e:any,ans:number,index:number) => {
   const isCorrect=e.target.value==ans;
   setDisabled(e.target.checked)
   if (isCorrect){
    e.target.parentElement.classList.add("bg-teal-200");
    setScore((prev)=>prev+1)
    

   }else{
    if (choice_array[ans]?.current) {
      choice_array[ans].current.classList.add("bg-teal-200");
    }
    e.target.parentElement.classList.add("bg-rose-200");

   }
   
  };

  


  const onNextChange = ()=>{
    if(indexQuestion<questions.length){
      setIndexQuestion((prev)=>prev+=1)
      choice_array.map((option)=>{
        option.current.classList.remove("bg-teal-200");
        option.current.classList.remove("bg-rose-200");
      })
      setDisabled(false);
     
      
    }
   
    
  }
  const onPrevChange = ()=>{
    if(indexQuestion>0){
      setIndexQuestion((prev)=>prev-=1)
      
     
      
    }
   
    
  }
  
  useEffect(() => { setQuestion(questions[indexQuestion])},[questions,indexQuestion]);

  return (
    <div>
      <div className="flex justify-between px-10">
      <h1>Quiz App</h1>
      <h2>score:{score}</h2>
      <p>{indexQuestion+1} out of {questions.length}</p>
      </div>
      <div>
        <h2>{question.question}</h2>
        <ul>
          {question.choices.map((option, index) => (
            <li ref={choice_array[index]} key={index} className='flex gap-2 p-2'>
              <input disabled={disabled} type="radio" name="0" value={index} onChange={()=>handleOptionClick(event,question.answer,index)}/>
              <label>{option}</label>
            </li>
          ))}
        </ul>
       <div className="flex justify-between px-10"> <button  onClick={onPrevChange}>
          Prev Question
        </button>
        <button  onClick={onNextChange}>
          Next Question
        </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
