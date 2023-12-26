import "./Card.css"
import { FC } from "react";

interface CardProps {
  name: string;
  description: string;
}

export const Card: FC<CardProps> = ({name, description}) => {
  return (
    <div className='card'>
      <div className="card-header">
        {name}
      </div>
      <div className="card-description">
        {description}
      </div>
    </div>
  )
}
