import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FlipCard({
  title = "Card Title",
  backBody = "Back Body",
  transition = 0.5,
  direction = "Y",
  bgColor = "black",
  zIndex = 0,
  height = 300,
  width = 300,
  frontQuote = false,
  backQuote = false,
  blur = '0',
}) {
  const [flipped, setFlipped] = useState(false);

  function flipOver() {
    setFlipped(!flipped);
  }

  return (
    <div
      style={{
        position: "relative",
        width: width,
        height: height,
        display: "flex",
        color: "white",
        perspective: "1000px", // Added to enable 3D flipping
      }}
      onMouseEnter={() => flipOver()}
      onMouseLeave={() => flipOver()}
    >
      <Card
        className="flex-center"
        style={{
          width: "100%",
          height: "100%",
          zIndex: flipped ? zIndex : zIndex + 1,
          transition: `transform ${transition}s`,
          backfaceVisibility: "hidden",
          position: "absolute",
          backgroundColor: bgColor,
          paddingTop: "2rem",
		  paddingRight: "3rem",
          transform: `rotate${direction}(${flipped ? 180 : 0}deg)`,
          overflow: "hidden",
          backdropFilter: `blur(${blur})`,
        }}
      >
        {!frontQuote && (
          <>
            <Card.Title className='text-white py-5 px-3 rounded-tr-[3rem] bg-gray-900 ' style={{fontSize: '2.2rem'}}>{title}</Card.Title>
          </>
        )}
        {frontQuote && (
          <blockquote className="blockquote" style={{ fontSize: "1rem" }}>
            <footer className="blockquote-footer text-center mt-1 ">
              {title}
            </footer>
          </blockquote>
        )}
      </Card>

      <Card
        className="flex-center"
        style={{
          width: "100%",
          height: "100%",
          zIndex: flipped ? zIndex + 1 : zIndex,
          transition: `transform ${transition}s`,
          backfaceVisibility: "hidden",
          position: "absolute",
          backgroundColor: bgColor,
          padding: "2rem",
          transform: `rotate${direction}(${flipped ? 0 : -180}deg)`,
          overflow: "hidden",
          backdropFilter: `blur(${blur})`,
        }}
      >
        {!backQuote && (
          <>
            <p className='text-white text-[1.1rem]'>{backBody}</p>
          </>
        )}
        {backQuote && (
          <blockquote className="blockquote" style={{ fontSize: "1.1rem" }}>
            <p className='text-white'>{backBody}</p>
          </blockquote>
        )}
      </Card>
    </div>
  );
}
