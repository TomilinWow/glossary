import { Header } from "../../components/Header/Header";
import './Glossary.css'
import { Card } from "../../components/Card/Card";
import { glossary } from "../../const/const";


export const Glossary = () => {
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
