"use client"

import { CourseType } from "@/components/search/types/course.type";
import { createContext, useContext } from "react";


interface CartProps{
  carts: CourseType[]|null;
  totalPrice: number;
  addToCart:(data:CourseType) => void;
  removeFromCart:(courseId:string) => void;
  
}


export const Cart=createContext<CartProps>({
  carts: null,
  totalPrice:0,
  addToCart:()=>{},
  removeFromCart:()=>{}
});

export const useCart=()=>{
  return useContext(Cart)
}