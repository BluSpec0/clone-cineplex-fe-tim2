// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    status: { code: 200 },
    rows: [
      {
        name: "John Wick: Chapter 4",
        umur: "image/d17.png",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167706370552494_405x594.jpg",
      },
      {
        name: "Dungeons & Dragons: Honor Among Thieves",
        umur: "image/su.png",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167764540494637_290x426.jpg",
      },
      {
        name: "Mrs. Chatterjee vs. Norway",
        umur: "image/r13.png",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167878648415176_290x426.jpg",
      },
      {
        name: "Shazam! Fury of the Gods",
        umur: "image/r13.png",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167756795914615_290x426.jpg",
      },
      {
        name: "Suzume",
        umur: "image/su.png",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167784448479603_290x426.jpg",
      },
      {
        name: "Jin Qorin",
        umur: "image/d17.png",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167755551155249_290x426.jpg",
      },
      {
        name: "Hantu Baru",
        umur: "image/r13.png",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167755542452152_290x426.jpg",
      },
      {
        name: "Losmen Melati",
        umur: "image/d17.png",
        src: "https://media.21cineplex.com/webcontent/gallery/pictures/167775537273660_290x426.jpg",
      },
    ],
    total_rows: 10,
    total_page: 2,
  });
}
