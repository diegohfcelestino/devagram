// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  nome: string;
  idade: number;
  profissao: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    nome: "Diego Ferreira",
    idade: 35,
    profissao: "Desenvolvedor Fullstack"
  });
}
