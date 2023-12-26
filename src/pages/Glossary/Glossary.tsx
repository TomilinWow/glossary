import { Header } from "../../components/Header/Header";
import './Glossary.css'
import { Card } from "../../components/Card/Card";
import { useEffect, useState } from "react";

interface IGlossary {
  id: number,
  name: string,
  description: string
}

export const Glossary = () => {

  const [glossary, setGlossary] = useState<IGlossary[] | null>(null)

  useEffect(() => {
    const getGlossary = async () => {
      try {
        const response = await fetch('http://localhost:5050/glossary');
        const data = await response.json();
        setGlossary(data);
      } catch (error) {
        console.log(error)
      }
    };

    getGlossary();
  }, [])


  return (
    <>
      <Header/>
      <div className="list">
        {glossary?.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </>
  )
}
