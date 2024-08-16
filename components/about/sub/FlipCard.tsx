'use client'
import Card from "react-bootstrap/Card";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FlipCard({
  title = "Card Title",
  listone = "",
  listtwo = "",
  listthree = "",
  listfour = "",
  transition = 0.5,
  direction = "Y",
  bgColor = "black",
  zIndex = 0,
  height = 300,
  width = 350,
  frontQuote = false,
  backQuote = false,
  blur = "0",
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
          padding: "2rem",
          transform: `rotate${direction}(${flipped ? 180 : 0}deg)`,
          overflow: "hidden",
          backdropFilter: `blur(${blur})`,
        }}
      >
        {!frontQuote && (
          <>
            <Card.Title
              className="text-white text-center flex justify-center items-center h-full"
              style={{ fontSize: "1.7rem" }}
            >
              {title}
            </Card.Title>
          </>
        )}
        {frontQuote && (
          <>
          <Card.Title
            className="text-white text-center flex justify-center items-center h-full"
            style={{ fontSize: "1.7rem" }}
          >
            {title}
          </Card.Title>
        </>
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
          paddingTop: "2rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          transform: `rotate${direction}(${flipped ? 0 : -180}deg)`,
          overflow: "hidden",
          backdropFilter: `blur(${blur})`,
        }}
      >
        {!backQuote && (
          <>
            <blockquote className="blockquote" style={{ fontSize: "1.2rem" }}>
            <ul className="list-disc">
              <li className="text-white">{listone}</li>
              <li className="text-white">{listtwo}</li>
              <li className="text-white">{listthree}</li>
            </ul>
          </blockquote>
          </>
        )}
        {backQuote && (
          <blockquote className="blockquote" style={{ fontSize: "1.2rem" }}>
            <ul className="list-disc">
              <li className="text-white">{listone}</li>
              <li className="text-white">{listtwo}</li>
              <li className="text-white">{listthree}</li>
              <li className="text-white">{listfour}</li>
            </ul>
          </blockquote>
        )}
      </Card>
    </div>
  );
}
