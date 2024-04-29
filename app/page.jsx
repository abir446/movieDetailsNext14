"use client"
import { useState, useEffect } from "react";
import Movie from "@/components/ui/Movie";
// import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import axios from "axios";
import NotFound from "@/components/NotFound";
import Empty from "@/components/Empty";

export default function Home() {
  //states
  const [isempty,setIsempty]=useState(false)
  const [disabled,setDisable]= useState(false)
  const [name, setName] = useState("");
  const [progress, setProgress] = useState(0);
  const [searched, setSearched] = useState(false);
  const [show, setShow] = useState(false)
  const [title,setTitle] = useState("")
  const [released,setReleased] = useState("")
  const [rating,setRating] = useState("")
  const [director,setDirector] = useState("")
  const [awards,setAwards] = useState("")
  const [country,setCountry] = useState("")
  const [img,setImg] = useState("")
  const [found,setFound] = useState(true)

  useEffect(() => {
    let timer;
    // setName("")
    
    if (searched && name) {
      setIsempty(false)
      setFound(true)
      // If something is searched, start progress and run for 2 seconds
      setProgress(13); // Start progress
      setDisable(true)
      timer = setTimeout(() => {
        
        // setProgress(100); // Set progress to 100 after 2 seconds
        setTimeout(() =>{ setProgress(100)}, 1000);
        setTimeout(() =>{ 
          setSearched(false)
          setShow(!show)
          setDisable(false)
          // setProgress(0)
        }, 2000);
        setProgress(85)
        // Reset progress to 0 after additional 300ms
      }, 1800);
      
    }
    else{
      setSearched(false)
      // setFound(true)
    }
    return () => clearTimeout(timer); // Cleanup timer
  }, [searched]);

  //input change function
  const handleChange = (e) => {
    setName(e.target.value);
  };

  //handle submit function
  const handleSubmit = () => {
    if(!name)
    {
      setIsempty(true)
    }
    setSearched(true);
    setFound(true)
    // console.log(name);
    const api = "https://www.omdbapi.com/?t="+name+"&apikey=f1a3e243"
    axios.get(api)
    .then((res)=>{
      
      setTitle(res.data.Title)
      setAwards(res.data.Awards)
      setCountry(res.data.Country)
      setDirector(res.data.Director)
      setReleased(res.data.Released)
      setRating(res.data.Ratings[0].Value)
      setImg(res.data.Poster)
    })
    .catch(er=>{
      console.log(er)
      setFound(false)
    })
     // Set searched to true when search is submitted
  };
  

  return (
    <div className="md:container shadow-3xl shadow   bg-gradient-to-r from-blue-200 to-violet-700 mx-auto md:my-5 rounded-lg flex flex-col items-center justify-center md:justify-start border border-zinc-900  p-20 md:h-screen md:h-[90vh]">
      <h1 className=" text-xl md:text-4xl w-full text-gray-100 md:font-semibold text-center">Search a movie</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        {!show &&<Input onChange={handleChange} value={name} placeholder="Movie Name" className="w-3/4" type="text" />}
      {show?(<Button className={disabled ? "hidden" : ""} onClick={handleSubmit} type="submit">

        Search Again
      </Button>) : (<Button className={disabled ? "hidden" : ""} onClick={handleSubmit} type="submit">
        Search
      </Button>)}
      
      </div>
        {searched && <Progress value={progress} className="mt-2 w-[25%]" />}
        {show &&  found &&
        <Movie director={director} country={country} rating={rating} awards={awards} img={img} key={title} title={title} released={released} />}
        {isempty && <Empty />}
        {!found && <NotFound />}
    </div>
  );
}
