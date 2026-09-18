(async()=>{
  const parts=[];
  for(let i=0;i<7;i++){
    const r=await fetch(`game.part${i}.txt`,{cache:"no-store"});
    if(!r.ok) throw new Error(`Не удалось загрузить часть игры ${i}`);
    parts.push(await r.text());
  }
  const code=parts.join("");
  (0,eval)(code);
})().catch(err=>{console.error(err);document.body.innerHTML=`<pre style="color:white;padding:20px">${err.message}</pre>`});
