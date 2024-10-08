import { headers } from "next/headers";
import Image from "next/image";

export default function Home() {
  const headerlist = headers();
  let listaheaders = [];
  headerlist.forEach((valor,chave) => {
    listaheaders.push(<li key={chave}>{chave}: {valor}</li>);
  });
  
  return (
    <div class="bg-slate-400 h-screen">
      
    AAAAAA
    A
    AAAA
    A
    AAAAAA
    </div>
  );
}
